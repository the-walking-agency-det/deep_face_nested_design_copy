import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PreSavePage from './PreSavePage';
import usePreSaveStore from '../store/preSaveStore';
import featureFlags from '../utils/featureFlags';

import { vi } from 'vitest';

// Mock the backend module
vi.mock('../utils/backend', () => ({
  createPreSave: vi.fn(() => Promise.resolve({ presaveId: 'ps_123' })),
}));

describe('PreSavePage', () => {
  beforeEach(() => {
    // Reset the store and feature flags before each test
    usePreSaveStore.getState().reset();
    featureFlags.enableGating = true;
  });

  it('should render the Configure state by default', () => {
    render(<PreSavePage />);
    expect(screen.getByText('Pre-Save Gating')).toBeInTheDocument();
    expect(screen.getByText('Hook Window Selector')).toBeInTheDocument();
    expect(screen.getByText('Generate Link')).toBeInTheDocument();
  });

  it('should show a disabled message if the feature flag is off', () => {
    featureFlags.enableGating = false;
    render(<PreSavePage />);
    expect(screen.getByText('This feature is currently disabled.')).toBeInTheDocument();
  });

  it('should transition to the GenerateLink state when the "Generate Link" button is clicked', async () => {
    render(<PreSavePage />);
    fireEvent.click(screen.getByText('Generate Link'));
    await screen.findByText('Generated Link');
    expect(screen.getByText('/presave/ps_123')).toBeInTheDocument();
  });

  it('should transition to the TrackMetrics state when the "Track Metrics" button is clicked', async () => {
    // Set the initial state to GenerateLink
    usePreSaveStore.getState().setState('GenerateLink');
    render(<PreSavePage />);
    fireEvent.click(screen.getByText('Track Metrics'));
    await screen.findByText('Metrics');
    expect(screen.getByText('Tracking metrics for pre-save link...')).toBeInTheDocument();
  });
});
