'use client';

import { Project, getProjectProgress, getDaysUntil } from '../lib/types';
import ProgressBar from './ProgressBar';

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
  onClick?: () => void;
}

const typeColors: Record<string, string> = {
  board: 'project-board',
  competitive: 'project-competitive',
  standardized: 'project-standardized',
};

export default function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  const progress = getProjectProgress(project);
  const daysToExam = getDaysUntil(project.examDate);
  const daysToTarget = project.targetDate ? getDaysUntil(project.targetDate) : null;

  // Use target date for countdown if set, otherwise use exam date
  const daysLeft = daysToTarget !== null ? daysToTarget : daysToExam;

  let totalTopics = 0;
  let doneTopics = 0;
  project.subjects.forEach((subject) => {
    subject.chapters.forEach((chapter) => {
      chapter.topics.forEach((topic) => {
        totalTopics++;
        if (topic.status === 'done') doneTopics++;
      });
    });
  });

  return (
    <div
      onClick={onClick}
      className={`bg-bg-secondary rounded-xl p-5 border transition-all cursor-pointer ${
        isActive ? 'border-accent-blue ring-2 ring-accent-blue/20' : 'border-border hover:border-border/80'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{project.icon}</span>
          <div>
            <h3 className="font-semibold text-text-primary">{project.name}</h3>
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs mt-1 ${
                typeColors[project.type] || 'bg-bg-card'
              } text-white`}
            >
              {project.type}
            </span>
          </div>
        </div>
        {isActive && (
          <span className="bg-accent-blue text-white text-xs px-2 py-1 rounded">Active</span>
        )}
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-text-secondary">Progress</span>
          <span className="text-text-primary font-medium">{progress}%</span>
        </div>
        <ProgressBar progress={progress} size="md" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-bg-card rounded-lg p-3">
          <p className="text-text-secondary text-xs">Subjects</p>
          <p className="text-text-primary font-semibold">{project.subjects.length}</p>
        </div>
        <div className="bg-bg-card rounded-lg p-3">
          <p className="text-text-secondary text-xs">Topics</p>
          <p className="text-text-primary font-semibold">
            {doneTopics}/{totalTopics}
          </p>
        </div>
      </div>

      {/* Dates */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <div className="text-sm text-text-secondary">
            {project.targetDate ? (
              <>
                <div>Target: {new Date(project.targetDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                <div className="text-xs opacity-70">Exam: {new Date(project.examDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
              </>
            ) : (
              <span>Exam: {new Date(project.examDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            )}
          </div>
          <div className="text-right">
            <span
              className={`text-sm font-medium ${
                daysLeft <= 7
                  ? 'text-accent-red'
                  : daysLeft <= 30
                  ? 'text-accent-yellow'
                  : 'text-accent-green'
              }`}
            >
              {daysLeft <= 0 ? (project.targetDate ? 'Target passed' : 'Exam passed') : `${daysLeft} days left`}
            </span>
            {project.targetDate && daysToExam > 0 && (
              <div className="text-xs text-text-secondary">+{daysToExam - (daysToTarget || 0)} revision</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
