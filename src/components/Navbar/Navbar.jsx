import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = isAuthenticated
    ? [
        { to: '/dashboard', label: 'Dashboard', icon: '📊' },
        { to: '/timeline', label: 'Voter Journey', icon: '🗺️' },
        { to: '/assistant', label: 'AI Assistant', icon: '🤖' },
        { to: '/quiz', label: 'Quiz', icon: '🧠' },
      ]
    : [
        { to: '/', label: 'Home', icon: '🏠' },
        { to: '/login', label: 'Login', icon: '🔐' },
      ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="main-navbar">
      <div className="navbar-container">
        <Link to={isAuthenticated ? '/dashboard' : '/'} className="navbar-brand" id="navbar-brand">
          <div className="navbar-logo">
            <span className="logo-icon">🗳️</span>
            <span className="logo-text">Election<span className="logo-accent">IQ</span></span>
          </div>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${location.pathname === link.to ? 'navbar-link-active' : ''}`}
              id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              <span className="navbar-link-icon">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          {isAuthenticated && (
            <button onClick={logout} className="btn btn-outline btn-sm navbar-logout" id="nav-logout">
              Logout
            </button>
          )}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="navbar-toggle"
        >
          <span className={`hamburger ${mobileOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  );
}
