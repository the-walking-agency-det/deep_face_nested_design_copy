import { describe, it, expect, beforeEach } from 'vitest';
import { useCueSheetStore } from './cueSheetStore';
import { act } from '@testing-library/react';

describe('cueSheetStore', () => {
  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      useCueSheetStore.setState({
        cueSheet: null,
        loading: false,
        error: null,
        step: 'SelectProject',
      });
    });
  });

  it('should have the correct initial state', () => {
    const { cueSheet, loading, error, step } = useCueSheetStore.getState();
    expect(cueSheet).toBeNull();
    expect(loading).toBe(false);
    expect(error).toBeNull();
    expect(step).toBe('SelectProject');
  });

  it('should fetch the cue sheet and update the state', async () => {
    const { fetchCueSheet } = useCueSheetStore.getState();

    await act(async () => {
      await fetchCueSheet('project-123');
    });

    const { cueSheet, loading, error, step } = useCueSheetStore.getState();
    expect(loading).toBe(false);
    expect(error).toBeNull();
    expect(step).toBe('Review');
    expect(cueSheet).not.toBeNull();
    expect(cueSheet?.cues.length).toBe(3);
  });

  it('should update a cue role', () => {
    const { updateCueRole, fetchCueSheet } = useCueSheetStore.getState();

    act(() => {
        fetchCueSheet('project-123');
        });

    const { cueSheet: initialCueSheet } = useCueSheetStore.getState();
    const cueIdToUpdate = initialCueSheet?.cues[0].id || '';

    act(() => {
        updateCueRole(cueIdToUpdate, 'New Role');
        });

    const { cueSheet: updatedCueSheet } = useCueSheetStore.getState();
    const updatedCue = updatedCueSheet?.cues.find(c => c.id === cueIdToUpdate);
    expect(updatedCue?.role).toBe('New Role');
  });
});
