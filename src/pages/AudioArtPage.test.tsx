import React from 'react';
import { render, screen } from '@testing-library/react';
import AudioArtPage from './AudioArtPage';
import useAudioArtStore from '../store/audioArtStore';
import featureFlags from '../utils/featureFlags';
import { vi } from 'vitest';

// Mock the backend module
vi.mock('../utils/backend', () => ({
  analyzeFeatures: vi.fn(() => Promise.resolve({ tempo: 120, energy: 0.8, valence: 0.5 })),
  generateArt: vi.fn(() => Promise.resolve('https://picsum.photos/200/300')),
}));

describe('AudioArtPage', () => {
  beforeEach(() => {
    // Reset the store and feature flags before each test
    useAudioArtStore.getState().reset();
    featureFlags.enableGenArt = true;
  });

  it('should render the AnalyzeAudio state by default', () => {
    render(<AudioArtPage />);
    expect(screen.getByText('Audio-Driven Generative Artwork')).toBeInTheDocument();
    expect(screen.getByText('Audio Player')).toBeInTheDocument();
    expect(screen.getByText('Generative Art Canvas')).toBeInTheDocument();
  });

  it('should show a disabled message if the feature flag is off', () => {
    featureFlags.enableGenArt = false;
    render(<AudioArtPage />);
    expect(screen.getByText('This feature is currently disabled.')).toBeInTheDocument();
  });
});
