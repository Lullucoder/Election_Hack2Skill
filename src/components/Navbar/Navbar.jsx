import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogoIcon } from '../Icons/Icons';
import Icon from '../Icons/IconResolver';
import './Navbar.css';

export default function Navbar() {
  const { logout, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false); }, [location]);

  const navLinks = isAuthenticated
    ? [
        { to: '/dashboard', label: 'Dashboard', iconKey: 'dashboard' },
        { to: '/timeline', label: 'Voter Journey', iconKey: 'journey' },
        { to: '/assistant', label: 'AI Assistant', iconKey: 'assistant' },
        { to: '/quiz', label: 'Quiz', iconKey: 'quiz' },
      ]
    : [
        { to: '/', label: 'Home', iconKey: 'home' },
        { to: '/login', label: 'Login', iconKey: 'lock' },
      ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="main-navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to={isAuthenticated ? '/dashboard' : '/'} className="navbar-brand" id="navbar-brand" aria-label="ElectionIQ Home">
          <div className="navbar-logo">
            <LogoIcon size={28} className="logo-svg" />
            <span className="logo-text">Election<span className="logo-accent">IQ</span></span>
          </div>
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'navbar-links-open' : ''}`} role="menubar">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link ${location.pathname === link.to ? 'navbar-link-active' : ''}`}
              id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              role="menuitem"
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              <Icon name={link.iconKey} size={16} className="navbar-link-icon" />
              <span>{link.label}</span>
            </Link>
          ))}
          {isAuthenticated && (
            <button onClick={logout} className="btn btn-outline btn-sm navbar-logout" id="nav-logout" aria-label="Logout">
              <Icon name="logout" size={15} />
              <span>Logout</span>
            </button>
          )}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
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
