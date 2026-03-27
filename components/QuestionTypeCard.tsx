'use client';

import { QuestionType, QuestionTypeProgress, questionTypeInfo } from '../lib/types';

interface QuestionTypeCardProps {
  type: QuestionType;
  progress?: QuestionTypeProgress;
  onPractice: () => void;
}

export default function QuestionTypeCard({ type, progress, onPractice }: QuestionTypeCardProps) {
  const info = questionTypeInfo[type];

  const practiceCount = progress?.practiceCount || 0;
  const timeSpent = progress?.timeSpentMinutes || 0;
  const accuracy = progress?.totalAttempted
    ? Math.round((progress.correctCount / progress.totalAttempted) * 100)
    : 0;

  // Format time display
  const formatTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  // Get color classes based on question type
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string }> = {
      'accent-blue': { bg: 'bg-accent-blue/10', border: 'border-accent-blue/30', text: 'text-accent-blue' },
      'accent-purple': { bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', text: 'text-accent-purple' },
      'accent-cyan': { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', text: 'text-accent-cyan' },
      'accent-green': { bg: 'bg-accent-green/10', border: 'border-accent-green/30', text: 'text-accent-green' },
      'accent-orange': { bg: 'bg-accent-orange/10', border: 'border-accent-orange/30', text: 'text-accent-orange' },
      'accent-yellow': { bg: 'bg-accent-yellow/10', border: 'border-accent-yellow/30', text: 'text-accent-yellow' },
    };
    return colorMap[color] || colorMap['accent-blue'];
  };

  const colors = getColorClasses(info.color);

  return (
    <div className={`${colors.bg} ${colors.border} border rounded-xl p-5 transition-all hover:shadow-lg`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`font-semibold ${colors.text}`}>{info.shortLabel}</h3>
          <p className="text-xs text-text-secondary">{info.label}</p>
        </div>
        <div className={`${colors.text} text-sm font-medium px-2 py-1 rounded ${colors.bg}`}>
          {info.marks} mark{info.marks > 1 ? 's' : ''}
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-text-secondary text-sm">Practiced</span>
          <span className="text-text-primary font-medium">{practiceCount} Qs</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary text-sm">Time Spent</span>
          <span className="text-text-primary font-medium">{formatTime(timeSpent)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary text-sm">Accuracy</span>
          <span className={`font-medium ${
            accuracy >= 80 ? 'text-accent-green' :
            accuracy >= 60 ? 'text-accent-yellow' :
            accuracy > 0 ? 'text-accent-red' : 'text-text-secondary'
          }`}>
            {progress?.totalAttempted ? `${accuracy}%` : '--'}
          </span>
        </div>
      </div>

      {/* Last practiced */}
      {progress?.lastPracticed && (
        <p className="text-xs text-text-secondary mb-4">
          Last: {new Date(progress.lastPracticed).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </p>
      )}

      {/* Practice Button */}
      <button
        onClick={onPractice}
        className={`w-full py-2 px-4 rounded-lg ${colors.bg} ${colors.text} ${colors.border} border font-medium text-sm hover:opacity-80 transition-opacity`}
      >
        Log Practice
      </button>
    </div>
  );
}
