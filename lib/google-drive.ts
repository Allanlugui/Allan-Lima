// lib/google-drive.ts
'use client';

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token?: string; error?: string }) => void;
            error_callback?: (err: unknown) => void;
          }) => {
            requestAccessToken: (options?: { prompt?: string }) => void;
          };
        };
      };
    };
  }
}

const DRIVE_TOKEN_KEY = 'allan_gdrive_access_token';
const DRIVE_TOKEN_EXPIRY_KEY = 'allan_gdrive_token_expiry';
const DRIVE_FOLDER_NAME = 'Portfólio Allan - Fotos de Campo';

export interface DriveUploadResult {
  fileId: string;
  viewUrl: string;
  thumbnailLink: string;
  name: string;
  size?: number;
}

/**
 * Checks if a valid cached Google Drive access token exists in session
 */
export function getCachedDriveToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const token = sessionStorage.getItem(DRIVE_TOKEN_KEY);
    const expiry = sessionStorage.getItem(DRIVE_TOKEN_EXPIRY_KEY);
    if (token && expiry && Date.now() < parseInt(expiry, 10)) {
      return token;
    }
  } catch {
    // Ignore storage issues
  }
  return null;
}

/**
 * Returns true if a valid cached Google Drive access token exists
 */
export function isDriveConnected(): boolean {
  return Boolean(getCachedDriveToken());
}

/**
 * Saves Google Drive token in session storage
 */
export function saveDriveToken(token: string, expiresInSeconds: number = 3500) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(DRIVE_TOKEN_KEY, token);
    sessionStorage.setItem(DRIVE_TOKEN_EXPIRY_KEY, (Date.now() + expiresInSeconds * 1000).toString());
  } catch {
    // Ignore
  }
}

/**
 * Clears stored Drive token
 */
export function clearDriveToken() {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(DRIVE_TOKEN_KEY);
    sessionStorage.removeItem(DRIVE_TOKEN_EXPIRY_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Requests an OAuth access token for Google Drive via Google Identity Services
 */
export async function requestGoogleDriveToken(promptConsent = false): Promise<string> {
  const cached = getCachedDriveToken();
  if (cached && !promptConsent) {
    return cached;
  }

  // Wait briefly for GSI script if still loading
  if (typeof window !== 'undefined' && !window.google?.accounts?.oauth2) {
    let retries = 0;
    while (retries < 20 && !window.google?.accounts?.oauth2) {
      await new Promise((r) => setTimeout(r, 100));
      retries++;
    }
  }

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.google?.accounts?.oauth2) {
      reject(new Error('O serviço do Google Identity Services não foi carregado. Verifique sua conexão.'));
      return;
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

    try {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'https://www.googleapis.com/auth/drive.file',
        callback: (response) => {
          if (response.error) {
            reject(new Error(`Erro de autenticação Google: ${response.error}`));
            return;
          }
          if (response.access_token) {
            saveDriveToken(response.access_token);
            resolve(response.access_token);
          } else {
            reject(new Error('Token de acesso não foi retornado.'));
          }
        },
        error_callback: (err) => {
          reject(new Error(`Falha no login do Google: ${JSON.stringify(err)}`));
        },
      });

      client.requestAccessToken({ prompt: promptConsent ? 'consent' : '' });
    } catch (err) {
      reject(err instanceof Error ? err : new Error('Falha ao inicializar autenticação com Google Drive.'));
    }
  });
}

/**
 * Finds or creates the dedicated portfolio folder on user's Google Drive
 */
async function getOrCreatePortfolioFolder(token: string): Promise<string | null> {
  try {
    // Search for existing folder
    const q = `name = '${DRIVE_FOLDER_NAME}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`;
    const searchRes = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name)`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (searchRes.ok) {
      const data = await searchRes.json();
      if (data.files && data.files.length > 0) {
        return data.files[0].id;
      }
    }

    // Create new folder
    const createRes = await fetch('https://www.googleapis.com/drive/v3/files', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: DRIVE_FOLDER_NAME,
        mimeType: 'application/vnd.google-apps.folder',
      }),
    });

    if (createRes.ok) {
      const folderData = await createRes.json();
      return folderData.id;
    }
  } catch (err) {
    console.warn('Could not create/find Google Drive folder, uploading to root folder instead:', err);
  }
  return null;
}

/**
 * Resizes/optimizes large mobile camera images to save bandwidth and ensure instant uploads
 */
export async function optimizeImageFile(file: File, maxDimension = 1920, quality = 0.88): Promise<{ blob: Blob; dataUrl: string }> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve({ blob, dataUrl: canvas.toDataURL('image/jpeg', quality) });
              } else {
                resolve({ blob: file, dataUrl });
              }
            },
            'image/jpeg',
            quality
          );
        } else {
          resolve({ blob: file, dataUrl });
        }
      };
      img.onerror = () => {
        resolve({ blob: file, dataUrl });
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Uploads an image directly from Mobile Camera or File Picker to Google Drive
 */
export async function uploadImageToGoogleDrive(
  file: File,
  customTitle?: string
): Promise<DriveUploadResult> {
  const token = await requestGoogleDriveToken();

  // Optimize image for fast mobile upload
  const { blob } = await optimizeImageFile(file);

  // Folder lookup/creation
  const folderId = await getOrCreatePortfolioFolder(token);

  // Generate safe filename
  const cleanTitle = (customTitle || file.name || 'foto_campo')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .slice(0, 40);
  const fileName = `allan_${cleanTitle}_${Date.now()}.jpg`;

  // Metadata
  const metadata: { name: string; mimeType: string; parents?: string[] } = {
    name: fileName,
    mimeType: 'image/jpeg',
  };
  if (folderId) {
    metadata.parents = [folderId];
  }

  // Build Multipart Form
  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const metadataPart = `${delimiter}Content-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}`;
  const mediaHeader = `${delimiter}Content-Type: image/jpeg\r\n\r\n`;

  const arrayBuffer = await blob.arrayBuffer();
  const fileBytes = new Uint8Array(arrayBuffer);

  // Convert string parts to bytes
  const encoder = new TextEncoder();
  const metadataBytes = encoder.encode(metadataPart);
  const mediaHeaderBytes = encoder.encode(mediaHeader);
  const closeBytes = encoder.encode(closeDelimiter);

  // Combine into a single payload
  const totalLength = metadataBytes.length + mediaHeaderBytes.length + fileBytes.length + closeBytes.length;
  const payload = new Uint8Array(totalLength);
  let offset = 0;

  payload.set(metadataBytes, offset);
  offset += metadataBytes.length;
  payload.set(mediaHeaderBytes, offset);
  offset += mediaHeaderBytes.length;
  payload.set(fileBytes, offset);
  offset += fileBytes.length;
  payload.set(closeBytes, offset);

  // Upload to Drive v3
  const uploadRes = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webContentLink,thumbnailLink',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: payload,
    }
  );

  if (!uploadRes.ok) {
    const errBody = await uploadRes.text();
    // If token expired, clear cache so next try prompts a fresh token
    if (uploadRes.status === 401) {
      clearDriveToken();
    }
    throw new Error(`Falha no upload para Google Drive (${uploadRes.status}): ${errBody}`);
  }

  const uploadedData = await uploadRes.json();
  const fileId = uploadedData.id;

  // Make file publicly readable so it displays in portfolio images
  try {
    await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: 'reader',
        type: 'anyone',
      }),
    });
  } catch (permErr) {
    console.warn('Could not set public permission on Google Drive file:', permErr);
  }

  // Google User Content CDN direct view URL (fastest & cleanest for img tags)
  const viewUrl = `https://lh3.googleusercontent.com/d/${fileId}`;
  const thumbnailLink = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;

  return {
    fileId,
    viewUrl,
    thumbnailLink,
    name: fileName,
    size: blob.size,
  };
}
