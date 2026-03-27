'use client';

import { Subject, getSubjectProgress } from '../lib/types';
import ProgressBar from './ProgressBar';

interface SubjectCardProps {
  subject: Subject;
  onClick?: () => void;
}

const subjectColors: Record<string, string> = {
  physics: 'bg-accent-blue',
  mathematics: 'bg-accent-green',
  chemistry: 'bg-accent-purple',
  'computer-science': 'bg-accent-orange',
  'computer science': 'bg-accent-orange',
  math: 'bg-accent-green',
  verbal: 'bg-accent-cyan',
};

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const progress = getSubjectProgress(subject);
  const colorClass = subjectColors[subject.name.toLowerCase()] || 'bg-accent-blue';

  let totalTopics = 0;
  let doneTopics = 0;
  let learningTopics = 0;

  subject.chapters.forEach((chapter) => {
    chapter.topics.forEach((topic) => {
      totalTopics++;
      if (topic.status === 'done') doneTopics++;
      if (topic.status === 'learning') learningTopics++;
    });
  });

  return (
    <div
      onClick={onClick}
      className="bg-bg-secondary rounded-xl border border-border hover:border-border/80 transition-all cursor-pointer overflow-hidden"
    >
      {/* Color bar */}
      <div className={`h-1 ${colorClass}`} />

      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-text-primary text-lg">{subject.name}</h3>
            <p className="text-sm text-text-secondary">
              {subject.chapters.length} chapters • {totalTopics} topics
            </p>
          </div>
          <span className="bg-bg-card px-3 py-1 rounded text-sm font-medium text-text-primary">
            {subject.totalMarks} marks
          </span>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text-secondary">Completion</span>
            <span className="text-text-primary font-medium">{progress}%</span>
          </div>
          <ProgressBar progress={progress} size="md" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-bg-card rounded-lg py-2">
            <p className="text-lg font-semibold text-accent-green">{doneTopics}</p>
            <p className="text-xs text-text-secondary">Done</p>
          </div>
          <div className="bg-bg-card rounded-lg py-2">
            <p className="text-lg font-semibold text-accent-yellow">{learningTopics}</p>
            <p className="text-xs text-text-secondary">Learning</p>
          </div>
          <div className="bg-bg-card rounded-lg py-2">
            <p className="text-lg font-semibold text-text-secondary">
              {totalTopics - doneTopics - learningTopics}
            </p>
            <p className="text-xs text-text-secondary">Not Started</p>
          </div>
        </div>
      </div>
    </div>
  );
}
