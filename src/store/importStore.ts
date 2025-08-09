import { create } from 'zustand';

// As per the spec: SourceSelect → MapFields → Validate → RunImport → Dedupe → Done
export type ImportStep = 'SourceSelect' | 'MapFields' | 'Validate' | 'RunImport' | 'Dedupe' | 'Done';

export type ImportSource = 'csv' | 'spotify' | 'apple_music' | null;

// As per the spec: indii.import.v1 { source, mappings, results }
interface ImportState {
  step: ImportStep;
  source: ImportSource;
  mappings: Record<string, string>;
  results: any; // Using 'any' for now, can be refined later
  importId: string | null;
  statusMessage: string;
  progress: number;
  duplicates: any[];

  setStep: (step: ImportStep) => void;
  setSource: (source: ImportSource) => void;
  setMappings: (mappings: Record<string, string>) => void;
  setResults: (results: any) => void;
  setImportId: (importId: string | null) => void;
  setStatusMessage: (message: string) => void;
  setProgress: (progress: number) => void;
  setDuplicates: (duplicates: any[]) => void;

  reset: () => void;
}

const useImportStore = create<ImportState>((set) => ({
  step: 'SourceSelect',
  source: null,
  mappings: {},
  results: null,
  importId: null,
  statusMessage: '',
  progress: 0,
  duplicates: [],

  setStep: (step) => set({ step }),
  setSource: (source) => set({ source }),
  setMappings: (mappings) => set({ mappings }),
  setResults: (results) => set({ results }),
  setImportId: (importId) => set({ importId }),
  setStatusMessage: (statusMessage) => set({ statusMessage }),
  setProgress: (progress) => set({ progress }),
  setDuplicates: (duplicates) => set({ duplicates }),

  reset: () =>
    set({
      step: 'SourceSelect',
      source: null,
      mappings: {},
      results: null,
      importId: null,
      statusMessage: '',
      progress: 0,
      duplicates: [],
    }),
}));

export default useImportStore;
