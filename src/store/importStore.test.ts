import useImportStore from './importStore';
import { describe, it, expect, beforeEach } from 'vitest';
import { act } from '@testing-library/react';

describe('importStore', () => {
  const originalState = useImportStore.getState();
  beforeEach(() => {
    useImportStore.setState(originalState, true);
  });

  it('should have the correct initial state', () => {
    const { step, source, mappings, results, importId, statusMessage, progress, duplicates } = useImportStore.getState();
    expect(step).toBe('SourceSelect');
    expect(source).toBe(null);
    expect(mappings).toEqual({});
    expect(results).toBe(null);
    expect(importId).toBe(null);
    expect(statusMessage).toBe('');
    expect(progress).toBe(0);
    expect(duplicates).toEqual([]);
  });

  it('should update the step with setStep', () => {
    act(() => {
      useImportStore.getState().setStep('MapFields');
    });
    expect(useImportStore.getState().step).toBe('MapFields');
  });

  it('should update the source with setSource', () => {
    act(() => {
      useImportStore.getState().setSource('csv');
    });
    expect(useImportStore.getState().source).toBe('csv');
  });

  it('should update mappings with setMappings', () => {
    const newMappings = { 'col1': 'field1' };
    act(() => {
      useImportStore.getState().setMappings(newMappings);
    });
    expect(useImportStore.getState().mappings).toEqual(newMappings);
  });

  it('should reset the store with reset', () => {
    act(() => {
      useImportStore.getState().setStep('Done');
      useImportStore.getState().setSource('csv');
      useImportStore.getState().reset();
    });
    const { step, source } = useImportStore.getState();
    expect(step).toBe('SourceSelect');
    expect(source).toBe(null);
  });
});
