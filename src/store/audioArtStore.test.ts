import useAudioArtStore from './audioArtStore';
import { act } from '@testing-library/react';

describe('useAudioArtStore', () => {
    beforeEach(() => {
        act(() => {
            useAudioArtStore.getState().reset();
        });
    });

    it('should have the correct initial state', () => {
        const { getState } = useAudioArtStore;
        expect(getState().state).toBe('AnalyzeAudio');
        expect(getState().features).toBeNull();
        expect(getState().seed).toBeNull();
        expect(getState().variants).toEqual([]);
    });

    it('should set the state', () => {
        act(() => {
            useAudioArtStore.getState().setState('GenerateVariants');
        });
        expect(useAudioArtStore.getState().state).toBe('GenerateVariants');
    });

    it('should set the features', () => {
        const features = { tempo: 120, energy: 0.8, valence: 0.5 };
        act(() => {
            useAudioArtStore.getState().setFeatures(features);
        });
        expect(useAudioArtStore.getState().features).toEqual(features);
    });

    it('should set the seed', () => {
        const seed = 'test-seed';
        act(() => {
            useAudioArtStore.getState().setSeed(seed);
        });
        expect(useAudioArtStore.getState().seed).toBe(seed);
    });

    it('should add a variant', () => {
        const variant = { id: '1', seed: 'test-seed', params: {}, imageUrl: 'url' };
        act(() => {
            useAudioArtStore.getState().addVariant(variant);
        });
        expect(useAudioArtStore.getState().variants).toEqual([variant]);
    });

    it('should reset the store', () => {
        act(() => {
            useAudioArtStore.getState().setState('GenerateVariants');
            useAudioArtStore.getState().setFeatures({ tempo: 120, energy: 0.8, valence: 0.5 });
            useAudioArtStore.getState().setSeed('test-seed');
            useAudioArtStore.getState().addVariant({ id: '1', seed: 'test-seed', params: {}, imageUrl: 'url' });
        });

        act(() => {
            useAudioArtStore.getState().reset();
        });

        const state = useAudioArtStore.getState();
        expect(state.state).toBe('AnalyzeAudio');
        expect(state.features).toBeNull();
        expect(state.seed).toBeNull();
        expect(state.variants).toEqual([]);
    });
});
