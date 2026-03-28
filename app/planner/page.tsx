'use client';

import { useState } from 'react';
import { useStore, useActiveProject } from '../../lib/store';
import { DayType, Project, getDaysUntil } from '../../lib/types';
import DayTypeSelector, { DayTypeBadge } from '../../components/DayTypeSelector';

export default function PlannerPage() {
  const {
    calendarDays,
    setCalendarDay,
    dayPlans,
    toggleTaskComplete,
    projects,
    updateProjectDates,
    dayConfigs,
    updateDayConfigHours,
    bulkSetCalendarDays,
    resetToDefaultDays,
  } = useStore();
  const activeProject = useActiveProject();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showDayTypeModal, setShowDayTypeModal] = useState(false);

  // Edit dates state
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [examDate, setExamDate] = useState('');
  const [bufferWeeks, setBufferWeeks] = useState(4);
  const [useBuffer, setUseBuffer] = useState(false);

  // Bulk assignment state
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkStartDate, setBulkStartDate] = useState('');
  const [bulkEndDate, setBulkEndDate] = useState('');
  const [bulkDayType, setBulkDayType] = useState<DayType>('holiday');

  // Edit hours state
  const [showHoursModal, setShowHoursModal] = useState(false);
  const [editingDayType, setEditingDayType] = useState<DayType | null>(null);
  const [editingHours, setEditingHours] = useState(0);

  // Get hours for a day type from dayConfigs
  const getDayTypeHours = (type: DayType): number => {
    const config = dayConfigs.find(c => c.type === type);
    return config?.hours ?? 0;
  };

  const openEditDates = (project: Project) => {
    setEditingProject(project);
    setExamDate(project.examDate);
    setBufferWeeks(project.bufferWeeks || 4);
    setUseBuffer(!!project.targetDate);
  };

  const handleSaveDates = () => {
    if (!editingProject) return;
    let finalTargetDate: string | undefined;
    if (useBuffer && bufferWeeks > 0) {
      const exam = new Date(examDate);
      exam.setDate(exam.getDate() - bufferWeeks * 7);
      finalTargetDate = exam.toISOString().split('T')[0];
    }
    updateProjectDates(editingProject.id, examDate, finalTargetDate, useBuffer ? bufferWeeks : undefined);
    setEditingProject(null);
  };

  const openEditHours = (type: DayType) => {
    setEditingDayType(type);
    setEditingHours(getDayTypeHours(type));
    setShowHoursModal(true);
  };

  const handleSaveHours = () => {
    if (editingDayType) {
      updateDayConfigHours(editingDayType, editingHours);
    }
    setShowHoursModal(false);
    setEditingDayType(null);
  };

  const handleBulkAssign = () => {
    if (bulkStartDate && bulkEndDate) {
      bulkSetCalendarDays(bulkStartDate, bulkEndDate, bulkDayType);
    }
    setShowBulkModal(false);
    setBulkStartDate('');
    setBulkEndDate('');
  };

  const handleResetMonth = () => {
    resetToDefaultDays(currentMonth.getMonth(), currentMonth.getFullYear());
  };

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const days: { date: string; isCurrentMonth: boolean }[] = [];

    for (let i = startPadding - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      days.push({ date: date.toISOString().split('T')[0], isCurrentMonth: false });
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      days.push({ date: date.toISOString().split('T')[0], isCurrentMonth: true });
    }

    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const date = new Date(year, month + 1, i);
      days.push({ date: date.toISOString().split('T')[0], isCurrentMonth: false });
    }

    return days;
  };

  const getDayType = (date: string): DayType => {
    const saved = calendarDays.find((d) => d.date === date);
    if (saved) return saved.dayType;
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
      monthStudyHours += getDayTypeHours(type);
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

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={() => setShowBulkModal(true)} className="btn-secondary text-xs py-1.5 px-3">
                Set Date Range
              </button>
              <button onClick={handleResetMonth} className="btn-secondary text-xs py-1.5 px-3">
                Reset Month to Default
              </button>
            </div>
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
          {/* Exam Dates */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Exam Dates</h3>
            <div className="space-y-3">
              {projects.map((project) => {
                const daysToExam = getDaysUntil(project.examDate);
                const daysToTarget = project.targetDate ? getDaysUntil(project.targetDate) : null;
                const daysLeft = daysToTarget !== null ? daysToTarget : daysToExam;

                return (
                  <div key={project.id} className="p-3 bg-bg-card rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary flex items-center gap-2">
                        {project.icon} {project.name}
                      </span>
                      <button
                        onClick={() => openEditDates(project)}
                        className="text-xs text-accent-blue hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-xs text-text-secondary space-y-1">
                      {project.targetDate && (
                        <div className="flex justify-between">
                          <span>Target</span>
                          <span>{new Date(project.targetDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Exam</span>
                        <span>{new Date(project.examDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className={`flex justify-between font-medium ${
                        daysLeft <= 7 ? 'text-accent-red' : daysLeft <= 30 ? 'text-accent-yellow' : 'text-accent-green'
                      }`}>
                        <span>{project.targetDate ? 'To target' : 'To exam'}</span>
                        <span>{daysLeft} days</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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

          {/* Day Hours Config */}
          <div className="bg-bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Study Hours per Day</h3>
            <div className="space-y-2 text-sm">
              {dayConfigs.map((config) => (
                <div key={config.type} className="flex justify-between items-center">
                  <DayTypeBadge type={config.type} />
                  <button
                    onClick={() => openEditHours(config.type)}
                    className="text-text-primary hover:text-accent-blue"
                  >
                    {config.hours}h
                  </button>
                </div>
              ))}
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

      {/* Edit Dates Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setEditingProject(null)}>
          <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md border border-border" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              {editingProject.icon} {editingProject.name} - Edit Dates
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Actual Exam Date</label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="input w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="useBuffer"
                  checked={useBuffer}
                  onChange={(e) => setUseBuffer(e.target.checked)}
                  className="rounded border-border"
                />
                <label htmlFor="useBuffer" className="text-sm text-text-primary">
                  Set revision buffer before exam
                </label>
              </div>

              {useBuffer && (
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Revision buffer (weeks)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={bufferWeeks}
                      onChange={(e) => setBufferWeeks(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-text-primary font-medium w-16 text-right">{bufferWeeks}w</span>
                  </div>
                  <p className="text-xs text-text-secondary mt-2">
                    Target: Finish by{' '}
                    <span className="text-text-primary">
                      {new Date(new Date(examDate).getTime() - bufferWeeks * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setEditingProject(null)} className="btn-secondary py-2 px-4">Cancel</button>
              <button onClick={handleSaveDates} className="btn-primary py-2 px-4">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Date Range Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowBulkModal(false)}>
          <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md border border-border" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-text-primary mb-4">Set Date Range</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Start Date</label>
                <input
                  type="date"
                  value={bulkStartDate}
                  onChange={(e) => setBulkStartDate(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1">End Date</label>
                <input
                  type="date"
                  value={bulkEndDate}
                  onChange={(e) => setBulkEndDate(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1">Day Type</label>
                <select
                  value={bulkDayType}
                  onChange={(e) => setBulkDayType(e.target.value as DayType)}
                  className="input w-full"
                >
                  <option value="holiday">Holiday</option>
                  <option value="school">School Day</option>
                  <option value="weekend">Weekend</option>
                  <option value="half_day">Half Day</option>
                  <option value="exam">Exam</option>
                  <option value="rest">Rest Day</option>
                  <option value="event">Event</option>
                  <option value="buffer">Buffer</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowBulkModal(false)} className="btn-secondary py-2 px-4">Cancel</button>
              <button onClick={handleBulkAssign} className="btn-primary py-2 px-4">Apply</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Hours Modal */}
      {showHoursModal && editingDayType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowHoursModal(false)}>
          <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-sm border border-border" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Edit Hours - <DayTypeBadge type={editingDayType} />
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1">Study Hours</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="12"
                    value={editingHours}
                    onChange={(e) => setEditingHours(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-text-primary font-medium w-12 text-right">{editingHours}h</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowHoursModal(false)} className="btn-secondary py-2 px-4">Cancel</button>
              <button onClick={handleSaveHours} className="btn-primary py-2 px-4">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
