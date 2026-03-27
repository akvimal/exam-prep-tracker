'use client';

import Link from 'next/link';
import { useActiveProject } from '../../lib/store';
import { getSubjectProgress } from '../../lib/types';
import ProgressBar from '../../components/ProgressBar';

export default function SyllabusPage() {
  const activeProject = useActiveProject();

  if (!activeProject) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Please select a project first.</p>
        </div>
      </div>
    );
  }

  // Get subject color
  const getSubjectColor = (name: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      Physics: { bg: 'bg-accent-blue/10', border: 'border-accent-blue/30', text: 'text-accent-blue' },
      Mathematics: { bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', text: 'text-accent-purple' },
      Chemistry: { bg: 'bg-accent-green/10', border: 'border-accent-green/30', text: 'text-accent-green' },
      'Computer Science': { bg: 'bg-accent-orange/10', border: 'border-accent-orange/30', text: 'text-accent-orange' },
    };
    return colors[name] || { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', text: 'text-accent-cyan' };
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{activeProject.icon}</span>
          <h1 className="text-2xl font-bold text-text-primary">Syllabus</h1>
        </div>
        <p className="text-text-secondary">{activeProject.name} - Track topics and chapters by question type</p>
      </div>

      {/* Legend */}
      <div className="bg-bg-secondary rounded-xl p-4 border border-border mb-6">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="text-text-secondary">Topic Status:</span>
          <span className="px-2 py-1 rounded status-not-started">Not Started</span>
          <span className="px-2 py-1 rounded status-learning">Learning</span>
          <span className="px-2 py-1 rounded status-done">Done</span>
        </div>
      </div>

      {/* Subject Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {activeProject.subjects.map((subject) => {
          const progress = getSubjectProgress(subject);
          const colors = getSubjectColor(subject.name);
          const totalTopics = subject.chapters.reduce((sum, ch) => sum + ch.topics.length, 0);
          const doneTopics = subject.chapters.reduce(
            (sum, ch) => sum + ch.topics.filter((t) => t.status === 'done').length,
            0
          );

          return (
            <Link
              key={subject.id}
              href={`/syllabus/${subject.id}`}
              className={`block ${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className={`text-xl font-semibold ${colors.text}`}>{subject.name}</h2>
                  <p className="text-text-secondary text-sm mt-1">
                    {subject.chapters.length} chapters - {subject.totalMarks} marks
                  </p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary text-sm">Progress</span>
                  <span className="text-text-primary font-bold">{progress}%</span>
                </div>
                <ProgressBar progress={progress} size="md" />
                <p className="text-xs text-text-secondary mt-2">
                  {doneTopics} of {totalTopics} topics completed
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
                <div className="text-center">
                  <p className={`text-lg font-bold ${colors.text}`}>{subject.chapters.length}</p>
                  <p className="text-xs text-text-secondary">Chapters</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold ${colors.text}`}>{totalTopics}</p>
                  <p className="text-xs text-text-secondary">Topics</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold ${colors.text}`}>{subject.totalMarks}</p>
                  <p className="text-xs text-text-secondary">Marks</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
