'use client';

import { useState } from 'react';
import { TestType, TestResult, Subject } from '../lib/types';

interface AddTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (test: Omit<TestResult, 'id'>) => void;
  subjects: Subject[];
  projectId: string;
}

const testTypeOptions: { value: TestType; label: string }[] = [
  { value: 'mock', label: 'Mock Test' },
  { value: 'school', label: 'School Test' },
  { value: 'pyq', label: 'Previous Year Question' },
  { value: 'self', label: 'Self Assessment' },
];

export default function AddTestModal({
  isOpen,
  onClose,
  onSubmit,
  subjects,
  projectId,
}: AddTestModalProps) {
  const [name, setName] = useState('');
  const [subjectId, setSubjectId] = useState(subjects[0]?.id || '');
  const [type, setType] = useState<TestType>('mock');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [score, setScore] = useState('');
  const [maxScore, setMaxScore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !subjectId || !score || !maxScore) return;

    onSubmit({
      projectId,
      subjectId,
      type,
      name,
      date,
      score: Number(score),
      maxScore: Number(maxScore),
    });

    // Reset form
    setName('');
    setScore('');
    setMaxScore('');
    setType('mock');
    setDate(new Date().toISOString().split('T')[0]);
  };

  const handleClose = () => {
    setName('');
    setScore('');
    setMaxScore('');
    onClose();
  };

  if (!isOpen) return null;

  const scoreNum = Number(score);
  const maxScoreNum = Number(maxScore);
  const percentage = maxScoreNum > 0 ? Math.round((scoreNum / maxScoreNum) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-bg-secondary rounded-xl border border-border w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-primary">Add Test Result</h2>
            <button
              onClick={handleClose}
              className="text-text-secondary hover:text-text-primary text-xl"
            >
              x
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Test Name */}
            <div>
              <label className="block text-sm text-text-secondary mb-1">Test Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Physics Mock Test 1"
                className="input w-full"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-text-secondary mb-1">Subject *</label>
              <select
                value={subjectId}
                onChange={(e) => setSubjectId(e.target.value)}
                className="input w-full"
                required
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Test Type */}
            <div>
              <label className="block text-sm text-text-secondary mb-2">Test Type</label>
              <div className="grid grid-cols-2 gap-2">
                {testTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setType(option.value)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      type === option.value
                        ? 'bg-accent-blue text-white'
                        : 'bg-bg-card text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm text-text-secondary mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input w-full"
              />
            </div>

            {/* Score */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Score *</label>
                <input
                  type="number"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  placeholder="0"
                  min="0"
                  className="input w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1">Max Score *</label>
                <input
                  type="number"
                  value={maxScore}
                  onChange={(e) => setMaxScore(e.target.value)}
                  placeholder="100"
                  min="1"
                  className="input w-full"
                  required
                />
              </div>
            </div>

            {/* Score Preview */}
            {scoreNum > 0 && maxScoreNum > 0 && (
              <div className="bg-bg-card rounded-lg p-4 text-center">
                <p className="text-sm text-text-secondary mb-1">Score</p>
                <p className={`text-3xl font-bold ${
                  percentage >= 80 ? 'text-accent-green' :
                  percentage >= 60 ? 'text-accent-yellow' : 'text-accent-red'
                }`}>
                  {percentage}%
                </p>
                <p className="text-sm text-text-secondary mt-1">{score}/{maxScore}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="btn-secondary flex-1 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!name || !score || !maxScore}
                className="btn-primary flex-1 py-2 disabled:opacity-50"
              >
                Add Test
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
