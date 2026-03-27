'use client';

import { useStore, useActiveProject } from '../../lib/store';
import { getProjectProgress, getSubjectProgress, getDaysUntil } from '../../lib/types';
import ProgressBar from '../../components/ProgressBar';

export default function ProgressPage() {
  const { testResults } = useStore();
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

  const projectProgress = getProjectProgress(activeProject);
  const daysLeft = getDaysUntil(activeProject.examDate);

  // Calculate stats
  let totalTopics = 0;
  let doneTopics = 0;
  let learningTopics = 0;
  let lowConfidence = 0;
  let mediumConfidence = 0;
  let highConfidence = 0;

  activeProject.subjects.forEach((subject) => {
    subject.chapters.forEach((chapter) => {
      chapter.topics.forEach((topic) => {
        totalTopics++;
        if (topic.status === 'done') doneTopics++;
        if (topic.status === 'learning') learningTopics++;
        if (topic.confidence === 'low') lowConfidence++;
        if (topic.confidence === 'medium') mediumConfidence++;
        if (topic.confidence === 'high') highConfidence++;
      });
    });
  });

  // Get test results for this project
  const projectTests = testResults.filter((t) => t.projectId === activeProject.id);
  const avgScore = projectTests.length > 0
    ? Math.round(
        projectTests.reduce((sum, t) => sum + (t.score / t.maxScore) * 100, 0) / projectTests.length
      )
    : 0;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{activeProject.icon}</span>
          <h1 className="text-2xl font-bold text-text-primary">Progress</h1>
        </div>
        <p className="text-text-secondary">{activeProject.name} - Track your preparation</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-bg-secondary rounded-xl p-5 border border-border">
          <p className="text-text-secondary text-sm mb-1">Overall Progress</p>
          <p className="text-3xl font-bold text-accent-blue">{projectProgress}%</p>
          <ProgressBar progress={projectProgress} size="sm" />
        </div>
        <div className="bg-bg-secondary rounded-xl p-5 border border-border">
          <p className="text-text-secondary text-sm mb-1">Days Left</p>
          <p className={`text-3xl font-bold ${
            daysLeft <= 7 ? 'text-accent-red' : daysLeft <= 30 ? 'text-accent-yellow' : 'text-accent-green'
          }`}>
            {daysLeft}
          </p>
          <p className="text-xs text-text-secondary">
            {new Date(activeProject.examDate).toLocaleDateString()}
          </p>
        </div>
        <div className="bg-bg-secondary rounded-xl p-5 border border-border">
          <p className="text-text-secondary text-sm mb-1">Topics Completed</p>
          <p className="text-3xl font-bold text-accent-green">{doneTopics}</p>
          <p className="text-xs text-text-secondary">of {totalTopics} total</p>
        </div>
        <div className="bg-bg-secondary rounded-xl p-5 border border-border">
          <p className="text-text-secondary text-sm mb-1">Avg Test Score</p>
          <p className="text-3xl font-bold text-accent-purple">{avgScore}%</p>
          <p className="text-xs text-text-secondary">{projectTests.length} tests taken</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Progress */}
        <div className="bg-bg-secondary rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Subject Progress</h2>
          <div className="space-y-4">
            {activeProject.subjects.map((subject) => {
              const progress = getSubjectProgress(subject);
              return (
                <div key={subject.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-text-primary">{subject.name}</span>
                    <span className="text-text-secondary">{progress}%</span>
                  </div>
                  <ProgressBar progress={progress} size="md" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Confidence Distribution */}
        <div className="bg-bg-secondary rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Confidence Distribution</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-accent-green">High Confidence</span>
                <span className="text-text-secondary">{highConfidence} topics</span>
              </div>
              <ProgressBar
                progress={(highConfidence / totalTopics) * 100}
                size="md"
                color="green"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-accent-yellow">Medium Confidence</span>
                <span className="text-text-secondary">{mediumConfidence} topics</span>
              </div>
              <ProgressBar
                progress={(mediumConfidence / totalTopics) * 100}
                size="md"
                color="yellow"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-accent-red">Low Confidence</span>
                <span className="text-text-secondary">{lowConfidence} topics</span>
              </div>
              <ProgressBar
                progress={(lowConfidence / totalTopics) * 100}
                size="md"
                color="red"
              />
            </div>
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="bg-bg-secondary rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Topic Status</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center bg-bg-card rounded-lg p-4">
              <p className="text-3xl font-bold text-accent-green">{doneTopics}</p>
              <p className="text-sm text-text-secondary">Done</p>
              <p className="text-xs text-text-secondary">
                {Math.round((doneTopics / totalTopics) * 100)}%
              </p>
            </div>
            <div className="text-center bg-bg-card rounded-lg p-4">
              <p className="text-3xl font-bold text-accent-yellow">{learningTopics}</p>
              <p className="text-sm text-text-secondary">Learning</p>
              <p className="text-xs text-text-secondary">
                {Math.round((learningTopics / totalTopics) * 100)}%
              </p>
            </div>
            <div className="text-center bg-bg-card rounded-lg p-4">
              <p className="text-3xl font-bold text-text-secondary">
                {totalTopics - doneTopics - learningTopics}
              </p>
              <p className="text-sm text-text-secondary">Not Started</p>
              <p className="text-xs text-text-secondary">
                {Math.round(((totalTopics - doneTopics - learningTopics) / totalTopics) * 100)}%
              </p>
            </div>
          </div>
        </div>

        {/* Recent Tests */}
        <div className="bg-bg-secondary rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Recent Tests</h2>
          {projectTests.length > 0 ? (
            <div className="space-y-3">
              {projectTests.slice(-5).reverse().map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-3 bg-bg-card rounded-lg"
                >
                  <div>
                    <p className="text-text-primary">{test.name}</p>
                    <p className="text-xs text-text-secondary">
                      {new Date(test.date).toLocaleDateString()} • {test.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-text-primary">
                      {test.score}/{test.maxScore}
                    </p>
                    <p
                      className={`text-xs ${
                        (test.score / test.maxScore) * 100 >= 70
                          ? 'text-accent-green'
                          : (test.score / test.maxScore) * 100 >= 40
                          ? 'text-accent-yellow'
                          : 'text-accent-red'
                      }`}
                    >
                      {Math.round((test.score / test.maxScore) * 100)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-center py-8">
              No tests recorded yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
