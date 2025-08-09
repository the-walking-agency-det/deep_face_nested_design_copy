import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PreSaveState = 'Configure' | 'GenerateLink' | 'TrackMetrics' | 'AutoSwitchPostLaunch';

interface PreSaveConfig {
  trackId: string | null;
  hookStart: number;
  hookEnd: number;
  releaseDate: Date | null;
}

interface PreSaveMetrics {
  preSaves: number;
  previewPlays: number;
}

interface PreSaveStore {
  state: PreSaveState;
  config: PreSaveConfig;
  metrics: PreSaveMetrics;
  presaveId: string | null;
  setState: (state: PreSaveState) => void;
  setConfig: (config: Partial<PreSaveConfig>) => void;
  setPresaveId: (id: string) => void;
  incrementPreSaves: () => void;
  incrementPreviewPlays: () => void;
  reset: () => void;
}

const initialState = {
  state: 'Configure' as PreSaveState,
  config: {
    trackId: null,
    hookStart: 0,
    hookEnd: 30,
    releaseDate: null,
  },
  metrics: {
    preSaves: 0,
    previewPlays: 0,
  },
  presaveId: null,
};

const usePreSaveStore = create<PreSaveStore>()(
  persist(
    (set) => ({
      ...initialState,
      setState: (state) => set({ state }),
      setConfig: (config) => set((s) => ({ config: { ...s.config, ...config } })),
      setPresaveId: (id) => set({ presaveId: id }),
      incrementPreSaves: () => set((s) => ({ metrics: { ...s.metrics, preSaves: s.metrics.preSaves + 1 } })),
      incrementPreviewPlays: () => set((s) => ({ metrics: { ...s.metrics, previewPlays: s.metrics.previewPlays + 1 } })),
      reset: () => set(initialState),
    }),
    {
      name: 'indii.presave.v1',
    }
  )
);

export default usePreSaveStore;
