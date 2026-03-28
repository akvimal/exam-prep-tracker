'use client';

import { useState } from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
  onClose?: () => void;
}

export default function PDFViewer({ pdfUrl, title, onClose }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">📖</span>
          <h2 className="text-lg font-semibold text-text-primary">
            {title || 'NCERT Textbook'}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm bg-accent-blue text-white rounded-lg hover:bg-accent-blue/80 transition-colors"
          >
            Open in New Tab
          </a>
          <a
            href={pdfUrl}
            download
            className="px-3 py-1.5 text-sm bg-bg-card text-text-primary border border-border rounded-lg hover:bg-bg-secondary transition-colors"
          >
            Download
          </a>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-card rounded-lg transition-colors"
              title="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-primary">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-blue mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading PDF...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-primary">
            <div className="text-center">
              <div className="text-4xl mb-4">📄</div>
              <p className="text-text-secondary mb-4">Unable to display PDF in browser.</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/80 transition-colors"
              >
                Open PDF in New Tab
              </a>
            </div>
          </div>
        )}

        <iframe
          src={pdfUrl}
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
          title={title || 'PDF Viewer'}
        />
      </div>
    </div>
  );
}

// Inline PDF viewer for embedding in pages
interface InlinePDFViewerProps {
  pdfUrl: string;
  height?: string;
}

export function InlinePDFViewer({ pdfUrl, height = '600px' }: InlinePDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative bg-bg-card rounded-lg overflow-hidden border border-border" style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-card">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue mx-auto mb-2"></div>
            <p className="text-text-secondary text-sm">Loading PDF...</p>
          </div>
        </div>
      )}
      <iframe
        src={pdfUrl}
        className="w-full h-full"
        onLoad={() => setIsLoading(false)}
        title="PDF Viewer"
      />
    </div>
  );
}
