import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { VOTER_CHECKLIST, BADGES, MOCK_NOTIFICATIONS } from '../../data/mockData';
import Icon from '../../components/Icons/IconResolver';
import { ArrowRight, Trophy } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const [checkedItems, setCheckedItems] = useState({});
  const unreadNotifications = MOCK_NOTIFICATIONS.filter(n => !n.read).length;

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalChecklist = VOTER_CHECKLIST.length;
  const progressPercent = Math.round((completedCount / totalChecklist) * 100);

  // Simulate earned badges
  const earnedBadges = ['early_bird'];
  if (completedCount >= totalChecklist) earnedBadges.push('checklist_complete');

  return (
    <div className="dashboard-page" id="dashboard-page">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="container">
        {/* Welcome Header */}
        <div className="dashboard-header animate-fadeInUp">
          <div className="dashboard-welcome">
            <h1 className="heading-2">
              Welcome back, <span className="text-gradient">{user?.displayName || 'Citizen'}</span>!
            </h1>
            <p className="dashboard-subtitle">
              Continue your election education journey. You're making great progress!
            </p>
          </div>
          <div className="dashboard-notifications">
            <Link to="/notifications" className="btn btn-outline btn-icon notification-btn" id="dashboard-notifications" aria-label="Notifications">
              <Icon name="notification" size={20} />
              {unreadNotifications > 0 && (
                <span className="notification-badge">{unreadNotifications}</span>
              )}
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="dashboard-stats stagger-children">
          <div className="stat-card glass-card" id="stat-progress">
            <div className="stat-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
              <Icon name="stats" size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{progressPercent}%</span>
              <span className="stat-label">Checklist Complete</span>
            </div>
            <div className="stat-progress-bar">
              <div className="stat-progress-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>

          <div className="stat-card glass-card" id="stat-badges">
            <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
              <Icon name="badge" size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{earnedBadges.length}/{BADGES.length}</span>
              <span className="stat-label">Badges Earned</span>
            </div>
          </div>

          <div className="stat-card glass-card" id="stat-state">
            <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
              <Icon name="location" size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{user?.state || 'Not Set'}</span>
              <span className="stat-label">Your State/UT</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-actions stagger-children">
          <Link to="/timeline" className="action-card glass-card" id="action-timeline">
            <div className="action-icon">
              <Icon name="journey" size={24} />
            </div>
            <div className="action-content">
              <h3>Voter Journey</h3>
              <p>Follow the Indian election process</p>
            </div>
            <ArrowRight size={20} className="action-arrow" />
          </Link>

          <Link to="/assistant" className="action-card glass-card" id="action-assistant">
            <div className="action-icon">
              <Icon name="assistant" size={24} />
            </div>
            <div className="action-content">
              <h3>AI Assistant</h3>
              <p>Ask questions about voting</p>
            </div>
            <ArrowRight size={20} className="action-arrow" />
          </Link>

          <Link to="/quiz" className="action-card glass-card" id="action-quiz">
            <div className="action-icon">
              <Icon name="quiz" size={24} />
            </div>
            <div className="action-content">
              <h3>Knowledge Quiz</h3>
              <p>Test your election knowledge</p>
            </div>
            <ArrowRight size={20} className="action-arrow" />
          </Link>

          <Link to="/notifications" className="action-card glass-card" id="action-notifications">
            <div className="action-icon">
              <Icon name="notification" size={24} />
            </div>
            <div className="action-content">
              <h3>Notifications</h3>
              <p>{unreadNotifications} unread alerts</p>
            </div>
            <ArrowRight size={20} className="action-arrow" />
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Checklist */}
          <div className="dashboard-checklist glass-card animate-fadeInUp" id="dashboard-checklist">
            <div className="section-title-row">
              <h2 className="heading-3">
                <Icon name="check" size={24} className="inline-icon" /> Are You Vote Ready?
              </h2>
              <span className="badge badge-primary">{completedCount}/{totalChecklist}</span>
            </div>

            <div className="checklist-progress-bar">
              <div className="checklist-progress-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>

            <div className="checklist-items">
              {VOTER_CHECKLIST.map(item => (
                <label key={item.id} className={`checklist-item ${checkedItems[item.id] ? 'checklist-item-checked' : ''}`} htmlFor={`check-${item.id}`}>
                  <input
                    type="checkbox"
                    id={`check-${item.id}`}
                    checked={!!checkedItems[item.id]}
                    onChange={() => toggleCheck(item.id)}
                    className="checklist-checkbox"
                  />
                  <span className="checklist-icon"><Icon name={item.iconKey} size={18} /></span>
                  <span className="checklist-label">{item.label}</span>
                </label>
              ))}
            </div>

            {completedCount === totalChecklist && (
              <div className="checklist-complete-msg animate-scaleIn">
                <Trophy size={20} className="inline-icon" style={{ color: '#fbbf24' }} /> Congratulations! You're vote ready! You've earned the <strong>"Vote Ready"</strong> badge!
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="dashboard-badges glass-card animate-fadeInUp" id="dashboard-badges">
            <h2 className="heading-3">
              <Trophy size={24} className="inline-icon" /> Your Badges
            </h2>
            <div className="badges-grid">
              {BADGES.map(badge => {
                const isEarned = earnedBadges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`badge-item ${isEarned ? 'badge-earned' : 'badge-locked'}`}
                    id={`badge-${badge.id}`}
                  >
                    <div className="badge-icon-wrapper" style={isEarned ? { borderColor: badge.color, boxShadow: `0 0 15px ${badge.color}30` } : {}}>
                      <Icon name={badge.iconKey} size={28} color={isEarned ? badge.color : undefined} className="badge-svg" />
                    </div>
                    <span className="badge-name">{badge.name}</span>
                    <span className="badge-desc">{isEarned ? badge.description : badge.requirement}</span>
                    {!isEarned && <span className="badge-lock"><Icon name="lock" size={14} /></span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
