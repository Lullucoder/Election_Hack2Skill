import { useState } from 'react';
import { MOCK_NOTIFICATIONS } from '../../data/mockData';
import './Notifications.css';

export default function Notifications() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const typeColors = {
    urgent: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)', accent: '#ef4444' },
    warning: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)', accent: '#f59e0b' },
    success: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', accent: '#10b981' },
    info: { bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.3)', accent: '#3b82f6' },
  };

  return (
    <div className="notifications-page" id="notifications-page">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="container-sm">
        <div className="notifications-header animate-fadeInUp">
          <div>
            <span className="badge badge-primary">🔔 Notifications</span>
            <h1 className="heading-2">Your Alerts</h1>
            <p className="notifications-subtitle">
              Stay updated with registration deadlines, election reminders, and achievements.
            </p>
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllRead} className="btn btn-outline btn-sm" id="mark-all-read">
              Mark all read
            </button>
          )}
        </div>

        {/* Unread count */}
        {unreadCount > 0 && (
          <div className="unread-banner glass-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <span>📬 You have <strong>{unreadCount}</strong> unread notification{unreadCount > 1 ? 's' : ''}</span>
          </div>
        )}

        {/* Notifications List */}
        <div className="notifications-list stagger-children">
          {notifications.length === 0 ? (
            <div className="notifications-empty glass-card">
              <span className="empty-icon">🔔</span>
              <p>No notifications yet. Check back later!</p>
            </div>
          ) : (
            notifications.map(notification => {
              const colors = typeColors[notification.type];
              return (
                <div
                  key={notification.id}
                  className={`notification-item glass-card ${!notification.read ? 'notification-unread' : ''}`}
                  style={!notification.read ? { borderLeftColor: colors.accent } : {}}
                  onClick={() => markAsRead(notification.id)}
                  id={`notification-${notification.id}`}
                >
                  <div className="notification-icon" style={{ background: colors.bg }}>
                    {notification.icon}
                  </div>
                  <div className="notification-content">
                    <div className="notification-title-row">
                      <h3>{notification.title}</h3>
                      {!notification.read && <span className="unread-dot" style={{ background: colors.accent }}></span>}
                    </div>
                    <p>{notification.message}</p>
                    <span className="notification-time">{getTimeAgo(notification.timestamp)}</span>
                  </div>
                  <button
                    className="notification-delete"
                    onClick={(e) => { e.stopPropagation(); deleteNotification(notification.id); }}
                    aria-label="Delete notification"
                  >
                    ✕
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
