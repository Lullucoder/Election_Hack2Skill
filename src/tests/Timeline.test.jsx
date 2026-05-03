import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Timeline from '../pages/Timeline/Timeline';

describe('Timeline Component', () => {
  it('renders timeline title', () => {
    render(
      <BrowserRouter>
        <Timeline />
      </BrowserRouter>
    );
    expect(screen.getByText(/Voter Journey/i)).toBeInTheDocument();
  });
});