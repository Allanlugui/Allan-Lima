'use client';

import React, { useState, useRef } from 'react';
import {
  Camera,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Trash2,
  Cloud,
} from 'lucide-react';
import { uploadImageToGoogleDrive, optimizeImageFile } from '@/lib/google-drive';

interface GoogleDriveImageUploadProps {
  currentImageUrl?: string;
  onImageChange: (imageUrl: string, driveFileId?: string) => void;
  titleHint?: string;
  label?: string;
}

export function GoogleDriveImageUpload({
  currentImageUrl,
  onImageChange,
  titleHint = 'foto_campo',
  label = 'Foto da Atividade / Projeto',
}: GoogleDriveImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(currentImageUrl || '');
  const [isDriveSynced, setIsDriveSynced] = useState<boolean>(
    Boolean(currentImageUrl && (currentImageUrl.includes('googleusercontent.com') || currentImageUrl.includes('drive.google.com')))
  );

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelected = async (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      setErrorMsg('Por favor, selecione um arquivo de imagem válido (JPG, PNG, WEBP).');
      return;
    }

    setErrorMsg(null);
    setIsUploading(true);
    setUploadProgress('Processando imagem...');

    try {
      // 1. Instant local preview so the user sees their photo with zero delay
      const { dataUrl } = await optimizeImageFile(file, 1920, 0.88);
      setPreviewUrl(dataUrl);
      onImageChange(dataUrl);

      // 2. Upload directly to user's Google Drive
      setUploadProgress('Salvando no seu Google Drive...');
      const result = await uploadImageToGoogleDrive(file, titleHint);

      // 3. Update with permanent Google Drive CDN URL
      setPreviewUrl(result.viewUrl);
      setIsDriveSynced(true);
      onImageChange(result.viewUrl, result.fileId);
      setUploadProgress('Foto salva no Google Drive com sucesso!');
    } catch (err: unknown) {
      console.error('Google Drive Upload Error:', err);
      const message = err instanceof Error ? err.message : 'Falha ao salvar no Google Drive.';
      setErrorMsg(
        message.includes('Token') || message.includes('autenticação')
          ? 'Conecte sua conta Google para salvar no Google Drive. A pré-visualização local foi mantida.'
          : message
      );
      // Keep local preview if Drive fails
      setIsDriveSynced(false);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleRemovePhoto = () => {
    setPreviewUrl('');
    setIsDriveSynced(false);
    setErrorMsg(null);
    onImageChange('');
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
          {label}
        </label>
        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1">
          <Cloud className="w-3 h-3 text-blue-600" />
          <span>Google Drive</span>
        </span>
      </div>

      {/* Hidden Native File Inputs */}
      {/* 1. Camera Input (Mobile native capture) */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleFileSelected(e.target.files[0]);
          }
        }}
      />

      {/* 2. File Picker Input (Mobile Gallery / Desktop files) */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleFileSelected(e.target.files[0]);
          }
        }}
      />

      {/* Main Upload Box & Action Buttons */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl p-4 transition-all ${
          previewUrl
            ? 'border-slate-300 bg-slate-50/70'
            : 'border-blue-300 hover:border-blue-500 bg-blue-50/40 hover:bg-blue-50/80'
        }`}
      >
        {previewUrl ? (
          /* Preview State */
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 aspect-video max-h-56 flex items-center justify-center group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl}
                alt="Foto selecionada"
                className="w-full h-full object-cover"
              />

              {/* Status overlay */}
              <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-xs">
                {isUploading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                    <span>Enviando para o Drive...</span>
                  </>
                ) : isDriveSynced ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 text-[11px]">Salvo no Google Drive</span>
                  </>
                ) : (
                  <>
                    <Cloud className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[11px]">Foto Carregada</span>
                  </>
                )}
              </div>
            </div>

            {/* Actions for current photo */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  disabled={isUploading}
                  className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tirar Outra Foto</span>
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-blue-600" />
                  <span>Trocar dos Arquivos</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleRemovePhoto}
                className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remover</span>
              </button>
            </div>
          </div>
        ) : (
          /* Empty State - Big Action Buttons for Camera / Files */
          <div className="text-center py-5 px-2 space-y-4">
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
                <Camera className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
                <Upload className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-800">
                Envie fotos diretamente do seu dispositivo
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tire uma foto na hora com a câmera ou escolha fotos da galeria do seu celular/computador. Elas serão salvas no seu Google Drive e exibidas no portfólio.
              </p>
            </div>

            {/* Direct Big Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                disabled={isUploading}
                className="w-full sm:w-auto px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Camera className="w-4 h-4" />
                <span>Tirar Foto com a Câmera</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Escolher dos Meus Arquivos / Galeria</span>
              </button>
            </div>
          </div>
        )}

        {/* Loading Spinner / Progress */}
        {isUploading && (
          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-2 text-xs font-bold text-blue-800 animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            <span>{uploadProgress}</span>
          </div>
        )}

        {/* Error Feedback */}
        {errorMsg && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-xs text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-bold">{errorMsg}</div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-1 text-blue-700 underline font-bold flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Tentar novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
