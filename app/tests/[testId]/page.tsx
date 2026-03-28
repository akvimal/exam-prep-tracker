'use client';

import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useStore, useActiveProject, useTestById } from '../../../lib/store';
import { ErrorCategory, errorCategoryInfo, TestType, TestActionItem } from '../../../lib/types';
import Breadcrumb from '../../../components/Breadcrumb';

type TabType = 'overview' | 'corrections' | 'actions';

const testTypeInfo: Record<TestType, { label: string; color: string }> = {
  school: { label: 'School Test', color: 'accent-blue' },
  self: { label: 'Self Test', color: 'accent-green' },
  pyq: { label: 'PYQ', color: 'accent-purple' },
  mock: { label: 'Mock Test', color: 'accent-orange' },
};

const allErrorCategories: ErrorCategory[] = [
  'silly_mistake',
  'concept_gap',
  'time_pressure',
  'misread_question',
  'calculation_error',
  'incomplete_answer',
  'topic_not_covered',
];

export default function TestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.testId as string;

  const test = useTestById(testId);
  const activeProject = useActiveProject();
  const {
    updateTestResult,
    deleteTestResult,
    addTestActionItem,
    toggleTestActionItem,
    removeTestActionItem,
  } = useStore();

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [notes, setNotes] = useState(test?.notes || '');
  const [selectedWeakTopics, setSelectedWeakTopics] = useState<string[]>(test?.weakTopics || []);
  const [errorCounts, setErrorCounts] = useState<Partial<Record<ErrorCategory, number>>>(
    test?.errorBreakdown || {}
  );
  const [newActionText, setNewActionText] = useState('');
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  // Get subject info
  const subject = useMemo(() => {
    if (!activeProject || !test) return null;
    return activeProject.subjects.find((s) => s.id === test.subjectId);
  }, [activeProject, test]);

  // Get all topics for the subject
  const allTopics = useMemo(() => {
    if (!subject) return [];
    return subject.chapters.flatMap((chapter) =>
      chapter.topics.map((topic) => ({
        ...topic,
        chapterName: chapter.name,
        chapterId: chapter.id,
      }))
    );
  }, [subject]);

  if (!test) {
    return (
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Tests', href: '/tests' }, { label: 'Not Found' }]} />
        <div className="bg-bg-secondary rounded-xl p-8 border border-border text-center">
          <p className="text-text-secondary">Test not found.</p>
          <Link href="/tests" className="text-accent-blue hover:underline mt-2 inline-block">
            Back to Tests
          </Link>
        </div>
      </div>
    );
  }

  const percentage = Math.round((test.score / test.maxScore) * 100);
  const typeInfo = testTypeInfo[test.type];

  const getScoreColor = (pct: number) => {
    if (pct >= 80) return 'text-accent-green';
    if (pct >= 60) return 'text-accent-yellow';
    return 'text-accent-red';
  };

  const handleSaveNotes = () => {
    updateTestResult(testId, { notes });
    setIsEditingNotes(false);
  };

  const handleToggleWeakTopic = (topicId: string) => {
    const newTopics = selectedWeakTopics.includes(topicId)
      ? selectedWeakTopics.filter((t) => t !== topicId)
      : [...selectedWeakTopics, topicId];
    setSelectedWeakTopics(newTopics);
    updateTestResult(testId, { weakTopics: newTopics });
  };

  const handleErrorCountChange = (category: ErrorCategory, value: number) => {
    const newCounts = { ...errorCounts, [category]: value };
    if (value === 0) delete newCounts[category];
    setErrorCounts(newCounts);
    updateTestResult(testId, { errorBreakdown: newCounts });
  };

  const handleAddActionItem = () => {
    if (!newActionText.trim()) return;
    addTestActionItem(testId, {
      description: newActionText,
      completed: false,
    });
    setNewActionText('');
  };

  const handleDeleteTest = () => {
    if (confirm('Are you sure you want to delete this test?')) {
      deleteTestResult(testId);
      router.push('/tests');
    }
  };

  const totalErrors = Object.values(errorCounts).reduce((sum, count) => sum + (count || 0), 0);
  const pendingActions = test.actionItems?.filter((a) => !a.completed).length || 0;
  const completedActions = test.actionItems?.filter((a) => a.completed).length || 0;

  const tabs: { id: TabType; label: string; badge?: number }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'corrections', label: 'Corrections', badge: totalErrors + selectedWeakTopics.length },
    { id: 'actions', label: 'Action Items', badge: pendingActions },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumb
        items={[
          { label: 'Tests', href: '/tests' },
          { label: test.name },
        ]}
      />

      {/* Header */}
      <div className="bg-bg-secondary rounded-xl p-6 border border-border mb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-text-primary">{test.name}</h1>
              <span className={`text-xs px-2 py-1 rounded bg-${typeInfo.color}/20 text-${typeInfo.color}`}>
                {typeInfo.label}
              </span>
            </div>
            <p className="text-text-secondary">
              {subject?.name} - {new Date(test.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className="text-right">
            <p className={`text-4xl font-bold ${getScoreColor(percentage)}`}>{percentage}%</p>
            <p className="text-text-secondary mt-1">{test.score}/{test.maxScore}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-bg-secondary rounded-lg p-1 border border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-accent-blue text-white'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-card/50'
            }`}
          >
            <span>{tab.label}</span>
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-accent-blue/20 text-accent-blue'
              }`}>
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Score Breakdown */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Score Analysis</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-bg-card rounded-lg">
                <p className="text-3xl font-bold text-text-primary">{test.score}</p>
                <p className="text-sm text-text-secondary">Marks Scored</p>
              </div>
              <div className="text-center p-4 bg-bg-card rounded-lg">
                <p className="text-3xl font-bold text-text-primary">{test.maxScore}</p>
                <p className="text-sm text-text-secondary">Total Marks</p>
              </div>
              <div className="text-center p-4 bg-bg-card rounded-lg">
                <p className="text-3xl font-bold text-accent-red">{test.maxScore - test.score}</p>
                <p className="text-sm text-text-secondary">Marks Lost</p>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Correction Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-bg-card rounded-lg">
                <p className="text-2xl font-bold text-accent-orange">{totalErrors}</p>
                <p className="text-sm text-text-secondary">Errors Logged</p>
              </div>
              <div className="p-4 bg-bg-card rounded-lg">
                <p className="text-2xl font-bold text-accent-red">{selectedWeakTopics.length}</p>
                <p className="text-sm text-text-secondary">Weak Topics</p>
              </div>
              <div className="p-4 bg-bg-card rounded-lg">
                <p className="text-2xl font-bold text-accent-yellow">{pendingActions}</p>
                <p className="text-sm text-text-secondary">Pending Actions</p>
              </div>
              <div className="p-4 bg-bg-card rounded-lg">
                <p className="text-2xl font-bold text-accent-green">{completedActions}</p>
                <p className="text-sm text-text-secondary">Completed Actions</p>
              </div>
            </div>
          </div>

          {/* Delete Test */}
          <div className="flex justify-end">
            <button
              onClick={handleDeleteTest}
              className="text-sm text-accent-red hover:underline"
            >
              Delete Test
            </button>
          </div>
        </div>
      )}

      {activeTab === 'corrections' && (
        <div className="space-y-6">
          {/* Notes */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Notes & Reflection</h3>
              {!isEditingNotes && (
                <button
                  onClick={() => setIsEditingNotes(true)}
                  className="text-sm text-accent-blue hover:underline"
                >
                  {notes ? 'Edit' : 'Add Notes'}
                </button>
              )}
            </div>

            {isEditingNotes ? (
              <div className="space-y-3">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What went well? What needs improvement? Key takeaways..."
                  className="input w-full h-32 resize-none"
                />
                <div className="flex gap-2">
                  <button onClick={handleSaveNotes} className="btn-primary py-2 px-4">
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setNotes(test.notes || '');
                      setIsEditingNotes(false);
                    }}
                    className="btn-secondary py-2 px-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : notes ? (
              <p className="text-text-primary whitespace-pre-wrap">{notes}</p>
            ) : (
              <p className="text-text-secondary text-center py-4">No notes added yet.</p>
            )}
          </div>

          {/* Error Breakdown */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Error Breakdown</h3>
            <div className="space-y-3">
              {allErrorCategories.map((category) => {
                const info = errorCategoryInfo[category];
                const count = errorCounts[category] || 0;

                return (
                  <div
                    key={category}
                    className="flex items-center justify-between p-3 bg-bg-card rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{info.icon}</span>
                      <span className="text-text-primary">{info.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleErrorCountChange(category, Math.max(0, count - 1))}
                        className="w-8 h-8 rounded bg-bg-secondary text-text-secondary hover:text-text-primary"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold text-text-primary">{count}</span>
                      <button
                        onClick={() => handleErrorCountChange(category, count + 1)}
                        className="w-8 h-8 rounded bg-bg-secondary text-text-secondary hover:text-text-primary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {totalErrors > 0 && (
              <p className="text-sm text-text-secondary mt-4 text-center">
                Total: {totalErrors} errors logged
              </p>
            )}
          </div>

          {/* Weak Topics */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Weak Topics</h3>
            <p className="text-sm text-text-secondary mb-4">
              Select topics that need more practice based on this test.
            </p>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {allTopics.map((topic) => (
                <label
                  key={topic.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    selectedWeakTopics.includes(topic.id)
                      ? 'bg-accent-red/20 border border-accent-red/30'
                      : 'bg-bg-card hover:bg-bg-card/80'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedWeakTopics.includes(topic.id)}
                    onChange={() => handleToggleWeakTopic(topic.id)}
                    className="w-4 h-4"
                  />
                  <div className="flex-1">
                    <p className="text-text-primary">{topic.name}</p>
                    <p className="text-xs text-text-secondary">{topic.chapterName}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'actions' && (
        <div className="space-y-6">
          {/* Add Action Item */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Add Action Item</h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={newActionText}
                onChange={(e) => setNewActionText(e.target.value)}
                placeholder="e.g., Review integration by parts"
                className="input flex-1"
                onKeyDown={(e) => e.key === 'Enter' && handleAddActionItem()}
              />
              <button
                onClick={handleAddActionItem}
                disabled={!newActionText.trim()}
                className="btn-primary px-4 py-2 disabled:opacity-50"
              >
                Add
              </button>
            </div>
          </div>

          {/* Action Items List */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Action Items</h3>

            {test.actionItems && test.actionItems.length > 0 ? (
              <div className="space-y-2">
                {test.actionItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      item.completed ? 'bg-accent-green/10' : 'bg-bg-card'
                    }`}
                  >
                    <button
                      onClick={() => toggleTestActionItem(testId, item.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        item.completed
                          ? 'bg-accent-green border-accent-green text-white'
                          : 'border-border hover:border-accent-blue'
                      }`}
                    >
                      {item.completed && '✓'}
                    </button>
                    <span
                      className={`flex-1 ${
                        item.completed ? 'text-text-secondary line-through' : 'text-text-primary'
                      }`}
                    >
                      {item.description}
                    </span>
                    <button
                      onClick={() => removeTestActionItem(testId, item.id)}
                      className="text-text-secondary hover:text-accent-red"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-text-secondary">
                <div className="text-3xl mb-2">📋</div>
                <p>No action items yet.</p>
                <p className="text-sm">Add tasks to address your weak areas.</p>
              </div>
            )}

            {test.actionItems && test.actionItems.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
                <span className="text-text-secondary">
                  {completedActions} of {test.actionItems.length} completed
                </span>
                <span className={completedActions === test.actionItems.length ? 'text-accent-green' : 'text-text-secondary'}>
                  {Math.round((completedActions / test.actionItems.length) * 100)}%
                </span>
              </div>
            )}
          </div>

          {/* Quick Actions from Weak Topics */}
          {selectedWeakTopics.length > 0 && (
            <div className="bg-bg-secondary rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Suggested Actions</h3>
              <p className="text-sm text-text-secondary mb-4">
                Based on your weak topics, consider adding these action items:
              </p>
              <div className="space-y-2">
                {selectedWeakTopics.slice(0, 5).map((topicId) => {
                  const topic = allTopics.find((t) => t.id === topicId);
                  if (!topic) return null;

                  const alreadyAdded = test.actionItems?.some((a) =>
                    a.description.toLowerCase().includes(topic.name.toLowerCase())
                  );

                  return (
                    <div
                      key={topicId}
                      className="flex items-center justify-between p-3 bg-bg-card rounded-lg"
                    >
                      <span className="text-text-primary">Review: {topic.name}</span>
                      {alreadyAdded ? (
                        <span className="text-xs text-accent-green">Added</span>
                      ) : (
                        <button
                          onClick={() => {
                            addTestActionItem(testId, {
                              description: `Review: ${topic.name}`,
                              topicId: topic.id,
                              chapterId: topic.chapterId,
                              completed: false,
                            });
                          }}
                          className="text-sm text-accent-blue hover:underline"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
