'use client';

import { DayType } from '../lib/types';

interface DayTypeSelectorProps {
  value: DayType;
  onChange: (type: DayType) => void;
}

const dayTypes: { type: DayType; icon: string; label: string }[] = [
  { type: 'school', icon: '🏫', label: 'School' },
  { type: 'weekend', icon: '🏠', label: 'Weekend' },
  { type: 'holiday', icon: '🎉', label: 'Holiday' },
  { type: 'half_day', icon: '⏰', label: 'Half Day' },
  { type: 'exam', icon: '📝', label: 'Exam' },
  { type: 'rest', icon: '😴', label: 'Rest' },
  { type: 'event', icon: '🎊', label: 'Event' },
  { type: 'buffer', icon: '📦', label: 'Buffer' },
];

export default function DayTypeSelector({ value, onChange }: DayTypeSelectorProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {dayTypes.map(({ type, icon, label }) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition-all ${
            value === type
              ? 'border-accent-blue bg-accent-blue/20'
              : 'border-border hover:border-border/80 bg-bg-card'
          }`}
        >
          <span className="text-xl">{icon}</span>
          <span className="text-xs text-text-secondary">{label}</span>
        </button>
      ))}
    </div>
  );
}

interface DayTypeBadgeProps {
  type: DayType;
  size?: 'sm' | 'md';
}

export function DayTypeBadge({ type, size = 'sm' }: DayTypeBadgeProps) {
  const config = dayTypes.find((d) => d.type === type);
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';

  return (
    <span className={`${sizeClass} rounded day-${type} inline-flex items-center gap-1`}>
      <span>{config?.icon}</span>
      <span>{config?.label}</span>
    </span>
  );
}
