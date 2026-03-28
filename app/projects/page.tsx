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
        <div className="mt-4 p-3 bg-bg-card rounded-lg">
          <p className="text-text-secondary text-sm">
            <strong className="text-text-primary">Tip:</strong> Go to the Planner page to set exam dates and revision buffers.
          </p>
        </div>
      </div>
    </div>
  );
}
