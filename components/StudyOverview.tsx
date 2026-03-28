'use client';

import { useStore } from '../lib/store';
import { Project, DayType, getDaysUntil, ActivityType, activityTypeInfo, ActivityTimeLog } from '../lib/types';

const activityTypes: ActivityType[] = ['study', 'practice', 'revision', 'assessment'];
import ProgressBar from './ProgressBar';

interface StudyOverviewProps {
  project: Project;
}

export default function StudyOverview({ project }: StudyOverviewProps) {
  const { calendarDays, dayConfigs } = useStore();

  // Get hours for a day type
  const getDayTypeHours = (type: DayType): number => {
    const config = dayConfigs.find(c => c.type === type);
    return config?.hours ?? 0;
  };

  // Get day type for a date
  const getDayType = (date: string): DayType => {
    const saved = calendarDays.find((d) => d.date === date);
    if (saved) return saved.dayType;
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6 ? 'weekend' : 'school';
  };

  // Calculate total available hours until target/exam date
  const calculateAvailableHours = (): number => {
    const targetDate = project.targetDate || project.examDate;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(targetDate);
    end.setHours(0, 0, 0, 0);

    let totalHours = 0;
    for (let d = new Date(today); d <= end; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const dayType = getDayType(dateStr);
      totalHours += getDayTypeHours(dayType);
    }
    return totalHours;
  };

  // Calculate time spent across all topics
  const calculateTimeSpent = (): {
    total: number;
    bySubject: Record<string, number>;
    byActivity: ActivityTimeLog;
  } => {
    let total = 0;
    const bySubject: Record<string, number> = {};
    const byActivity: ActivityTimeLog = { study: 0, practice: 0, revision: 0, assessment: 0 };

    project.subjects.forEach((subject) => {
      let subjectTime = 0;
      subject.chapters.forEach((chapter) => {
        chapter.topics.forEach((topic) => {
          const time = topic.timeSpent || 0;
          subjectTime += time;
          total += time;

          // Aggregate time by activity
          if (topic.timeByActivity) {
            byActivity.study += topic.timeByActivity.study || 0;
            byActivity.practice += topic.timeByActivity.practice || 0;
            byActivity.revision += topic.timeByActivity.revision || 0;
            byActivity.assessment += topic.timeByActivity.assessment || 0;
          }
        });
      });
      bySubject[subject.id] = subjectTime;
    });

    return { total, bySubject, byActivity };
  };

  // Calculate total topics and completed topics
  const calculateTopicStats = () => {
    let total = 0;
    let completed = 0;
    let inProgress = 0;

    project.subjects.forEach((subject) => {
      subject.chapters.forEach((chapter) => {
        chapter.topics.forEach((topic) => {
          total++;
          if (topic.status === 'done') completed++;
          else if (topic.status === 'learning') inProgress++;
        });
      });
    });

    return { total, completed, inProgress, notStarted: total - completed - inProgress };
  };

  // Estimate total time needed (60 min per topic as default)
  const estimateTotalTime = (): number => {
    let total = 0;
    project.subjects.forEach((subject) => {
      subject.chapters.forEach((chapter) => {
        chapter.topics.forEach((topic) => {
          total += topic.estimatedTime || 60; // Default 60 min per topic
        });
      });
    });
    return total;
  };

  const availableHours = calculateAvailableHours();
  const { total: timeSpentMinutes, bySubject, byActivity } = calculateTimeSpent();
  const timeSpentHours = Math.round(timeSpentMinutes / 60);
  const topicStats = calculateTopicStats();
  const estimatedTotalMinutes = estimateTotalTime();
  const estimatedTotalHours = Math.round(estimatedTotalMinutes / 60);

  const daysLeft = getDaysUntil(project.targetDate || project.examDate);
  const dailyTarget = daysLeft > 0 ? Math.ceil((estimatedTotalMinutes - timeSpentMinutes) / 60 / daysLeft) : 0;

  const utilizationPercent = estimatedTotalHours > 0
    ? Math.round((timeSpentHours / estimatedTotalHours) * 100)
    : 0;

  const hoursRemaining = Math.max(0, estimatedTotalHours - timeSpentHours);

  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-bg-card rounded-lg p-4">
          <p className="text-xs text-text-secondary mb-1">Available Hours</p>
          <p className="text-2xl font-bold text-accent-blue">{availableHours}h</p>
          <p className="text-xs text-text-secondary">until {project.targetDate ? 'target' : 'exam'}</p>
        </div>
        <div className="bg-bg-card rounded-lg p-4">
          <p className="text-xs text-text-secondary mb-1">Hours Studied</p>
          <p className="text-2xl font-bold text-accent-green">{timeSpentHours}h</p>
          <p className="text-xs text-text-secondary">{utilizationPercent}% of estimate</p>
        </div>
        <div className="bg-bg-card rounded-lg p-4">
          <p className="text-xs text-text-secondary mb-1">Hours Remaining</p>
          <p className="text-2xl font-bold text-accent-yellow">{hoursRemaining}h</p>
          <p className="text-xs text-text-secondary">estimated needed</p>
        </div>
        <div className="bg-bg-card rounded-lg p-4">
          <p className="text-xs text-text-secondary mb-1">Daily Target</p>
          <p className="text-2xl font-bold text-accent-purple">{dailyTarget}h</p>
          <p className="text-xs text-text-secondary">to stay on track</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-secondary">Study Progress</span>
          <span className="text-text-primary font-medium">{timeSpentHours}h / {estimatedTotalHours}h estimated</span>
        </div>
        <ProgressBar progress={utilizationPercent} size="lg" />
      </div>

      {/* Topic Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-bg-card rounded-lg p-3 text-center">
          <p className="text-xl font-bold text-accent-green">{topicStats.completed}</p>
          <p className="text-xs text-text-secondary">Completed</p>
        </div>
        <div className="bg-bg-card rounded-lg p-3 text-center">
          <p className="text-xl font-bold text-accent-yellow">{topicStats.inProgress}</p>
          <p className="text-xs text-text-secondary">In Progress</p>
        </div>
        <div className="bg-bg-card rounded-lg p-3 text-center">
          <p className="text-xl font-bold text-text-secondary">{topicStats.notStarted}</p>
          <p className="text-xs text-text-secondary">Not Started</p>
        </div>
      </div>

      {/* Time by Activity Type */}
      <div>
        <h4 className="text-sm font-medium text-text-primary mb-3">Time by Activity</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {activityTypes.map((activity) => {
            const minutes = byActivity[activity] || 0;
            const hours = Math.round(minutes / 60 * 10) / 10;
            const percent = timeSpentMinutes > 0 ? Math.round((minutes / timeSpentMinutes) * 100) : 0;
            const info = activityTypeInfo[activity];

            return (
              <div key={activity} className="bg-bg-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span>{info.icon}</span>
                  <span className="text-xs text-text-secondary">{info.label}</span>
                </div>
                <p className="text-lg font-bold text-text-primary">{hours}h</p>
                <p className="text-xs text-text-secondary">{percent}% of total</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Per Subject Breakdown */}
      <div>
        <h4 className="text-sm font-medium text-text-primary mb-3">Time by Subject</h4>
        <div className="space-y-2">
          {project.subjects.map((subject) => {
            const subjectMinutes = bySubject[subject.id] || 0;
            const subjectHours = Math.round(subjectMinutes / 60 * 10) / 10;
            const subjectTopics = subject.chapters.reduce((sum, ch) => sum + ch.topics.length, 0);
            const subjectEstimate = subjectTopics; // 1 hour per topic estimate
            const subjectPercent = subjectEstimate > 0 ? Math.round((subjectHours / subjectEstimate) * 100) : 0;

            return (
              <div key={subject.id} className="bg-bg-card rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-text-primary">{subject.name}</span>
                  <span className="text-xs text-text-secondary">{subjectHours}h / ~{subjectEstimate}h</span>
                </div>
                <ProgressBar progress={Math.min(subjectPercent, 100)} size="sm" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Message */}
      {availableHours < hoursRemaining && (
        <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-3">
          <p className="text-sm text-accent-red">
            ⚠️ You may need {hoursRemaining - availableHours} more hours than available. Consider increasing study hours or adjusting your schedule.
          </p>
        </div>
      )}
      {availableHours >= hoursRemaining && dailyTarget <= 4 && (
        <div className="bg-accent-green/10 border border-accent-green/30 rounded-lg p-3">
          <p className="text-sm text-accent-green">
            ✓ On track! {dailyTarget}h/day is achievable with your current schedule.
          </p>
        </div>
      )}
    </div>
  );
}
