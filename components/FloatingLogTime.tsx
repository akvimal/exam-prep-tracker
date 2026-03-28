'use client';

import { useState, useEffect } from 'react';
import { useStore } from '../lib/store';
import { ActivityType, activityTypeInfo, QuestionType, questionTypeInfo, PracticeSessionInput } from '../lib/types';
import { getSubjectQuestionTypes } from '../data/question-patterns';

const activityTypes: ActivityType[] = ['study', 'practice', 'revision', 'assessment'];

type Mode = 'time' | 'practice';

export default function FloatingLogTime() {
  const { projects, logStudyTime, logPracticeSession, activeProjectId } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('time');

  // Common selections
  const [selectedProjectId, setSelectedProjectId] = useState(activeProjectId || '');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedChapterId, setSelectedChapterId] = useState('');

  // Time logging state
  const [selectedTopicId, setSelectedTopicId] = useState('');
  const [selectedActivity, setSelectedActivity] = useState<ActivityType>('study');
  const [minutes, setMinutes] = useState(30);

  // Practice logging state
  const [selectedQuestionType, setSelectedQuestionType] = useState<QuestionType>('mcq');
  const [practiceCount, setPracticeCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [practiceMinutes, setPracticeMinutes] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  const selectedSubject = selectedProject?.subjects.find(s => s.id === selectedSubjectId);
  const selectedChapter = selectedSubject?.chapters.find(c => c.id === selectedChapterId);

  // Get question types for selected subject
  const questionTypes = selectedSubjectId ? getSubjectQuestionTypes(selectedSubjectId) : [];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleOpen = () => {
    setSelectedProjectId(activeProjectId || projects[0]?.id || '');
    setSelectedSubjectId('');
    setSelectedChapterId('');
    setSelectedTopicId('');
    setSelectedActivity('study');
    setMinutes(30);
    setMode('time');
    // Reset practice state
    setSelectedQuestionType('mcq');
    setPracticeCount(0);
    setCorrectCount(0);
    setPracticeMinutes(0);
    setTimerSeconds(0);
    setIsTimerRunning(false);
    setIsOpen(true);
  };

  const handleProjectChange = (projectId: string) => {
    setSelectedProjectId(projectId);
    setSelectedSubjectId('');
    setSelectedChapterId('');
    setSelectedTopicId('');
  };

  const handleSubjectChange = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedChapterId('');
    setSelectedTopicId('');
    // Reset question type for practice mode
    const types = getSubjectQuestionTypes(subjectId);
    if (types.length > 0) {
      setSelectedQuestionType(types[0]);
    }
  };

  const handleChapterChange = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setSelectedTopicId('');
  };

  const handleSubmitTime = () => {
    if (selectedProjectId && selectedSubjectId && selectedChapterId && selectedTopicId && minutes > 0) {
      logStudyTime(selectedProjectId, selectedSubjectId, selectedChapterId, selectedTopicId, minutes, selectedActivity);
      setIsOpen(false);
    }
  };

  const handleSubmitPractice = () => {
    if (selectedProjectId && selectedSubjectId && selectedChapterId && practiceCount > 0) {
      // Calculate total time
      let totalMinutes = practiceMinutes;
      if (timerSeconds > 0) {
        totalMinutes += Math.ceil(timerSeconds / 60);
      }

      const session: PracticeSessionInput = {
        type: selectedQuestionType,
        practiceCount,
        timeSpentMinutes: totalMinutes,
        correctCount: Math.min(correctCount, practiceCount),
      };

      logPracticeSession(selectedProjectId, selectedSubjectId, selectedChapterId, session);
      setIsOpen(false);
    }
  };

  const formatTimer = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const quickTimes = [15, 30, 45, 60, 90, 120];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent-blue text-white rounded-full shadow-lg hover:bg-accent-blue/90 transition-all flex items-center justify-center text-2xl z-40"
        title="Quick Log"
      >
        <span>+</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsOpen(false)}>
          <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md border border-border max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Mode Toggle */}
            <div className="flex gap-2 mb-4 bg-bg-card rounded-lg p-1">
              <button
                onClick={() => setMode('time')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  mode === 'time'
                    ? 'bg-accent-blue text-white'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                ⏱ Log Time
              </button>
              <button
                onClick={() => setMode('practice')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  mode === 'practice'
                    ? 'bg-accent-blue text-white'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                ✏️ Log Practice
              </button>
            </div>

            <h2 className="text-lg font-semibold text-text-primary mb-4">
              {mode === 'time' ? 'Log Study Time' : 'Log Practice Session'}
            </h2>

            <div className="space-y-4">
              {/* Project Select */}
              {projects.length > 1 && (
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Project</label>
                  <select
                    value={selectedProjectId}
                    onChange={(e) => handleProjectChange(e.target.value)}
                    className="input w-full"
                  >
                    <option value="">Select project...</option>
                    {projects.map(p => (
                      <option key={p.id} value={p.id}>{p.icon} {p.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Subject Select */}
              {selectedProject && (
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Subject</label>
                  <select
                    value={selectedSubjectId}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                    className="input w-full"
                  >
                    <option value="">Select subject...</option>
                    {selectedProject.subjects.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Chapter Select */}
              {selectedSubject && (
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Chapter</label>
                  <select
                    value={selectedChapterId}
                    onChange={(e) => handleChapterChange(e.target.value)}
                    className="input w-full"
                  >
                    <option value="">Select chapter...</option>
                    {selectedSubject.chapters.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* TIME MODE */}
              {mode === 'time' && (
                <>
                  {/* Topic Select */}
                  {selectedChapter && (
                    <div>
                      <label className="block text-sm text-text-secondary mb-1">Topic</label>
                      <select
                        value={selectedTopicId}
                        onChange={(e) => setSelectedTopicId(e.target.value)}
                        className="input w-full"
                      >
                        <option value="">Select topic...</option>
                        {selectedChapter.topics.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Activity Type */}
                  {selectedTopicId && (
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Activity Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {activityTypes.map(activity => {
                          const info = activityTypeInfo[activity];
                          return (
                            <button
                              key={activity}
                              onClick={() => setSelectedActivity(activity)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedActivity === activity
                                  ? 'bg-accent-blue text-white'
                                  : 'bg-bg-card text-text-secondary hover:text-text-primary'
                              }`}
                            >
                              <span>{info.icon}</span>
                              <span>{info.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Time Input */}
                  {selectedTopicId && (
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Time Spent</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {quickTimes.map(t => (
                          <button
                            key={t}
                            onClick={() => setMinutes(t)}
                            className={`px-3 py-1 rounded text-sm ${
                              minutes === t
                                ? 'bg-accent-blue text-white'
                                : 'bg-bg-card text-text-secondary hover:text-text-primary'
                            }`}
                          >
                            {t < 60 ? `${t}m` : `${t/60}h`}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={minutes}
                          onChange={(e) => setMinutes(Math.max(1, Number(e.target.value)))}
                          className="input w-24"
                          min="1"
                          max="480"
                        />
                        <span className="text-text-secondary">minutes</span>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* PRACTICE MODE */}
              {mode === 'practice' && selectedChapter && (
                <>
                  {/* Question Type */}
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Question Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {questionTypes.map(type => {
                        const info = questionTypeInfo[type];
                        return (
                          <button
                            key={type}
                            onClick={() => setSelectedQuestionType(type)}
                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                              selectedQuestionType === type
                                ? 'bg-accent-blue text-white'
                                : 'bg-bg-card text-text-secondary hover:text-text-primary'
                            }`}
                          >
                            {info.shortLabel} ({info.marks}m)
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="bg-bg-card/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text-secondary text-sm">Timer</span>
                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          isTimerRunning
                            ? 'bg-accent-red/20 text-accent-red'
                            : 'bg-accent-green/20 text-accent-green'
                        }`}
                      >
                        {isTimerRunning ? 'Stop' : 'Start'}
                      </button>
                    </div>
                    <div className="text-2xl font-mono text-text-primary text-center">
                      {formatTimer(timerSeconds)}
                    </div>
                    {timerSeconds > 0 && !isTimerRunning && (
                      <button
                        onClick={() => setTimerSeconds(0)}
                        className="text-xs text-text-secondary hover:text-text-primary mt-2 block mx-auto"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  {/* Questions Practiced */}
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Questions Practiced</label>
                    <input
                      type="number"
                      min="0"
                      value={practiceCount || ''}
                      onChange={(e) => setPracticeCount(parseInt(e.target.value) || 0)}
                      className="input w-full"
                      placeholder="0"
                    />
                  </div>

                  {/* Correct Answers */}
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Correct Answers</label>
                    <input
                      type="number"
                      min="0"
                      max={practiceCount}
                      value={correctCount || ''}
                      onChange={(e) => setCorrectCount(parseInt(e.target.value) || 0)}
                      className="input w-full"
                      placeholder="0"
                    />
                    {practiceCount > 0 && (
                      <p className="text-xs text-text-secondary mt-1">
                        Accuracy: {Math.round((Math.min(correctCount, practiceCount) / practiceCount) * 100)}%
                      </p>
                    )}
                  </div>

                  {/* Manual Time (optional) */}
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Additional Time (optional)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        value={practiceMinutes || ''}
                        onChange={(e) => setPracticeMinutes(parseInt(e.target.value) || 0)}
                        className="input w-24"
                        placeholder="0"
                      />
                      <span className="text-text-secondary text-sm">minutes</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsOpen(false)} className="btn-secondary py-2 px-4">
                Cancel
              </button>
              {mode === 'time' ? (
                <button
                  onClick={handleSubmitTime}
                  disabled={!selectedTopicId || minutes <= 0}
                  className="btn-primary py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Log {minutes}m {activityTypeInfo[selectedActivity].label}
                </button>
              ) : (
                <button
                  onClick={handleSubmitPractice}
                  disabled={!selectedChapterId || practiceCount <= 0}
                  className="btn-primary py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Log {practiceCount} {questionTypeInfo[selectedQuestionType].shortLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
