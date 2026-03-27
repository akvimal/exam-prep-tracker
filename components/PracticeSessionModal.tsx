'use client';

import { useState, useEffect } from 'react';
import { QuestionType, questionTypeInfo, PracticeSessionInput } from '../lib/types';

interface PracticeSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (session: PracticeSessionInput) => void;
  questionType: QuestionType;
  chapterName: string;
}

export default function PracticeSessionModal({
  isOpen,
  onClose,
  onSubmit,
  questionType,
  chapterName,
}: PracticeSessionModalProps) {
  const [practiceCount, setPracticeCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const info = questionTypeInfo[questionType];

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setPracticeCount(0);
      setCorrectCount(0);
      setHours(0);
      setMinutes(0);
      setTimerSeconds(0);
      setIsTimerRunning(false);
    }
  }, [isOpen]);

  // Format timer display
  const formatTimer = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    // Calculate total time in minutes
    let totalMinutes = hours * 60 + minutes;

    // If timer was used, add that time
    if (timerSeconds > 0) {
      totalMinutes += Math.ceil(timerSeconds / 60);
    }

    if (practiceCount <= 0) {
      return; // Don't submit if no questions practiced
    }

    // Ensure correctCount doesn't exceed practiceCount
    const validCorrectCount = Math.min(correctCount, practiceCount);

    onSubmit({
      type: questionType,
      practiceCount,
      timeSpentMinutes: totalMinutes,
      correctCount: validCorrectCount,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-bg-secondary border border-border rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Log Practice Session</h2>
            <p className="text-sm text-text-secondary mt-1">
              {chapterName} - {info.label}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Timer Section */}
        <div className="bg-bg-card/50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-text-secondary text-sm">Timer (optional)</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                isTimerRunning
                  ? 'bg-accent-red/20 text-accent-red border border-accent-red/30'
                  : 'bg-accent-green/20 text-accent-green border border-accent-green/30'
              }`}
            >
              {isTimerRunning ? 'Stop' : 'Start'}
            </button>
          </div>
          <div className="text-3xl font-mono text-text-primary text-center">
            {formatTimer(timerSeconds)}
          </div>
          {timerSeconds > 0 && !isTimerRunning && (
            <button
              onClick={() => setTimerSeconds(0)}
              className="text-xs text-text-secondary hover:text-text-primary mt-2 block mx-auto"
            >
              Reset timer
            </button>
          )}
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Questions Practiced */}
          <div>
            <label className="block text-sm text-text-secondary mb-2">
              Questions Practiced
            </label>
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
            <label className="block text-sm text-text-secondary mb-2">
              Correct Answers
            </label>
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

          {/* Manual Time Input */}
          <div>
            <label className="block text-sm text-text-secondary mb-2">
              Time Spent (manual)
            </label>
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="number"
                  min="0"
                  value={hours || ''}
                  onChange={(e) => setHours(parseInt(e.target.value) || 0)}
                  className="input w-full"
                  placeholder="0"
                />
                <span className="text-xs text-text-secondary mt-1 block">Hours</span>
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes || ''}
                  onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
                  className="input w-full"
                  placeholder="0"
                />
                <span className="text-xs text-text-secondary mt-1 block">Minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 btn-secondary py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={practiceCount <= 0}
            className="flex-1 btn-primary py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Log Session
          </button>
        </div>
      </div>
    </div>
  );
}
