import { create } from 'zustand';
import { CueSheet, Cue, detectCues, exportCueSheet } from '../utils/backend';

type Step = 'SelectProject' | 'DetectTimings' | 'Review' | 'Export';

type CueSheetState = {
  cueSheet: CueSheet | null;
  loading: boolean;
  error: string | null;
  step: Step;
};

type CueSheetActions = {
  fetchCueSheet: (projectId: string) => Promise<void>;
  updateCueRole: (cueId: string, newRole: string) => void;
  exportCueSheet: (format: 'csv' | 'pdf') => Promise<void>;
  setStep: (step: Step) => void;
};

export const useCueSheetStore = create<CueSheetState & CueSheetActions>((set, get) => ({
  cueSheet: null,
  loading: false,
  error: null,
  step: 'SelectProject',

  fetchCueSheet: async (projectId: string) => {
    set({ loading: true, error: null, step: 'DetectTimings' });
    try {
      const cueSheet = await detectCues(projectId);
      set({ cueSheet, loading: false, step: 'Review' });
    } catch (error) {
      set({ error: 'Failed to detect cues.', loading: false, step: 'SelectProject' });
    }
  },

  updateCueRole: (cueId: string, newRole: string) => {
    const { cueSheet } = get();
    if (cueSheet) {
      const updatedCues = cueSheet.cues.map((cue: Cue) =>
        cue.id === cueId ? { ...cue, role: newRole } : cue
      );
      set({ cueSheet: { ...cueSheet, cues: updatedCues } });
    }
  },

  exportCueSheet: async (format: 'csv' | 'pdf') => {
    const { cueSheet } = get();
    if (cueSheet) {
      try {
        const result = await exportCueSheet({ cueSheet, format });
        if (format === 'csv') {
          // Trigger download
          const link = document.createElement('a');
          link.href = result;
          link.setAttribute('download', 'cue_sheet.csv');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Handle PDF export (e.g., open in new tab)
          window.open(result, '_blank');
        }
      } catch (error) {
        set({ error: 'Failed to export cue sheet.' });
      }
    }
  },

  setStep: (step: Step) => set({ step }),
}));
