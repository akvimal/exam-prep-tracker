'use client';

import { useState, useRef } from 'react';
import { useStore } from '../../lib/store';

export default function SettingsPage() {
  const { exportData, importData } = useStore();
  const [exportSuccess, setExportSuccess] = useState(false);
  const [importSuccess, setImportSuccess] = useState<boolean | null>(null);
  const [importError, setImportError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exam-prep-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3000);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      try {
        const success = importData(content);
        setImportSuccess(success);
        setImportError(success ? '' : 'Invalid data format');
      } catch {
        setImportSuccess(false);
        setImportError('Failed to parse file');
      }
      setTimeout(() => {
        setImportSuccess(null);
        setImportError('');
      }, 3000);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      localStorage.removeItem('exam-prep-storage');
      window.location.reload();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary">Manage your data and preferences</p>
      </div>

      {/* Data Management */}
      <div className="bg-bg-secondary rounded-xl p-6 border border-border mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Data Management</h2>
        <p className="text-text-secondary text-sm mb-6">
          Your data is stored locally in your browser. Use export to create a backup or transfer
          to another device. Use import to restore from a backup.
        </p>

        <div className="space-y-4">
          {/* Export */}
          <div className="flex items-center justify-between p-4 bg-bg-card rounded-lg">
            <div>
              <h3 className="font-medium text-text-primary">Export Data</h3>
              <p className="text-sm text-text-secondary">
                Download all your data as a JSON file
              </p>
            </div>
            <button onClick={handleExport} className="btn-primary">
              Export
            </button>
          </div>
          {exportSuccess && (
            <p className="text-accent-green text-sm">Data exported successfully!</p>
          )}

          {/* Import */}
          <div className="flex items-center justify-between p-4 bg-bg-card rounded-lg">
            <div>
              <h3 className="font-medium text-text-primary">Import Data</h3>
              <p className="text-sm text-text-secondary">
                Restore from a previously exported backup
              </p>
            </div>
            <button onClick={handleImportClick} className="btn-secondary">
              Import
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
          </div>
          {importSuccess === true && (
            <p className="text-accent-green text-sm">Data imported successfully!</p>
          )}
          {importSuccess === false && (
            <p className="text-accent-red text-sm">Import failed: {importError}</p>
          )}

          {/* Reset */}
          <div className="flex items-center justify-between p-4 bg-bg-card rounded-lg border border-accent-red/30">
            <div>
              <h3 className="font-medium text-text-primary">Reset All Data</h3>
              <p className="text-sm text-text-secondary">
                Delete all data and start fresh (cannot be undone)
              </p>
            </div>
            <button onClick={handleReset} className="btn-danger">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-bg-secondary rounded-xl p-6 border border-border mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Storage Info</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Storage Type</span>
            <span className="text-text-primary">LocalStorage</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Data Location</span>
            <span className="text-text-primary">Browser (this device only)</span>
          </div>
          <p className="text-xs text-text-secondary mt-4">
            Your data is stored locally in your browser and is not synced across devices.
            Clearing browser data will erase your progress. We recommend exporting a backup regularly.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="bg-bg-secondary rounded-xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-text-primary mb-4">About</h2>
        <div className="space-y-2 text-sm">
          <p className="text-text-secondary">
            Exam Prep Tracker helps you organize and track your exam preparation across
            multiple subjects and projects.
          </p>
          <p className="text-text-secondary mt-4">
            Version 0.1.0
          </p>
        </div>
      </div>
    </div>
  );
}
