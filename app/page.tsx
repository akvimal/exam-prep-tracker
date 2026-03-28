'use client';

import { useStore, useActiveProject } from '../lib/store';
import { getProjectProgress, getDaysUntil } from '../lib/types';
import ProgressBar from '../components/ProgressBar';
import NotificationCard from '../components/NotificationCard';
import StudyOverview from '../components/StudyOverview';

export default function Dashboard() {
  const { projects, notifications, markNotificationRead, dayPlans } = useStore();
  const activeProject = useActiveProject();

  // Get today's date
  const today = new Date().toISOString().split('T')[0];
  const todayPlan = dayPlans.find((p) => p.date === today);

  // Calculate aggregate stats
  let totalTopics = 0;
  let doneTopics = 0;
  let learningTopics = 0;

  projects.forEach((project) => {
    project.subjects.forEach((subject) => {
      subject.chapters.forEach((chapter) => {
        chapter.topics.forEach((topic) => {
          totalTopics++;
          if (topic.status === 'done') doneTopics++;
          if (topic.status === 'learning') learningTopics++;
        });
      });
    });
  });

  const overallProgress = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;

  // Get upcoming exams
  const upcomingExams = projects
    .map((p) => ({
      ...p,
      daysLeft: getDaysUntil(p.examDate),
      progress: getProjectProgress(p),
    }))
    .filter((p) => p.daysLeft > 0)
    .sort((a, b) => a.daysLeft - b.daysLeft);

  // Unread notifications
  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary">Overview of all your exam preparations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Key Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary rounded-xl p-4 border border-border">
              <p className="text-text-secondary text-sm">Active Projects</p>
              <p className="text-3xl font-bold text-text-primary">{projects.length}</p>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4 border border-border">
              <p className="text-text-secondary text-sm">Overall Progress</p>
              <p className="text-3xl font-bold text-accent-blue">{overallProgress}%</p>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4 border border-border">
              <p className="text-text-secondary text-sm">Topics Done</p>
              <p className="text-3xl font-bold text-accent-green">{doneTopics}</p>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4 border border-border">
              <p className="text-text-secondary text-sm">In Progress</p>
              <p className="text-3xl font-bold text-accent-yellow">{learningTopics}</p>
            </div>
          </div>

          {/* Study Hours Overview */}
          {activeProject && (
            <div className="bg-bg-secondary rounded-xl p-6 border border-border">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                {activeProject.icon} {activeProject.name} - Study Hours
              </h2>
              <StudyOverview project={activeProject} />
            </div>
          )}

          {/* Today's Tasks */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Today&apos;s Tasks</h2>
            {todayPlan && todayPlan.tasks.length > 0 ? (
              <div className="space-y-3">
                {todayPlan.tasks.map((task) => {
                  const project = projects.find((p) => p.id === task.projectId);
                  return (
                    <div
                      key={task.id}
                      className={`flex items-center gap-4 p-3 rounded-lg bg-bg-card ${
                        task.completed ? 'opacity-60' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => useStore.getState().toggleTaskComplete(task.id)}
                        className="w-5 h-5 rounded border-border"
                      />
                      <div className="flex-1">
                        <p
                          className={`text-text-primary ${
                            task.completed ? 'line-through' : ''
                          }`}
                        >
                          {task.topicName}
                        </p>
                        <p className="text-xs text-text-secondary">{task.duration} mins</p>
                      </div>
                      {project && (
                        <span className="text-xs bg-bg-secondary px-2 py-1 rounded">
                          {project.icon} {project.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-text-secondary text-center py-8">
                No tasks scheduled for today. Go to Planner to add some!
              </p>
            )}
          </div>

          {/* All Projects Status */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Projects Overview</h2>
            <div className="space-y-4">
              {projects.map((project) => {
                const progress = getProjectProgress(project);
                const daysLeft = getDaysUntil(project.examDate);
                return (
                  <div key={project.id} className="bg-bg-card rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{project.icon}</span>
                        <span className="font-medium text-text-primary">{project.name}</span>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          daysLeft <= 7
                            ? 'text-accent-red'
                            : daysLeft <= 30
                            ? 'text-accent-yellow'
                            : 'text-accent-green'
                        }`}
                      >
                        {daysLeft <= 0 ? 'Completed' : `${daysLeft} days`}
                      </span>
                    </div>
                    <ProgressBar progress={progress} size="sm" showLabel />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Notifications
              {unreadNotifications.length > 0 && (
                <span className="ml-2 bg-accent-red text-white text-xs px-2 py-0.5 rounded-full">
                  {unreadNotifications.length}
                </span>
              )}
            </h2>
            <div className="space-y-3">
              {notifications.slice(0, 5).map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkRead={() => markNotificationRead(notification.id)}
                />
              ))}
              {notifications.length === 0 && (
                <p className="text-text-secondary text-center py-4">No notifications</p>
              )}
            </div>
          </div>

          {/* Upcoming Exams */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Upcoming Exams</h2>
            <div className="space-y-3">
              {upcomingExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between p-3 bg-bg-card rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <span>{exam.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{exam.name}</p>
                      <p className="text-xs text-text-secondary">
                        {new Date(exam.examDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-bold ${
                        exam.daysLeft <= 7
                          ? 'text-accent-red'
                          : exam.daysLeft <= 30
                          ? 'text-accent-yellow'
                          : 'text-text-primary'
                      }`}
                    >
                      {exam.daysLeft}d
                    </p>
                    <p className="text-xs text-text-secondary">{exam.progress}%</p>
                  </div>
                </div>
              ))}
              {upcomingExams.length === 0 && (
                <p className="text-text-secondary text-center py-4">No upcoming exams</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
