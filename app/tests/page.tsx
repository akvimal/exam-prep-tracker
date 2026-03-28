'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useStore, useActiveProject, useProjectTests } from '../../lib/store';
import { TestType, TestResult } from '../../lib/types';
import Breadcrumb from '../../components/Breadcrumb';
import AddTestModal from '../../components/AddTestModal';

const testTypeInfo: Record<TestType, { label: string; color: string }> = {
  school: { label: 'School Test', color: 'accent-blue' },
  self: { label: 'Self Test', color: 'accent-green' },
  pyq: { label: 'PYQ', color: 'accent-purple' },
  mock: { label: 'Mock Test', color: 'accent-orange' },
};

export default function TestsPage() {
  const activeProject = useActiveProject();
  const projectTests = useProjectTests();
  const { addTestResult, activeProjectId } = useStore();

  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'score'>('date');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter and sort tests
  const filteredTests = useMemo(() => {
    let tests = [...projectTests];

    if (filterSubject !== 'all') {
      tests = tests.filter((t) => t.subjectId === filterSubject);
    }
    if (filterType !== 'all') {
      tests = tests.filter((t) => t.type === filterType);
    }

    if (sortBy === 'date') {
      tests.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      tests.sort((a, b) => (b.score / b.maxScore) - (a.score / a.maxScore));
    }

    return tests;
  }, [projectTests, filterSubject, filterType, sortBy]);

  // Calculate stats
  const stats = useMemo(() => {
    if (projectTests.length === 0) {
      return { total: 0, avgScore: 0, highestScore: 0, recentTrend: 0 };
    }

    const avgScore = Math.round(
      projectTests.reduce((sum, t) => sum + (t.score / t.maxScore) * 100, 0) / projectTests.length
    );

    const highestScore = Math.round(
      Math.max(...projectTests.map((t) => (t.score / t.maxScore) * 100))
    );

    // Recent trend: compare last 3 tests avg to previous 3
    const sortedByDate = [...projectTests].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    let recentTrend = 0;
    if (sortedByDate.length >= 4) {
      const recent3 = sortedByDate.slice(0, 3);
      const prev3 = sortedByDate.slice(3, 6);
      const recentAvg = recent3.reduce((s, t) => s + (t.score / t.maxScore) * 100, 0) / recent3.length;
      const prevAvg = prev3.reduce((s, t) => s + (t.score / t.maxScore) * 100, 0) / prev3.length;
      recentTrend = Math.round(recentAvg - prevAvg);
    }

    return { total: projectTests.length, avgScore, highestScore, recentTrend };
  }, [projectTests]);

  const handleAddTest = (test: Omit<TestResult, 'id'>) => {
    addTestResult(test);
    setIsModalOpen(false);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-accent-green';
    if (percentage >= 60) return 'text-accent-yellow';
    return 'text-accent-red';
  };

  const getSubjectName = (subjectId: string) => {
    return activeProject?.subjects.find((s) => s.id === subjectId)?.name || subjectId;
  };

  if (!activeProject) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Please select a project first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumb items={[{ label: 'Tests' }]} />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Tests & Assessments</h1>
          <p className="text-text-secondary mt-1">Track your mock tests and analyze your performance</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary px-4 py-2 flex items-center gap-2"
        >
          <span>+</span>
          <span>Add Test</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-bg-secondary rounded-xl p-4 border border-border">
          <p className="text-sm text-text-secondary">Total Tests</p>
          <p className="text-2xl font-bold text-text-primary mt-1">{stats.total}</p>
        </div>
        <div className="bg-bg-secondary rounded-xl p-4 border border-border">
          <p className="text-sm text-text-secondary">Average Score</p>
          <p className={`text-2xl font-bold mt-1 ${getScoreColor(stats.avgScore)}`}>
            {stats.avgScore}%
          </p>
        </div>
        <div className="bg-bg-secondary rounded-xl p-4 border border-border">
          <p className="text-sm text-text-secondary">Highest Score</p>
          <p className="text-2xl font-bold text-accent-green mt-1">{stats.highestScore}%</p>
        </div>
        <div className="bg-bg-secondary rounded-xl p-4 border border-border">
          <p className="text-sm text-text-secondary">Recent Trend</p>
          <p className={`text-2xl font-bold mt-1 ${stats.recentTrend >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>
            {stats.recentTrend >= 0 ? '+' : ''}{stats.recentTrend}%
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-bg-secondary rounded-xl p-4 border border-border mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="text-sm text-text-secondary block mb-1">Subject</label>
            <select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
              className="input py-2 px-3"
            >
              <option value="all">All Subjects</option>
              {activeProject.subjects.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-text-secondary block mb-1">Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="input py-2 px-3"
            >
              <option value="all">All Types</option>
              {Object.entries(testTypeInfo).map(([key, { label }]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-text-secondary block mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'score')}
              className="input py-2 px-3"
            >
              <option value="date">Date (Recent First)</option>
              <option value="score">Score (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tests List */}
      {filteredTests.length > 0 ? (
        <div className="space-y-3">
          {filteredTests.map((test) => {
            const percentage = Math.round((test.score / test.maxScore) * 100);
            const typeInfo = testTypeInfo[test.type];
            const hasCorrections = test.notes || test.weakTopics?.length || test.errorBreakdown || test.actionItems?.length;

            return (
              <Link
                key={test.id}
                href={`/tests/${test.id}`}
                className="block bg-bg-secondary rounded-xl border border-border p-4 hover:bg-bg-card/30 transition-all hover:border-border/80 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                        {test.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded bg-${typeInfo.color}/20 text-${typeInfo.color}`}>
                        {typeInfo.label}
                      </span>
                      {hasCorrections && (
                        <span className="text-xs px-2 py-0.5 rounded bg-accent-green/20 text-accent-green">
                          Reviewed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                      <span>{getSubjectName(test.subjectId)}</span>
                      <span>-</span>
                      <span>{new Date(test.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-semibold text-text-primary">
                        {test.score}/{test.maxScore}
                      </p>
                      <p className={`text-sm font-medium ${getScoreColor(percentage)}`}>
                        {percentage}%
                      </p>
                    </div>
                    <span className="text-text-secondary group-hover:text-accent-blue transition-colors text-xl">
                      →
                    </span>
                  </div>
                </div>

                {/* Error breakdown preview */}
                {test.errorBreakdown && Object.keys(test.errorBreakdown).length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border flex gap-2 flex-wrap">
                    {Object.entries(test.errorBreakdown).map(([category, count]) => (
                      count > 0 && (
                        <span key={category} className="text-xs px-2 py-1 rounded bg-bg-card text-text-secondary">
                          {category.replace('_', ' ')}: {count}
                        </span>
                      )
                    ))}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="bg-bg-secondary rounded-xl border border-border p-12 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No Tests Yet</h3>
          <p className="text-text-secondary mb-4">
            {projectTests.length === 0
              ? 'Start tracking your mock tests and assessments.'
              : 'No tests match your current filters.'}
          </p>
          {projectTests.length === 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary px-4 py-2"
            >
              Add Your First Test
            </button>
          )}
        </div>
      )}

      {/* Add Test Modal */}
      <AddTestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTest}
        subjects={activeProject.subjects}
        projectId={activeProjectId || ''}
      />
    </div>
  );
}
