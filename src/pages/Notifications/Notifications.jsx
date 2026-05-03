import { useState } from 'react';
import { MOCK_NOTIFICATIONS } from '../../data/mockData';
import Icon from '../../components/Icons/IconResolver';
import { Bell, Trash2 } from 'lucide-react';
import './Notifications.css';

export default function Notifications() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIconForType = (type) => {
    switch(type) {
      case 'urgent': return <Icon name="warning" size={24} />;
      case 'success': return <Icon name="badge" size={24} />;
      case 'info': return <Icon name="info" size={24} />;
      case 'warning': return <Icon name="shield" size={24} />;
      default: return <Bell size={24} />;
    }
  };

  return (
    <div className="notifications-page" id="notifications-page">
      <div className="bg-orb bg-orb-1"></div>

      <div className="container-sm">
        <div className="notifications-header animate-fadeInUp">
          <h1 className="heading-2">
            <Bell size={28} className="inline-icon" /> Notifications
          </h1>
          <div className="notifications-actions">
            <span className="notifications-count">
              {unreadCount} unread
            </span>
            {unreadCount > 0 && (
              <button 
                className="btn btn-outline btn-sm"
                onClick={markAllAsRead}
                id="mark-all-read"
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>

        <div className="notifications-list">
          {notifications.length === 0 ? (
            <div className="notifications-empty glass-card animate-fadeInUp">
              <Icon name="inbox" size={48} className="empty-icon" />
              <h3>All caught up!</h3>
              <p>You don't have any notifications right now.</p>
            </div>
          ) : (
            notifications.map((notification, index) => (
              <div 
                key={notification.id} 
                className={`notification-card glass-card ${!notification.read ? 'unread' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                id={`notification-${notification.id}`}
              >
                <div className={`notification-icon-bg type-${notification.type}`}>
                  {getIconForType(notification.type)}
                </div>
                
                <div className="notification-content">
                  <div className="notification-top">
                    <h3>{notification.title}</h3>
                    <span className="notification-time">
                      {new Intl.DateTimeFormat('en-IN', {
                        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                      }).format(notification.timestamp)}
                    </span>
                  </div>
                  <p>{notification.message}</p>
                </div>

                <button 
                  className="notification-delete"
                  onClick={() => deleteNotification(notification.id)}
                  aria-label="Delete notification"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
