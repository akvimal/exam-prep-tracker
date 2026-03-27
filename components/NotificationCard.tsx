'use client';

import { Notification } from '../lib/types';

interface NotificationCardProps {
  notification: Notification;
  onMarkRead?: () => void;
}

const typeConfig = {
  urgent: { icon: '🚨', className: 'notification-urgent' },
  warning: { icon: '⚠️', className: 'notification-warning' },
  info: { icon: 'ℹ️', className: 'notification-info' },
};

export default function NotificationCard({ notification, onMarkRead }: NotificationCardProps) {
  const config = typeConfig[notification.type];

  return (
    <div
      className={`p-4 rounded-lg ${config.className} ${
        notification.read ? 'opacity-60' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg">{config.icon}</span>
        <div className="flex-1">
          <h4 className="font-medium text-text-primary">{notification.title}</h4>
          <p className="text-sm text-text-secondary mt-1">{notification.message}</p>
          <p className="text-xs text-text-secondary mt-2">
            {new Date(notification.date).toLocaleDateString()}
          </p>
        </div>
        {!notification.read && onMarkRead && (
          <button
            onClick={onMarkRead}
            className="text-xs text-accent-blue hover:underline"
          >
            Mark read
          </button>
        )}
      </div>
    </div>
  );
}
