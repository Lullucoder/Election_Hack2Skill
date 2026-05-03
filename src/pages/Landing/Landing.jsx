import { Link } from 'react-router-dom';
import { FEATURE_HIGHLIGHTS, ELECTION_PHASES } from '../../data/mockData';
import { LogoIcon, AshokaChakra } from '../../components/Icons/Icons';
import Icon from '../../components/Icons/IconResolver';
import { ArrowRight, Sparkles, Rocket, Vote } from 'lucide-react';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing" id="landing-page">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-content container">
          <div className="hero-badge badge badge-primary animate-fadeInUp">
            <Sparkles size={14} /> Powered by Google Gemini AI
          </div>
          
          <h1 className="heading-1 hero-title animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
            Understand Indian Elections.<br />
            <span className="text-gradient">Empower Your Vote.</span>
          </h1>
          
          <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            ElectionIQ is your interactive AI-powered guide to understanding the Indian election process. 
            From voter registration (EPIC) to EVMs, VVPAT, and counting — learn everything you need 
            to be a confident, informed voter.
          </p>
          
          <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
            <Link to="/register" className="btn btn-primary btn-lg" id="hero-get-started">
              Get Started Free
              <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg" id="hero-login">
              Sign In
            </Link>
          </div>

          <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="hero-stat">
              <span className="hero-stat-number">28+</span>
              <span className="hero-stat-label">States & UTs</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">543</span>
              <span className="hero-stat-label">Lok Sabha Seats</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">AI Assistant</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="hero-card glass-card">
            <div className="hero-card-header">
              <div className="hero-card-dot" style={{ background: '#ef4444' }}></div>
              <div className="hero-card-dot" style={{ background: '#f59e0b' }}></div>
              <div className="hero-card-dot" style={{ background: '#10b981' }}></div>
              <span className="hero-card-title">ElectionIQ Assistant</span>
            </div>
            <div className="hero-card-body">
              <div className="hero-chat-msg hero-chat-user">
                <div className="hero-chat-bubble">How do I register to vote in India?</div>
              </div>
              <div className="hero-chat-msg hero-chat-ai">
                <div className="hero-chat-avatar">
                  <Icon name="assistant" size={18} />
                </div>
                <div className="hero-chat-bubble">
                  Great question! You can register on voters.eci.gov.in using Form 6. 
                  You'll need your Aadhaar or age proof, and address proof. After approval, 
                  you'll receive your EPIC card...
                  <span className="hero-typing">
                    <span></span><span></span><span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-accent"><Sparkles size={14} /> Features</span>
            <h2 className="heading-2">Everything You Need to Vote Confidently</h2>
            <p className="section-description">
              From AI-powered guidance to interactive learning — ElectionIQ has all the tools 
              to make you an informed, confident Indian voter.
            </p>
          </div>

          <div className="features-grid stagger-children">
            {FEATURE_HIGHLIGHTS.map((feature, index) => (
              <div key={index} className="feature-card glass-card" id={`feature-${index}`}>
                <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                  <Icon name={feature.iconKey} size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Election Phases — New Feature */}
      <section className="phases-section" id="election-phases">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary"><AshokaChakra size={14} /> Election Phases</span>
            <h2 className="heading-2">How an Indian Election Unfolds</h2>
          </div>
          <div className="phases-track">
            {ELECTION_PHASES.map((phase, i) => (
              <div key={i} className="phase-item" style={{ '--phase-color': phase.color }}>
                <div className="phase-number" style={{ background: phase.color }}>{phase.phase}</div>
                <div className="phase-info">
                  <h4>{phase.label}</h4>
                  <p>{phase.description}</p>
                </div>
                {i < ELECTION_PHASES.length - 1 && <div className="phase-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary"><Rocket size={14} /> How It Works</span>
            <h2 className="heading-2">Start Your Voter Journey in 3 Steps</h2>
          </div>

          <div className="how-steps stagger-children">
            <div className="how-step glass-card">
              <div className="how-step-number">1</div>
              <h3>Create Your Account</h3>
              <p>Sign up with email or Google. Select your state for personalized election information.</p>
            </div>
            <div className="how-step-arrow"><ArrowRight size={20} /></div>
            <div className="how-step glass-card">
              <div className="how-step-number">2</div>
              <h3>Explore & Learn</h3>
              <p>Follow the voter journey, chat with our AI assistant, and take interactive quizzes about Indian elections.</p>
            </div>
            <div className="how-step-arrow"><ArrowRight size={20} /></div>
            <div className="how-step glass-card">
              <div className="how-step-number">3</div>
              <h3>Get Vote Ready</h3>
              <p>Complete your readiness checklist, earn badges, and vote with confidence on Election Day!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <h2 className="heading-2">Ready to Become an Informed Indian Voter?</h2>
            <p className="cta-description">
              Join citizens across India who are learning about the democratic process with ElectionIQ. 
              It's free, non-partisan, and powered by Google Gemini AI.
            </p>
            <Link to="/register" className="btn btn-accent btn-lg" id="cta-signup">
              Start Learning Now <Vote size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <LogoIcon size={24} />
              <span className="logo-text">Election<span className="logo-accent">IQ</span></span>
            </div>
            <p className="footer-text">
              Non-partisan election education for India — powered by Google Cloud & Firebase.
            </p>
            <div className="footer-links">
              <span>Built for Indian democracy</span>
              <span>•</span>
              <span>&copy; 2026 ElectionIQ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
