'use client';

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const colorClasses = {
  blue: 'bg-accent-blue',
  green: 'bg-accent-green',
  yellow: 'bg-accent-yellow',
  red: 'bg-accent-red',
  purple: 'bg-accent-purple',
};

function getColorByProgress(progress: number): 'red' | 'yellow' | 'green' {
  if (progress < 30) return 'red';
  if (progress < 70) return 'yellow';
  return 'green';
}

export default function ProgressBar({
  progress,
  size = 'md',
  showLabel = false,
  color,
}: ProgressBarProps) {
  const actualColor = color || getColorByProgress(progress);
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 bg-bg-card rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${sizeClasses[size]} ${colorClasses[actualColor]} rounded-full transition-all duration-300`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-text-secondary min-w-[3rem] text-right">
          {clampedProgress}%
        </span>
      )}
    </div>
  );
}
