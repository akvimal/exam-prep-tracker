'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useActiveProject, useSubjectById } from '../../../lib/store';
import { getChapterProgress, getSubjectProgress } from '../../../lib/types';
import Breadcrumb from '../../../components/Breadcrumb';
import ProgressBar from '../../../components/ProgressBar';

export default function SubjectChaptersPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subjectId as string;

  const activeProject = useActiveProject();
  const subject = useSubjectById(subjectId);

  if (!activeProject) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Please select a project first.</p>
        </div>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Syllabus', href: '/syllabus' },
            { label: 'Subject Not Found' },
          ]}
        />
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Subject not found.</p>
          <Link href="/syllabus" className="text-accent-blue hover:underline mt-2 inline-block">
            Back to Syllabus
          </Link>
        </div>
      </div>
    );
  }

  const subjectProgress = getSubjectProgress(subject);

  // Get subject color
  const getSubjectColor = (name: string) => {
    const colors: Record<string, string> = {
      Physics: 'accent-blue',
      Mathematics: 'accent-purple',
      Chemistry: 'accent-green',
      'Computer Science': 'accent-orange',
    };
    return colors[name] || 'accent-cyan';
  };

  const subjectColor = getSubjectColor(subject.name);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Syllabus', href: '/syllabus' },
          { label: subject.name },
        ]}
      />

      {/* Subject Header */}
      <div className="bg-bg-secondary rounded-xl p-6 border border-border mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">{subject.name}</h1>
            <p className="text-text-secondary mt-1">
              {subject.chapters.length} chapters - {subject.totalMarks} marks
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-text-primary">{subjectProgress}%</div>
            <div className="w-32 mt-2">
              <ProgressBar progress={subjectProgress} size="md" />
            </div>
          </div>
        </div>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        {subject.chapters.map((chapter) => {
          const chapterProgress = getChapterProgress(chapter);
          const completedTopics = chapter.topics.filter((t) => t.status === 'done').length;

          return (
            <Link
              key={chapter.id}
              href={`/syllabus/${subjectId}/${chapter.id}`}
              className="block bg-bg-secondary rounded-xl border border-border p-5 hover:bg-bg-card/30 transition-all hover:border-border/80 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {chapter.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded bg-${subjectColor}/20 text-${subjectColor}`}>
                      {chapter.weightage} marks
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span>{completedTopics}/{chapter.topics.length} topics</span>
                    <span>-</span>
                    <span>{chapter.weightagePercent}% weightage</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Progress */}
                  <div className="text-right">
                    <div className="text-xl font-bold text-text-primary">{chapterProgress}%</div>
                    <div className="w-20 mt-1">
                      <ProgressBar progress={chapterProgress} size="sm" />
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="text-text-secondary group-hover:text-accent-blue transition-colors text-xl">
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
