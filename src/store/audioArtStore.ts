import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AudioArtState = 'AnalyzeAudio' | 'GenerateVariants' | 'Tweak' | 'Export' | 'SaveSeed';

interface AudioFeatures {
  tempo: number;
  energy: number;
  valence: number;
}

interface ArtVariant {
  id: string;
  seed: any;
  params: any;
  imageUrl: string;
}

interface AudioArtStore {
  state: AudioArtState;
  features: AudioFeatures | null;
  seed: any | null;
  variants: ArtVariant[];
  setState: (state: AudioArtState) => void;
  setFeatures: (features: AudioFeatures) => void;
  setSeed: (seed: any) => void;
  addVariant: (variant: ArtVariant) => void;
  reset: () => void;
}

const initialState = {
  state: 'AnalyzeAudio' as AudioArtState,
  features: null,
  seed: null,
  variants: [],
};

const useAudioArtStore = create<AudioArtStore>()(
  persist(
    (set) => ({
      ...initialState,
      setState: (state) => set({ state }),
      setFeatures: (features) => set({ features }),
      setSeed: (seed) => set({ seed }),
      addVariant: (variant) => set((s) => ({ variants: [...s.variants, variant] })),
      reset: () => set(initialState),
    }),
    {
      name: 'indii.audioArt.v1',
    }
  )
);

export default useAudioArtStore;
