'use client';

import { useState, useRef, useCallback } from 'react';
import { UploadedFile } from '../lib/types';

interface FileUploadProps {
  uploadedFiles: UploadedFile[];
  onFileUploaded: (file: Omit<UploadedFile, 'id'>) => void;
  onFileDeleted: (fileId: string, fileUrl: string) => void;
}

const MAX_FILE_SIZE = 4.5 * 1024 * 1024; // 4.5MB

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getFileIcon(type: string): string {
  if (type.startsWith('image/')) return '🖼️';
  if (type === 'application/pdf') return '📄';
  if (type.includes('word')) return '📝';
  if (type === 'text/plain') return '📃';
  return '📎';
}

export default function FileUpload({ uploadedFiles, onFileUploaded, onFileDeleted }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const uploadFile = async (file: File) => {
    setError(null);

    if (file.size > MAX_FILE_SIZE) {
      setError('File too large. Maximum size is 4.5MB.');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Simulate progress since fetch doesn't support progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90));
      }, 100);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Upload failed');
      }

      const data = await response.json();

      onFileUploaded({
        filename: data.filename,
        url: data.url,
        size: data.size,
        type: data.type,
        uploadedAt: new Date().toISOString(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        await uploadFile(files[0]);
      }
    },
    [onFileUploaded]
  );

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await uploadFile(files[0]);
    }
    // Reset input so same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (fileId: string, fileUrl: string) => {
    setDeletingId(fileId);
    try {
      const response = await fetch('/api/upload/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: fileUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete file');
      }

      onFileDeleted(fileId, fileUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-accent-blue bg-accent-blue/10'
            : 'border-border hover:border-accent-blue/50 hover:bg-bg-card/50'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.webp"
        />

        {isUploading ? (
          <div className="space-y-3">
            <div className="text-3xl animate-pulse">⬆️</div>
            <p className="text-text-primary font-medium">Uploading...</p>
            <div className="w-full max-w-xs mx-auto bg-bg-card rounded-full h-2">
              <div
                className="bg-accent-blue h-2 rounded-full transition-all duration-200"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="text-3xl mb-2">📁</div>
            <p className="text-text-primary font-medium">
              Drop files here or click to upload
            </p>
            <p className="text-text-secondary text-sm mt-1">
              PDF, images, text, Word docs (max 4.5MB)
            </p>
          </>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-3 text-accent-red text-sm flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="hover:opacity-70">
            ✕
          </button>
        </div>
      )}

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-text-secondary">
            Uploaded Files ({uploadedFiles.length})
          </h4>
          <div className="space-y-2">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-bg-card rounded-lg p-3 border border-border"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl flex-shrink-0">
                    {getFileIcon(file.type)}
                  </span>
                  <div className="min-w-0">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-accent-blue truncate block text-sm font-medium"
                    >
                      {file.filename}
                    </a>
                    <p className="text-xs text-text-secondary">
                      {formatFileSize(file.size)} •{' '}
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:underline text-sm"
                  >
                    Open
                  </a>
                  <button
                    onClick={() => handleDelete(file.id, file.url)}
                    disabled={deletingId === file.id}
                    className="text-accent-red hover:opacity-70 text-sm disabled:opacity-50"
                  >
                    {deletingId === file.id ? '...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
