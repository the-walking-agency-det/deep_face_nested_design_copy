import useIsrcStore from './isrcStore';
import { describe, it, expect, beforeEach } from 'vitest';
import { act } from '@testing-library/react';

describe('isrcStore', () => {
  const originalState = useIsrcStore.getState();
  beforeEach(() => {
    useIsrcStore.setState(originalState, true);
  });

  it('should have the correct initial state', () => {
    const { mode, source, tracks } = useIsrcStore.getState();
    expect(mode).toBe('ModeSelect');
    expect(source).toBe(null);
    expect(tracks).toHaveLength(3);
  });

  it('should update the mode with setMode', () => {
    act(() => {
      useIsrcStore.getState().setMode('Assign');
    });
    expect(useIsrcStore.getState().mode).toBe('Assign');
  });

  it('should update the source with setSource', () => {
    act(() => {
      useIsrcStore.getState().setSource('generate');
    });
    expect(useIsrcStore.getState().source).toBe('generate');
  });

  it('should update the tracks with setTracks', () => {
    const newTracks = [{ id: '4', title: 'Track D', artist: 'Artist 3', isrc: '' }];
    act(() => {
      useIsrcStore.getState().setTracks(newTracks);
    });
    expect(useIsrcStore.getState().tracks).toEqual(newTracks);
  });

  it('should update a track ISRC with updateTrackIsrc', () => {
    act(() => {
      useIsrcStore.getState().updateTrackIsrc('1', 'NEW-ISRC');
    });
    const updatedTrack = useIsrcStore.getState().tracks.find(t => t.id === '1');
    expect(updatedTrack?.isrc).toBe('NEW-ISRC');
  });

  it('should reset the store with reset', () => {
    act(() => {
      useIsrcStore.getState().setMode('Done');
      useIsrcStore.getState().setSource('import');
      useIsrcStore.getState().reset();
    });
    const { mode, source } = useIsrcStore.getState();
    expect(mode).toBe('ModeSelect');
    expect(source).toBe(null);
  });
});
