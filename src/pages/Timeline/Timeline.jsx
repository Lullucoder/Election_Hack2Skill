import { useState } from 'react';
import { VOTER_JOURNEY_STEPS } from '../../data/mockData';
import './Timeline.css';

const STATUS_COLORS = {
  primary: { bg: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', border: 'rgba(99, 102, 241, 0.4)' },
  accent: { bg: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: 'rgba(245, 158, 11, 0.4)' },
  success: { bg: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: 'rgba(16, 185, 129, 0.4)' },
  info: { bg: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', border: 'rgba(59, 130, 246, 0.4)' },
};

export default function Timeline() {
  const [expandedStep, setExpandedStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});

  const toggleStep = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  const markComplete = (id, e) => {
    e.stopPropagation();
    setCompletedSteps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  return (
    <div className="timeline-page" id="timeline-page">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="container-sm">
        {/* Header */}
        <div className="timeline-header animate-fadeInUp">
          <span className="badge badge-primary">🗺️ Interactive Guide</span>
          <h1 className="heading-2">Your Voter Journey</h1>
          <p className="timeline-description">
            Follow each step from eligibility to election results. Click any step to learn more, 
            and mark steps as complete as you progress through your voter journey.
          </p>
          <div className="timeline-progress">
            <div className="timeline-progress-bar">
              <div 
                className="timeline-progress-fill" 
                style={{ width: `${(completedCount / VOTER_JOURNEY_STEPS.length) * 100}%` }}
              ></div>
            </div>
            <span className="timeline-progress-text">
              {completedCount}/{VOTER_JOURNEY_STEPS.length} steps completed
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {VOTER_JOURNEY_STEPS.map((step, index) => {
            const colors = STATUS_COLORS[step.status];
            const isExpanded = expandedStep === step.id;
            const isCompleted = completedSteps[step.id];
            
            return (
              <div 
                key={step.id} 
                className={`timeline-step ${isExpanded ? 'timeline-step-expanded' : ''} ${isCompleted ? 'timeline-step-completed' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                id={`timeline-step-${step.id}`}
              >
                {/* Dot */}
                <div 
                  className="timeline-dot" 
                  style={{ 
                    background: isCompleted ? 'var(--success)' : colors.color,
                    boxShadow: `0 0 15px ${isCompleted ? 'rgba(16, 185, 129, 0.4)' : colors.border}`
                  }}
                >
                  {isCompleted ? '✓' : step.id}
                </div>

                {/* Card */}
                <div 
                  className="timeline-card glass-card" 
                  onClick={() => toggleStep(step.id)}
                  style={{ borderColor: isExpanded ? colors.border : undefined }}
                >
                  <div className="timeline-card-header">
                    <div className="timeline-card-icon" style={{ background: colors.bg, color: colors.color }}>
                      {step.icon}
                    </div>
                    <div className="timeline-card-info">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <span className={`timeline-expand-icon ${isExpanded ? 'rotated' : ''}`}>
                      ▼
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="timeline-card-details animate-fadeIn">
                      <ul className="timeline-details-list">
                        {step.details.map((detail, i) => (
                          <li key={i}>
                            <span className="detail-bullet" style={{ background: colors.color }}></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <button 
                        className={`btn ${isCompleted ? 'btn-outline' : 'btn-primary'} btn-sm timeline-complete-btn`}
                        onClick={(e) => markComplete(step.id, e)}
                      >
                        {isCompleted ? '↩ Mark Incomplete' : '✓ Mark as Complete'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {completedCount === VOTER_JOURNEY_STEPS.length && (
          <div className="timeline-congrats glass-card animate-fadeInUp">
            <h2>🎉 Journey Complete!</h2>
            <p>You've explored every step of the voter journey! You've earned the <strong>"Journey Explorer"</strong> badge.</p>
          </div>
        )}
      </div>
    </div>
  );
}
