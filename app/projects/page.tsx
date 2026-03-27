'use client';

import { useStore } from '../../lib/store';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  const { projects, activeProjectId, setActiveProject } = useStore();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Projects</h1>
        <p className="text-text-secondary">Manage your exam preparation projects</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={project.id === activeProjectId}
            onClick={() => setActiveProject(project.id)}
          />
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-8 bg-bg-secondary rounded-xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-text-primary mb-2">About Projects</h2>
        <p className="text-text-secondary">
          Each project represents an exam or certification you&apos;re preparing for. Click on a
          project to set it as active. The active project determines which syllabus and progress
          is shown in other pages.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-bg-card rounded-lg p-3">
            <span className="inline-block w-3 h-3 rounded-full project-board mr-2"></span>
            <span className="text-text-primary">Board Exams</span>
            <p className="text-text-secondary text-xs mt-1">
              School/University board examinations
            </p>
          </div>
          <div className="bg-bg-card rounded-lg p-3">
            <span className="inline-block w-3 h-3 rounded-full project-competitive mr-2"></span>
            <span className="text-text-primary">Competitive</span>
            <p className="text-text-secondary text-xs mt-1">
              Entrance exams like JEE, NEET
            </p>
          </div>
          <div className="bg-bg-card rounded-lg p-3">
            <span className="inline-block w-3 h-3 rounded-full project-standardized mr-2"></span>
            <span className="text-text-primary">Standardized</span>
            <p className="text-text-secondary text-xs mt-1">
              Tests like SAT, GRE, TOEFL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
