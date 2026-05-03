import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock the AuthContext
vi.mock('../context/AuthContext', () => ({
  AuthProvider: ({ children }) => <div data-testid="auth-provider">{children}</div>,
  useAuth: () => ({ isAuthenticated: false, loading: false })
}));

describe('App Component', () => {
  it('renders without crashing and includes the AuthProvider', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Check if AuthProvider wraps the application
    expect(screen.getByTestId('auth-provider')).toBeInTheDocument();
  });
});
