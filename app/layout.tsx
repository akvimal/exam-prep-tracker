'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useStore, useActiveProject, useUnreadNotifications } from '../lib/store';
import FloatingLogTime from '../components/FloatingLogTime';

const navItems = [
  { href: '/', label: 'Dashboard', icon: '📊', allProjects: true },
  { href: '/projects', label: 'Projects', icon: '📚', allProjects: true },
  { href: '/syllabus', label: 'Syllabus', icon: '📖', allProjects: false },
  { href: '/progress', label: 'Progress', icon: '📈', allProjects: false },
  { href: '/tests', label: 'Tests', icon: '📝', allProjects: false },
  { href: '/planner', label: 'Planner', icon: '📅', allProjects: false },
  { href: '/settings', label: 'Settings', icon: '⚙️', allProjects: true },
];

function Navigation() {
  const pathname = usePathname();
  const { projects, activeProjectId, setActiveProject } = useStore();
  const activeProject = useActiveProject();
  const unreadNotifications = useUnreadNotifications();

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-bg-secondary border-r border-border p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-text-primary">Exam Prep</h1>
        <p className="text-sm text-text-secondary">Track your progress</p>
      </div>

      {/* Project Selector */}
      <div className="mb-6">
        <label className="text-xs text-text-secondary uppercase tracking-wide mb-2 block">
          Active Project
        </label>
        <select
          value={activeProjectId || ''}
          onChange={(e) => setActiveProject(e.target.value)}
          className="select w-full text-sm"
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.icon} {project.name}
            </option>
          ))}
        </select>
      </div>

      {/* Navigation Links */}
      <div className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'nav-active'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.allProjects && (
                    <span className="ml-auto text-xs bg-bg-card px-2 py-0.5 rounded">All</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Active Project Info */}
      {activeProject && (
        <div className="mt-auto pt-4 border-t border-border">
          <div className="bg-bg-card rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{activeProject.icon}</span>
              <span className="font-medium text-sm">{activeProject.name}</span>
            </div>
            <p className="text-xs text-text-secondary">
              Exam: {new Date(activeProject.examDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      )}

      {/* Notifications Badge */}
      {unreadNotifications.length > 0 && (
        <div className="mt-4 bg-accent-red/20 text-accent-red rounded-lg p-3 text-sm">
          <span className="font-medium">{unreadNotifications.length}</span> unread notification
          {unreadNotifications.length > 1 ? 's' : ''}
        </div>
      )}
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Exam Prep Tracker</title>
        <meta name="description" content="Track your exam preparation progress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen">
        <Navigation />
        <main className="ml-64 p-6 min-h-screen">
          {children}
        </main>
        <FloatingLogTime />
      </body>
    </html>
  );
}
