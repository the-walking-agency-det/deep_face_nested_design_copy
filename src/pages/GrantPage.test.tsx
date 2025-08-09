import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GrantPage from './GrantPage';
import useGrantStore from '../store/grantStore';
import featureFlags from '../utils/featureFlags';
import { vi } from 'vitest';

// Mock the backend module
vi.mock('../utils/backend', () => ({
  generatePortfolioPDF: vi.fn(() => Promise.resolve('path/to/portfolio.pdf')),
  exportBundle: vi.fn(() => Promise.resolve('path/to/bundle.zip')),
  setReminder: vi.fn(() => Promise.resolve()),
}));

describe('GrantPage', () => {
  beforeEach(() => {
    // Reset the store and feature flags before each test
    useGrantStore.getState().reset();
    featureFlags.enableAutoScan = true;
  });

  it('should render the FillForm state by default', () => {
    render(<GrantPage />);
    expect(screen.getByText('Grant Submission')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Fill Form' })).toBeInTheDocument();
  });

  it('should show a disabled message if the feature flag is off', () => {
    featureFlags.enableAutoScan = false;
    render(<GrantPage />);
    expect(screen.getByText('This feature is currently disabled.')).toBeInTheDocument();
  });

  it('should transition to the Attachments state when the "Next" button is clicked', async () => {
    render(<GrantPage />);
    fireEvent.click(screen.getByText('Next'));
    await screen.findByText('Attachments');
  });
});
