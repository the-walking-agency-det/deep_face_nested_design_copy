import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  searchProspects as searchProspectsApi,
  saveProspects as saveProspectsApi,
  exportProspects as exportProspectsApi,
  getHighlight as getHighlightApi,
  ARFilters,
} from '../utils/backend';
import { Prospect } from '../components/specific/ResultsGrid';
import { trackEvent } from '../utils/analytics';


interface ARDiscoverState {
  filters: ARFilters;
  prospects: Prospect[];
  savedProspects: Prospect[];
  selectedProspect: Prospect | null;
  loading: boolean;
  highlightUrl: string | null;
  setFilters: (filters: Partial<ARFilters>) => void;
  searchProspects: () => Promise<void>;
  saveProspects: () => Promise<void>;
  exportProspects: () => Promise<void>;
  selectProspect: (prospect: Prospect | null) => void;
  getHighlight: (trackId: string) => Promise<void>;
  addToSaved: (prospect: Prospect) => void;
}

export const useARDiscoverStore = create<ARDiscoverState>()(
  devtools((set, get) => ({
    filters: { growth: '', saves: '', shares: '' },
    prospects: [],
    savedProspects: [],
    selectedProspect: null,
    loading: false,
    highlightUrl: null,
    setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
    searchProspects: async () => {
      set({ loading: true });
      trackEvent('ar_filters_applied', get().filters);
      const prospects = await searchProspectsApi(get().filters);
      set({ prospects, loading: false });
    },
    saveProspects: async () => {
      await saveProspectsApi(get().savedProspects);
    },
    exportProspects: async () => {
      if (get().savedProspects.length === 0) {
        alert('No saved prospects to export.');
        return;
      }
      trackEvent('ar_exported', { count: get().savedProspects.length });
      const csv = await exportProspectsApi(get().savedProspects);
      const link = document.createElement('a');
      link.href = csv;
      link.setAttribute('download', 'prospects.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    selectProspect: (prospect) => {
      set({ selectedProspect: prospect, highlightUrl: null });
      if (prospect) {
        get().getHighlight(prospect.id);
      }
    },
    getHighlight: async (trackId: string) => {
        set({ loading: true });
        trackEvent('ar_preview_played', { trackId });
        const url = await getHighlightApi(trackId);
        set({ highlightUrl: url, loading: false });
    },
    addToSaved: (prospect: Prospect) => {
        trackEvent('ar_saved', { prospectId: prospect.id });
        set((state) => ({
          savedProspects: [...state.savedProspects, prospect],
          selectedProspect: null,
        }));
    }
  }))
);
