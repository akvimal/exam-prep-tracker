'use client';

import { useState } from 'react';
import { useStore, useActiveProject } from '../../lib/store';
import { DayType } from '../../lib/types';
import DayTypeSelector, { DayTypeBadge } from '../../components/DayTypeSelector';

const dayTypeHours: Record<DayType, number> = {
  school: 4,
  weekend: 8,
  holiday: 10,
  half_day: 6,
  exam: 0,
  rest: 0,
  event: 2,
  buffer: 4,
};

export default function PlannerPage() {
  const { calendarDays, setCalendarDay, dayPlans, toggleTaskComplete, projects } = useStore();
  const activeProject = useActiveProject();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showDayTypeModal, setShowDayTypeModal] = useState(false);

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const days: { date: string; isCurrentMonth: boolean }[] = [];

    // Previous month padding
    for (let i = startPadding - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      days.push({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      days.push({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: true,
      });
    }

    // Next month padding
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date: date.toISOString().split('T')[0],
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const getDayType = (date: string): DayType => {
    const saved = calendarDays.find((d) => d.date === date);
    if (saved) return saved.dayType;

    // Default: weekend on Sat/Sun, school otherwise
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6 ? 'weekend' : 'school';
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setShowDayTypeModal(true);
  };

  const handleDayTypeChange = (type: DayType) => {
    if (selectedDate) {
      setCalendarDay(selectedDate, type);
    }
    setShowDayTypeModal(false);
    setSelectedDate(null);
  };

  const today = new Date().toISOString().split('T')[0];
  const todayPlan = dayPlans.find((p) => p.date === today);
  const calendarDaysArray = generateCalendarDays();

  // Calculate month stats
  let monthStudyHours = 0;
  let examDays = 0;
  let restDays = 0;

  calendarDaysArray
    .filter((d) => d.isCurrentMonth)
    .forEach((d) => {
      const type = getDayType(d.date);
      monthStudyHours += dayTypeHours[type];
      if (type === 'exam') examDays++;
      if (type === 'rest') restDays++;
    });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📅</span>
          <h1 className="text-2xl font-bold text-text-primary">Planner</h1>
        </div>
        <p className="text-text-secondary">Plan your study schedule</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-bg-secondary rounded-xl p-6 border border-border">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              className="btn-secondary text-sm"
            >
              ← Prev
            </button>
            <h2 className="text-lg font-semibold text-text-primary">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              className="btn-secondary text-sm"
            >
              Next →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-xs text-text-secondary py-2">
                {day}
              </div>
            ))}
            {calendarDaysArray.map((day) => {
              const dayType = getDayType(day.date);
              const isToday = day.date === today;
              const hasTasks = dayPlans.some((p) => p.date === day.date && p.tasks.length > 0);

              return (
                <button
                  key={day.date}
                  onClick={() => handleDateClick(day.date)}
                  className={`aspect-square p-1 rounded-lg text-sm flex flex-col items-center justify-center transition-all ${
                    day.isCurrentMonth ? '' : 'opacity-40'
                  } ${isToday ? 'ring-2 ring-accent-blue' : ''} day-${dayType}`}
                >
                  <span className={isToday ? 'font-bold' : ''}>
                    {new Date(day.date).getDate()}
                  </span>
                  {hasTasks && <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-text-secondary mb-2">Click a date to change its type</p>
            <div className="flex flex-wrap gap-2">
              {(['school', 'weekend', 'holiday', 'half_day', 'exam', 'rest', 'event', 'buffer'] as DayType[]).map(
                (type) => (
                  <DayTypeBadge key={type} type={type} />
                )
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Month Stats */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">This Month</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-text-secondary">Study Hours</span>
                <span className="font-semibold text-accent-blue">{monthStudyHours}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Exam Days</span>
                <span className="font-semibold text-accent-red">{examDays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Rest Days</span>
                <span className="font-semibold text-accent-pink">{restDays}</span>
              </div>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Today&apos;s Tasks</h3>
            {todayPlan && todayPlan.tasks.length > 0 ? (
              <div className="space-y-2">
                {todayPlan.tasks.map((task) => {
                  const project = projects.find((p) => p.id === task.projectId);
                  return (
                    <div
                      key={task.id}
                      className={`flex items-center gap-3 p-2 rounded bg-bg-card ${
                        task.completed ? 'opacity-60' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskComplete(task.id)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm truncate ${
                            task.completed ? 'line-through text-text-secondary' : 'text-text-primary'
                          }`}
                        >
                          {task.topicName}
                        </p>
                        <p className="text-xs text-text-secondary">{task.duration}m</p>
                      </div>
                      {project && <span className="text-sm">{project.icon}</span>}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-text-secondary text-sm text-center py-4">No tasks for today</p>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Day Hours</h3>
            <div className="space-y-2 text-sm">
              {Object.entries(dayTypeHours).map(([type, hours]) => (
                <div key={type} className="flex justify-between">
                  <DayTypeBadge type={type as DayType} />
                  <span className="text-text-secondary">{hours}h</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Day Type Modal */}
      {showDayTypeModal && selectedDate && (
        <div className="modal-overlay" onClick={() => setShowDayTypeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Set Day Type for {new Date(selectedDate).toLocaleDateString()}
            </h3>
            <DayTypeSelector value={getDayType(selectedDate)} onChange={handleDayTypeChange} />
            <button
              onClick={() => setShowDayTypeModal(false)}
              className="mt-4 w-full btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
