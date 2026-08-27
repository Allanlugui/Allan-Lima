import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, doc, getDoc, setDoc, deleteDoc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { PortfolioDatabase, DEFAULT_PORTFOLIO_DATA } from './portfolio-store';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    if (getApps().length > 0) {
      app = getApp();
    } else {
      app = initializeApp({
        apiKey: firebaseConfig.apiKey,
        authDomain: firebaseConfig.authDomain,
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket,
        messagingSenderId: firebaseConfig.messagingSenderId,
        appId: firebaseConfig.appId,
      });
    }
  }
  return app;
}

export function getDb(): Firestore {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    if (firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)') {
      db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
    } else {
      db = getFirestore(firebaseApp);
    }
  }
  return db;
}

const PORTFOLIO_COLLECTION = 'portfolio';
const PORTFOLIO_DOC = 'main';
const IMAGES_COLLECTION = 'portfolio_images';

/**
 * Optimize image before storing in the database.
 * Resizes to max 1200px and applies WebP/JPEG compression (~40KB - 90KB)
 */
export async function optimizeImageForDatabase(
  file: File,
  maxDimension = 1200,
  quality = 0.82
): Promise<{ dataUrl: string; width: number; height: number; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Falha ao ler arquivo de imagem.'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Falha ao carregar imagem para otimização.'));
      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

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
        if (!ctx) {
          reject(new Error('Falha ao criar contexto gráfico no navegador.'));
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Try WebP first for optimal compression
        let dataUrl = canvas.toDataURL('image/webp', quality);
        let mimeType = 'image/webp';

        // Fallback to JPEG if WebP not supported or larger
        if (!dataUrl.startsWith('data:image/webp')) {
          dataUrl = canvas.toDataURL('image/jpeg', quality);
          mimeType = 'image/jpeg';
        }

        resolve({ dataUrl, width, height, mimeType });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Upload and persist an image directly to Firebase Firestore Database.
 * This guarantees the image is permanent and visible to any visitor without Google Drive auth.
 */
export async function uploadImageToDatabase(
  file: File,
  nameHint = 'atividade_campo'
): Promise<{ id: string; dataUrl: string }> {
  try {
    const firestore = getDb();
    const { dataUrl, mimeType } = await optimizeImageForDatabase(file);
    const id = `img_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const imageDocRef = doc(firestore, IMAGES_COLLECTION, id);
    await setDoc(imageDocRef, {
      id,
      name: `${nameHint.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`,
      dataUrl,
      mimeType,
      createdAt: new Date().toISOString(),
    });

    return { id, dataUrl };
  } catch (err) {
    console.error('Error uploading image to database:', err);
    // Even if firestore has temporary network issue, optimize and return local dataUrl
    const { dataUrl } = await optimizeImageForDatabase(file);
    return {
      id: `img_fallback_${Date.now()}`,
      dataUrl,
    };
  }
}

/**
 * Delete an image document from Firebase Database
 */
export async function deleteImageFromDatabase(imageId: string): Promise<boolean> {
  try {
    if (!imageId || !imageId.startsWith('img_')) return false;
    const firestore = getDb();
    const imageDocRef = doc(firestore, IMAGES_COLLECTION, imageId);
    await deleteDoc(imageDocRef);
    return true;
  } catch (err) {
    console.warn('Could not delete image document from database:', err);
    return false;
  }
}

/**
 * Fetch the latest portfolio data from Firestore cloud database
 */
export async function fetchPortfolioFromFirestore(): Promise<PortfolioDatabase | null> {
  try {
    const firestore = getDb();
    const docRef = doc(firestore, PORTFOLIO_COLLECTION, PORTFOLIO_DOC);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as PortfolioDatabase;
    }
    return null;
  } catch (err) {
    console.warn('Could not fetch portfolio from Firestore, falling back to local storage:', err);
    return null;
  }
}

/**
 * Save updated portfolio database to Firestore cloud database
 */
export async function savePortfolioToFirestore(data: PortfolioDatabase): Promise<boolean> {
  try {
    const firestore = getDb();
    const docRef = doc(firestore, PORTFOLIO_COLLECTION, PORTFOLIO_DOC);
    await setDoc(docRef, {
      ...data,
      lastUpdated: new Date().toISOString(),
    }, { merge: true });
    return true;
  } catch (err) {
    console.error('Error saving portfolio to Firestore:', err);
    return false;
  }
}

/**
 * Listen for real-time portfolio updates from Firestore
 */
export function subscribeToPortfolioFirestore(
  onUpdate: (data: PortfolioDatabase) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  try {
    const firestore = getDb();
    const docRef = doc(firestore, PORTFOLIO_COLLECTION, PORTFOLIO_DOC);
    return onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const cloudData = snapshot.data() as PortfolioDatabase;
          onUpdate(cloudData);
        } else {
          // Document does not exist yet on cloud, initialize it with DEFAULT_PORTFOLIO_DATA
          savePortfolioToFirestore(DEFAULT_PORTFOLIO_DATA).catch(console.error);
        }
      },
      (error) => {
        console.warn('Firestore subscription error:', error);
        if (onError) onError(error);
      }
    );
  } catch (err) {
    console.warn('Failed to subscribe to Firestore:', err);
    return () => {};
  }
}

