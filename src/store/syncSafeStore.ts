import { create } from 'zustand';

export interface Finding {
  id: string;
  timestamp: number;
  type: 'explicit_lyrics' | 'other';
  details: string;
}

export interface Edit {
  id: string;
  findingId: string;
  action: 'bleep' | 'duck';
}

export type SyncSafeMode = 'Analyze' | 'ReviewFindings' | 'CleanEdit' | 'ExportReport';

interface SyncSafeState {
  mode: SyncSafeMode;
  findings: Finding[];
  edits: Edit[];
  setMode: (mode: SyncSafeMode) => void;
  setFindings: (findings: Finding[]) => void;
  addEdit: (edit: Edit) => void;
  reset: () => void;
}

const useSyncSafeStore = create<SyncSafeState>((set) => ({
  mode: 'Analyze',
  findings: [],
  edits: [],
  setMode: (mode) => set({ mode }),
  setFindings: (findings) => set({ findings }),
  addEdit: (edit) => set((state) => ({ edits: [...state.edits, edit] })),
  reset: () => set({ mode: 'Analyze', findings: [], edits: [] }),
}));

export default useSyncSafeStore;
