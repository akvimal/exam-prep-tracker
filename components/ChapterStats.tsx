'use client';

import { Chapter, getChapterProgress, getChapterQuestionStats } from '../lib/types';
import ProgressBar from './ProgressBar';

interface ChapterStatsProps {
  chapter: Chapter;
}

export default function ChapterStats({ chapter }: ChapterStatsProps) {
  const progress = getChapterProgress(chapter);
  const questionStats = getChapterQuestionStats(chapter);

  // Format time display
  const formatTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const completedTopics = chapter.topics.filter((t) => t.status === 'done').length;
  const totalTopics = chapter.topics.length;

  return (
    <div className="bg-bg-secondary rounded-xl border border-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">{chapter.name}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-secondary">Weightage:</span>
          <span className="px-2 py-1 rounded bg-accent-blue/20 text-accent-blue text-sm font-medium">
            {chapter.weightage} marks ({chapter.weightagePercent}%)
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-text-secondary text-sm">Topic Progress</span>
          <span className="text-text-primary font-medium">{progress}%</span>
        </div>
        <ProgressBar progress={progress} size="md" />
        <p className="text-xs text-text-secondary mt-2">
          {completedTopics} of {totalTopics} topics completed
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-bg-card/50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-accent-blue">
            {questionStats.totalPracticed}
          </p>
          <p className="text-xs text-text-secondary mt-1">Questions Practiced</p>
        </div>

        <div className="bg-bg-card/50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-accent-purple">
            {formatTime(questionStats.totalTimeMinutes)}
          </p>
          <p className="text-xs text-text-secondary mt-1">Total Time</p>
        </div>

        <div className="bg-bg-card/50 rounded-lg p-4 text-center">
          <p className={`text-2xl font-bold ${
            questionStats.overallAccuracy >= 80 ? 'text-accent-green' :
            questionStats.overallAccuracy >= 60 ? 'text-accent-yellow' :
            questionStats.overallAccuracy > 0 ? 'text-accent-red' : 'text-text-secondary'
          }`}>
            {questionStats.totalPracticed > 0 ? `${questionStats.overallAccuracy}%` : '--'}
          </p>
          <p className="text-xs text-text-secondary mt-1">Overall Accuracy</p>
        </div>
      </div>
    </div>
  );
}
