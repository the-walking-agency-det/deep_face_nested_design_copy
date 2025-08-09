import { Track } from '../store/isrcStore';

interface GenerateISRCsParams {
  country: string;
  registrant: string;
  year: number;
  count: number;
}

interface ValidationResult {
  isrc: string;
  valid: boolean;
  message?: string;
}

interface SaveISRCsParams {
  assignments: Track[];
}

interface ExportRegistryParams {
  scope: 'all' | 'assigned' | 'unassigned';
}

export const generateISRCs = async (params: GenerateISRCsParams): Promise<string[]> => {
  console.log('Generating ISRCs with params:', params);
  const isrcs: string[] = [];
  for (let i = 0; i < params.count; i++) {
    const randomNum = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    isrcs.push(`${params.country}-${params.registrant}-${params.year.toString().slice(-2)}-${randomNum}`);
  }
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return isrcs;
};

export const validateISRCs = async (isrcs: string[]): Promise<ValidationResult[]> => {
  console.log('Validating ISRCs:', isrcs);
  const results: ValidationResult[] = isrcs.map(isrc => {
    const valid = /^([A-Z]{2})-([A-Z0-9]{3})-([0-9]{2})-([0-9]{5})$/.test(isrc);
    return {
      isrc,
      valid,
      message: valid ? 'Valid ISRC' : 'Invalid ISRC format',
    };
  });
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return results;
};

export const saveISRCs = async (params: SaveISRCsParams): Promise<void> => {
  console.log('Saving ISRC assignments:', params.assignments);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
};

export const exportRegistry = async (params: ExportRegistryParams): Promise<string> => {
  console.log('Exporting registry with scope:', params.scope);
  const csvContent = 'data:text/csv;charset=utf-8,Title,Artist,ISRC\nTrack A,Artist 1,US-S1Z-25-00001\nTrack B,Artist 1,US-S1Z-25-00002';
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return csvContent;
};

// --- Import Feature ---

interface StartImportParams {
  source: 'csv' | 'spotify' | 'apple_music';
  mapping: Record<string, string>;
}

interface StartImportResult {
  importId: string;
}

export const startImport = async (params: StartImportParams): Promise<StartImportResult> => {
  console.log('Starting import with params:', params);
  const importId = `import-${Math.random().toString(36).substr(2, 9)}`;
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  return { importId };
};

type ImportStatus = 'mapping' | 'validating' | 'importing' | 'deduping' | 'complete' | 'error';

interface ImportStatusResult {
  status: ImportStatus;
  progress: number;
  message: string;
  duplicates?: any[]; // Simplified for mock
  error?: string;
}

export const getImportStatus = async (importId: string): Promise<ImportStatusResult> => {
  console.log('Getting import status for:', importId);
  // Simulate a multi-step process
  const statuses: ImportStatusResult[] = [
    { status: 'validating', progress: 25, message: 'Validating data...' },
    { status: 'importing', progress: 50, message: 'Importing tracks...' },
    { status: 'deduping', progress: 75, message: 'Checking for duplicates...', duplicates: [{ track: 'Song A', artist: 'Artist 1' }] },
    { status: 'complete', progress: 100, message: 'Import complete!' },
  ];
  const result = statuses[Math.floor(Math.random() * statuses.length)];
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return result;
};

interface ResolveDuplicatesParams {
  importId: string;
  resolutions: any[]; // Simplified for mock
}

export const resolveDuplicates = async (params: ResolveDuplicatesParams): Promise<void> => {
  console.log('Resolving duplicates for import:', params.importId, 'with resolutions:', params.resolutions);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
};
