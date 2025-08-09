import { create } from 'zustand';

type LabelState = 'ArtistList' | 'PipelineView' | 'AssignTasks' | 'Reports';

interface LabelStoreState {
  currentState: LabelState;
  selectedArtistId: string | null;
  transitionTo: (newState: LabelState) => void;
  selectArtist: (artistId: string) => void;
}

export const useLabelStore = create<LabelStoreState>((set) => ({
  currentState: 'ArtistList',
  selectedArtistId: null,
  transitionTo: (newState: LabelState) => set({ currentState: newState }),
  selectArtist: (artistId: string) => set({ selectedArtistId: artistId, currentState: 'PipelineView' }),
}));
