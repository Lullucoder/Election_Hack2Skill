import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Landing from '../pages/Landing/Landing';

describe('Landing Component', () => {
  it('renders landing hero text', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
    expect(screen.getByText(/Empowering Every Indian Voter/i)).toBeInTheDocument();
  });
});