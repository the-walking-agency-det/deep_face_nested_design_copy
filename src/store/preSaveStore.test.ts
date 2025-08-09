import usePreSaveStore from './preSaveStore';
import { act } from '@testing-library/react';

describe('usePreSaveStore', () => {
  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      usePreSaveStore.getState().reset();
    });
  });

  it('should have the correct initial state', () => {
    const { getState } = usePreSaveStore;
    expect(getState().state).toBe('Configure');
    expect(getState().config.trackId).toBeNull();
    expect(getState().config.hookStart).toBe(0);
    expect(getState().config.hookEnd).toBe(30);
    expect(getState().config.releaseDate).toBeNull();
    expect(getState().metrics.preSaves).toBe(0);
    expect(getState().metrics.previewPlays).toBe(0);
    expect(getState().presaveId).toBeNull();
  });

  it('should set the state', () => {
    act(() => {
      usePreSaveStore.getState().setState('GenerateLink');
    });
    expect(usePreSaveStore.getState().state).toBe('GenerateLink');
  });

  it('should set the config', () => {
    const newConfig = { trackId: '123', hookStart: 10, hookEnd: 40 };
    act(() => {
      usePreSaveStore.getState().setConfig(newConfig);
    });
    const state = usePreSaveStore.getState();
    expect(state.config.trackId).toBe('123');
    expect(state.config.hookStart).toBe(10);
    expect(state.config.hookEnd).toBe(40);
  });

  it('should set the presaveId', () => {
    act(() => {
      usePreSaveStore.getState().setPresaveId('ps_123');
    });
    expect(usePreSaveStore.getState().presaveId).toBe('ps_123');
  });

  it('should increment pre-saves', () => {
    act(() => {
      usePreSaveStore.getState().incrementPreSaves();
    });
    expect(usePreSaveStore.getState().metrics.preSaves).toBe(1);
    act(() => {
      usePreSaveStore.getState().incrementPreSaves();
    });
    expect(usePreSaveStore.getState().metrics.preSaves).toBe(2);
  });

  it('should increment preview plays', () => {
    act(() => {
      usePreSaveStore.getState().incrementPreviewPlays();
    });
    expect(usePreSaveStore.getState().metrics.previewPlays).toBe(1);
    act(() => {
      usePreSaveStore.getState().incrementPreviewPlays();
    });
    expect(usePreSaveStore.getState().metrics.previewPlays).toBe(2);
  });

  it('should reset the store', () => {
    act(() => {
      usePreSaveStore.getState().setState('GenerateLink');
      usePreSaveStore.getState().setConfig({ trackId: '123' });
      usePreSaveStore.getState().setPresaveId('ps_123');
      usePreSaveStore.getState().incrementPreSaves();
    });

    act(() => {
      usePreSaveStore.getState().reset();
    });

    const state = usePreSaveStore.getState();
    expect(state.state).toBe('Configure');
    expect(state.config.trackId).toBeNull();
    expect(state.presaveId).toBeNull();
    expect(state.metrics.preSaves).toBe(0);
  });
});
