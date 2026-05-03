import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { describe, it, expect, vi } from 'vitest';
import Dashboard from '../pages/Dashboard/Dashboard';

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('Dashboard Component', () => {
  it('renders loading state when loading', () => {
    useAuth.mockReturnValue({ loading: true, user: null });
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(screen.getByText(/Loading dashboard/i)).toBeInTheDocument();
  });

  it('renders user details when authenticated', () => {
    useAuth.mockReturnValue({
      loading: false,
      user: { displayName: 'John Doe', email: 'john@example.com' },
      isAuthenticated: true
    });
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });
});