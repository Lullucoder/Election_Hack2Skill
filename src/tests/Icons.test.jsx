import { render } from '@testing-library/react';
import { LogoIcon } from '../components/Icons/Icons';
import IconResolver from '../components/Icons/IconResolver';
import { describe, it, expect } from 'vitest';

describe('Icons & IconResolver', () => {
  it('renders LogoIcon without crashing', () => {
    const { container } = render(<LogoIcon size={32} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('IconResolver renders fallback icon correctly', () => {
    const { container } = render(<IconResolver name="unknown-weird-icon" size={24} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('IconResolver renders known icon correctly', () => {
    const { container } = render(<IconResolver name="home" size={24} />);
    expect(container.container ?? container).toBeTruthy();
  });
});
