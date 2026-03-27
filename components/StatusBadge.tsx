'use client';

import { TopicStatus, Confidence } from '../lib/types';

interface StatusBadgeProps {
  status: TopicStatus;
  onClick?: () => void;
}

const statusConfig = {
  not_started: { label: 'Not Started', className: 'status-not-started' },
  learning: { label: 'Learning', className: 'status-learning' },
  done: { label: 'Done', className: 'status-done' },
};

export function StatusBadge({ status, onClick }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded text-xs font-medium ${config.className} ${
        onClick ? 'cursor-pointer hover:opacity-80' : ''
      }`}
    >
      {config.label}
    </button>
  );
}

interface ConfidenceBadgeProps {
  confidence: Confidence;
  onClick?: () => void;
}

const confidenceConfig = {
  low: { label: 'Low', icon: '🔴', className: 'confidence-low' },
  medium: { label: 'Medium', icon: '🟡', className: 'confidence-medium' },
  high: { label: 'High', icon: '🟢', className: 'confidence-high' },
};

export function ConfidenceBadge({ confidence, onClick }: ConfidenceBadgeProps) {
  const config = confidenceConfig[confidence];
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-bg-card ${config.className} ${
        onClick ? 'cursor-pointer hover:opacity-80' : ''
      }`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </button>
  );
}

interface WeightageBadgeProps {
  weightage: string | number;
  size?: 'sm' | 'md';
}

export function WeightageBadge({ weightage, size = 'sm' }: WeightageBadgeProps) {
  const sizeClass = size === 'sm' ? 'text-xs px-1.5 py-0.5' : 'text-sm px-2 py-1';
  return (
    <span className={`${sizeClass} rounded bg-accent-purple/20 text-accent-purple font-medium`}>
      {typeof weightage === 'number' ? `${weightage}%` : weightage}
    </span>
  );
}
