import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  isrc: string;
}

export type ISRCMode = 'ModeSelect' | 'Assign' | 'Validate' | 'Export' | 'Done';
export type ISRCSource = 'generate' | 'import' | null;

interface ISRCState {
  mode: ISRCMode;
  source: ISRCSource;
  tracks: Track[];
  setMode: (mode: ISRCMode) => void;
  setSource: (source: ISRCSource) => void;
  setTracks: (tracks: Track[]) => void;
  updateTrackIsrc: (trackId: string, newIsrc: string) => void;
  reset: () => void;
}

const initialTracks: Track[] = [
  { id: '1', title: 'Track A', artist: 'Artist 1', isrc: 'US-S1Z-25-00001' },
  { id: '2', title: 'Track B', artist: 'Artist 1', isrc: 'US-S1Z-25-00002' },
  { id: '3', title: 'Track C', artist: 'Artist 2', isrc: '' },
];

const useIsrcStore = create<ISRCState>((set) => ({
  mode: 'ModeSelect',
  source: null,
  tracks: initialTracks,
  setMode: (mode) => set({ mode }),
  setSource: (source) => set({ source }),
  setTracks: (tracks) => set({ tracks }),
  updateTrackIsrc: (trackId, newIsrc) =>
    set((state) => ({
      tracks: state.tracks.map((track) =>
        track.id === trackId ? { ...track, isrc: newIsrc } : track
      ),
    })),
  reset: () => set({ mode: 'ModeSelect', source: null, tracks: initialTracks }),
}));

export default useIsrcStore;
