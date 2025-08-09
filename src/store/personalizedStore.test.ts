import usePersonalizedStore from './personalizedStore';
import { act } from '@testing-library/react';

describe('usePersonalizedStore', () => {
  beforeEach(() => {
    act(() => {
      usePersonalizedStore.getState().reset();
    });
  });

  it('should have the correct initial state', () => {
    const { getState } = usePersonalizedStore;
    expect(getState().state).toBe('UploadFanList');
    expect(getState().fans).toEqual([]);
    expect(getState().variants).toEqual([]);
  });

  it('should set the state', () => {
    act(() => {
      usePersonalizedStore.getState().setState('GenerateVariants');
    });
    expect(usePersonalizedStore.getState().state).toBe('GenerateVariants');
  });

  it('should set the fans', () => {
    const fans = [{ name: 'John Doe', email: 'john.doe@example.com' }];
    act(() => {
      usePersonalizedStore.getState().setFans(fans);
    });
    expect(usePersonalizedStore.getState().fans).toEqual(fans);
  });

  it('should set the variants', () => {
    const variants = [{ fan: { name: 'John Doe', email: 'john.doe@example.com' }, coverUrl: 'url', metadata: {} }];
    act(() => {
      usePersonalizedStore.getState().setVariants(variants);
    });
    expect(usePersonalizedStore.getState().variants).toEqual(variants);
  });

  it('should reset the store', () => {
    act(() => {
        usePersonalizedStore.getState().setState('GenerateVariants');
        usePersonalizedStore.getState().setFans([{ name: 'John Doe', email: 'john.doe@example.com' }]);
        usePersonalizedStore.getState().setVariants([{ fan: { name: 'John Doe', email: 'john.doe@example.com' }, coverUrl: 'url', metadata: {} }]);
    });

    act(() => {
      usePersonalizedStore.getState().reset();
    });

    const state = usePersonalizedStore.getState();
    expect(state.state).toBe('UploadFanList');
    expect(state.fans).toEqual([]);
    expect(state.variants).toEqual([]);
  });
});
