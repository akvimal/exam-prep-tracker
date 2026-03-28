'use client';

import { useState } from 'react';
import { Chapter, getChapterProgress, TopicStatus, Confidence, ActivityType, activityTypeInfo } from '../lib/types';
import ProgressBar from './ProgressBar';
import { StatusBadge, ConfidenceBadge, WeightageBadge } from './StatusBadge';

const activityTypes: ActivityType[] = ['study', 'practice', 'revision', 'assessment'];

interface ChapterAccordionProps {
  chapter: Chapter;
  onTopicStatusChange?: (topicId: string, status: TopicStatus) => void;
  onTopicConfidenceChange?: (topicId: string, confidence: Confidence) => void;
  onTopicClick?: (topicId: string) => void;
  onLogTime?: (topicId: string, minutes: number, activity: ActivityType) => void;
  defaultOpen?: boolean;
}

const statusCycle: TopicStatus[] = ['not_started', 'learning', 'done'];
const confidenceCycle: Confidence[] = ['low', 'medium', 'high'];

export default function ChapterAccordion({
  chapter,
  onTopicStatusChange,
  onTopicConfidenceChange,
  onTopicClick,
  onLogTime,
  defaultOpen = false,
}: ChapterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [loggingTopicId, setLoggingTopicId] = useState<string | null>(null);
  const [logMinutes, setLogMinutes] = useState(30);
  const [logActivity, setLogActivity] = useState<ActivityType>('study');
  const progress = getChapterProgress(chapter);

  const handleLogTime = (topicId: string) => {
    if (onLogTime && logMinutes > 0) {
      onLogTime(topicId, logMinutes, logActivity);
      setLoggingTopicId(null);
      setLogMinutes(30);
      setLogActivity('study');
    }
  };

  const formatTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const cycleStatus = (topicId: string, currentStatus: TopicStatus) => {
    if (!onTopicStatusChange) return;
    const currentIndex = statusCycle.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statusCycle.length;
    onTopicStatusChange(topicId, statusCycle[nextIndex]);
  };

  const cycleConfidence = (topicId: string, currentConfidence: Confidence) => {
    if (!onTopicConfidenceChange) return;
    const currentIndex = confidenceCycle.indexOf(currentConfidence);
    const nextIndex = (currentIndex + 1) % confidenceCycle.length;
    onTopicConfidenceChange(topicId, confidenceCycle[nextIndex]);
  };

  return (
    <div className="bg-bg-secondary rounded-lg border border-border overflow-hidden">
      {/* Chapter Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-bg-card/50 transition-colors"
      >
        <span className="text-text-secondary transition-transform duration-200" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-medium text-text-primary">{chapter.name}</h3>
            <WeightageBadge weightage={chapter.weightagePercent} />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-text-secondary">
              {chapter.topics.filter((t) => t.status === 'done').length}/{chapter.topics.length} topics
            </span>
            <div className="w-24">
              <ProgressBar progress={progress} size="sm" />
            </div>
          </div>
        </div>
        <span className="text-2xl font-bold text-text-primary">{progress}%</span>
      </div>

      {/* Topics List */}
      {isOpen && (
        <div className="border-t border-border">
          {chapter.topics.map((topic, index) => (
            <div
              key={topic.id}
              className={`px-4 py-3 ${
                index !== chapter.topics.length - 1 ? 'border-b border-border/50' : ''
              } hover:bg-bg-card/30 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8" /> {/* Spacer for alignment */}
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => onTopicClick?.(topic.id)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-text-primary">{topic.name}</span>
                    <WeightageBadge weightage={topic.weightage} size="sm" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-secondary mt-1">
                    {topic.timeSpent && topic.timeSpent > 0 && (
                      <span className="text-accent-blue">⏱ {formatTime(topic.timeSpent)}</span>
                    )}
                    {topic.lastRevised && (
                      <span>Last: {new Date(topic.lastRevised).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {onLogTime && (
                    <button
                      onClick={() => setLoggingTopicId(loggingTopicId === topic.id ? null : topic.id)}
                      className="text-xs text-accent-blue hover:underline px-2"
                    >
                      +Time
                    </button>
                  )}
                  <ConfidenceBadge
                    confidence={topic.confidence}
                    onClick={() => cycleConfidence(topic.id, topic.confidence)}
                  />
                  <StatusBadge
                    status={topic.status}
                    onClick={() => cycleStatus(topic.id, topic.status)}
                  />
                </div>
              </div>
              {/* Log Time Inline Form */}
              {loggingTopicId === topic.id && onLogTime && (
                <div className="mt-2 ml-12 bg-bg-card p-3 rounded space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-secondary">Time:</span>
                    <input
                      type="number"
                      value={logMinutes}
                      onChange={(e) => setLogMinutes(Math.max(0, Number(e.target.value)))}
                      className="w-16 text-sm px-2 py-1 rounded bg-bg-secondary border border-border text-text-primary"
                      min="0"
                      max="480"
                    />
                    <span className="text-xs text-text-secondary">min</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {activityTypes.map(activity => (
                      <button
                        key={activity}
                        onClick={() => setLogActivity(activity)}
                        className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${
                          logActivity === activity
                            ? 'bg-accent-blue text-white'
                            : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        <span>{activityTypeInfo[activity].icon}</span>
                        <span>{activityTypeInfo[activity].label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLogTime(topic.id)}
                      className="text-xs bg-accent-blue text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Add {logMinutes}m {activityTypeInfo[logActivity].label}
                    </button>
                    <button
                      onClick={() => setLoggingTopicId(null)}
                      className="text-xs text-text-secondary hover:text-text-primary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
