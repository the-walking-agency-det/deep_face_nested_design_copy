import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PersonalizedPage from './PersonalizedPage';
import usePersonalizedStore from '../store/personalizedStore';
import featureFlags from '../utils/featureFlags';
import { vi } from 'vitest';

// Mock the backend module
vi.mock('../utils/backend', () => ({
  generateCovers: vi.fn((fans) => Promise.resolve(fans.map((fan: any) => ({ ...fan, coverUrl: 'url' })))),
  renderBatch: vi.fn(() => Promise.resolve()),
  sendEmails: vi.fn(() => Promise.resolve()),
}));

describe('PersonalizedPage', () => {
  beforeEach(() => {
    // Reset the store and feature flags before each test
    usePersonalizedStore.getState().reset();
    featureFlags.enableWatermark = true;
  });

  it('should render the UploadFanList state by default', () => {
    render(<PersonalizedPage />);
    expect(screen.getByText('Personalized Thank-You Edition')).toBeInTheDocument();
    expect(screen.getByText('Upload Fan List (CSV)')).toBeInTheDocument();
    expect(screen.getByText('Generate Variants')).toBeInTheDocument();
  });

  it('should show a disabled message if the feature flag is off', () => {
    featureFlags.enableWatermark = false;
    render(<PersonalizedPage />);
    expect(screen.getByText('This feature is currently disabled.')).toBeInTheDocument();
  });

  it('should transition to the GenerateVariants state when the "Generate Variants" button is clicked', async () => {
    // Set some fans in the store
    usePersonalizedStore.getState().setFans([{ name: 'John Doe', email: 'john.doe@example.com' }]);
    render(<PersonalizedPage />);
    fireEvent.click(screen.getByText('Generate Variants'));
    await screen.findByText('Generated Variants');
    expect(screen.getByText('Render Batch')).toBeInTheDocument();
  });
});
