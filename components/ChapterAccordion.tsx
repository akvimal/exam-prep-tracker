'use client';

import { useState } from 'react';
import { Chapter, getChapterProgress, TopicStatus, Confidence } from '../lib/types';
import ProgressBar from './ProgressBar';
import { StatusBadge, ConfidenceBadge, WeightageBadge } from './StatusBadge';

interface ChapterAccordionProps {
  chapter: Chapter;
  onTopicStatusChange?: (topicId: string, status: TopicStatus) => void;
  onTopicConfidenceChange?: (topicId: string, confidence: Confidence) => void;
  onTopicClick?: (topicId: string) => void;
}

const statusCycle: TopicStatus[] = ['not_started', 'learning', 'done'];
const confidenceCycle: Confidence[] = ['low', 'medium', 'high'];

export default function ChapterAccordion({
  chapter,
  onTopicStatusChange,
  onTopicConfidenceChange,
  onTopicClick,
}: ChapterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const progress = getChapterProgress(chapter);

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
              className={`flex items-center gap-4 px-4 py-3 ${
                index !== chapter.topics.length - 1 ? 'border-b border-border/50' : ''
              } hover:bg-bg-card/30 transition-colors`}
            >
              <div className="w-8" /> {/* Spacer for alignment */}
              <div
                className="flex-1 cursor-pointer"
                onClick={() => onTopicClick?.(topic.id)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-text-primary">{topic.name}</span>
                  <WeightageBadge weightage={topic.weightage} size="sm" />
                </div>
                {topic.lastRevised && (
                  <span className="text-xs text-text-secondary">
                    Last revised: {new Date(topic.lastRevised).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
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
          ))}
        </div>
      )}
    </div>
  );
}
