import { useLabelStore } from './labelStore';
import { act, renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useLabelStore', () => {
  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      useLabelStore.setState({
        currentState: 'ArtistList',
        selectedArtistId: null,
      });
    });
  });

  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useLabelStore());
    expect(result.current.currentState).toBe('ArtistList');
    expect(result.current.selectedArtistId).toBeNull();
  });

  it('should transition to a new state', () => {
    const { result } = renderHook(() => useLabelStore());
    act(() => {
      result.current.transitionTo('PipelineView');
    });
    expect(result.current.currentState).toBe('PipelineView');
  });

  it('should select an artist and transition to PipelineView', () => {
    const { result } = renderHook(() => useLabelStore());
    act(() => {
      result.current.selectArtist('artist-123');
    });
    expect(result.current.selectedArtistId).toBe('artist-123');
    expect(result.current.currentState).toBe('PipelineView');
  });
});
