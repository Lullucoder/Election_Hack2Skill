import { Link } from 'react-router-dom';
import { FEATURE_HIGHLIGHTS } from '../../data/mockData';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing" id="landing-page">
      {/* Background Orbs */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-content container">
          <div className="hero-badge badge badge-primary animate-fadeInUp">
            <span>🗳️</span> Powered by Google Gemini AI
          </div>
          
          <h1 className="heading-1 hero-title animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
            Understand Elections.<br />
            <span className="text-gradient">Empower Your Vote.</span>
          </h1>
          
          <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            ElectionIQ is your interactive AI-powered guide to understanding the election process. 
            From voter registration to counting ballots — learn everything you need to be a confident, 
            informed voter.
          </p>
          
          <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
            <Link to="/register" className="btn btn-primary btn-lg" id="hero-get-started">
              Get Started Free
              <span>→</span>
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg" id="hero-login">
              Sign In
            </Link>
          </div>

          <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="hero-stat">
              <span className="hero-stat-number">50</span>
              <span className="hero-stat-label">States Covered</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">100+</span>
              <span className="hero-stat-label">Topics Covered</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">AI Available</span>
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
                <div className="hero-chat-bubble">How do I register to vote in California?</div>
              </div>
              <div className="hero-chat-msg hero-chat-ai">
                <div className="hero-chat-avatar">🤖</div>
                <div className="hero-chat-bubble">
                  Great question! In California, you can register online at registertovote.ca.gov. 
                  The deadline is 15 days before the election. You'll need your driver's license or 
                  state ID number... 
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
            <span className="badge badge-accent">✨ Features</span>
            <h2 className="heading-2">Everything You Need to Vote Confidently</h2>
            <p className="section-description">
              From AI-powered guidance to interactive learning — ElectionIQ has all the tools 
              to make you an informed, confident voter.
            </p>
          </div>

          <div className="features-grid stagger-children">
            {FEATURE_HIGHLIGHTS.map((feature, index) => (
              <div key={index} className="feature-card glass-card" id={`feature-${index}`}>
                <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">🚀 How It Works</span>
            <h2 className="heading-2">Start Your Voter Journey in 3 Steps</h2>
          </div>

          <div className="how-steps stagger-children">
            <div className="how-step glass-card">
              <div className="how-step-number">1</div>
              <h3>Create Your Account</h3>
              <p>Sign up with email or Google. Tell us your state for personalized information.</p>
            </div>
            <div className="how-step-arrow">→</div>
            <div className="how-step glass-card">
              <div className="how-step-number">2</div>
              <h3>Explore & Learn</h3>
              <p>Follow the voter journey, chat with our AI assistant, and take interactive quizzes.</p>
            </div>
            <div className="how-step-arrow">→</div>
            <div className="how-step glass-card">
              <div className="how-step-number">3</div>
              <h3>Get Vote Ready</h3>
              <p>Complete your readiness checklist, earn badges, and vote with confidence!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <h2 className="heading-2">Ready to Become an Informed Voter?</h2>
            <p className="cta-description">
              Join thousands of citizens who are learning about the democratic process with ElectionIQ. 
              It's free, non-partisan, and powered by AI.
            </p>
            <Link to="/register" className="btn btn-accent btn-lg" id="cta-signup">
              Start Learning Now <span>🗳️</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-icon">🗳️</span>
              <span className="logo-text">Election<span className="logo-accent">IQ</span></span>
            </div>
            <p className="footer-text">
              Non-partisan election education powered by Google Cloud & Firebase.
            </p>
            <div className="footer-links">
              <span>Built with ❤️ for democracy</span>
              <span>•</span>
              <span>© 2026 ElectionIQ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
