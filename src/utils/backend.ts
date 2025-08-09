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

// A&R Discovery Mocks
export interface Prospect {
  id: string;
  artistName: string;
  trackTitle: string;
  imageUrl: string;
  reasons: string[];
}

export interface ARFilters {
    growth: string;
    saves: string;
    shares: string;
}

export const searchProspects = async (filters: ARFilters): Promise<Prospect[]> => {
    console.log('Searching prospects with filters:', filters);
    // Simulate filtering logic
    await new Promise(resolve => setTimeout(resolve, 500));
    const mockProspects: Prospect[] = [
      { id: '1', artistName: 'Ethereal Echo', trackTitle: 'Crystal Caves', imageUrl: 'https://picsum.photos/seed/a/400/400', reasons: ['High Growth', 'Viral'] },
      { id: '2', artistName: 'Midnight Bloom', trackTitle: 'Neon Petals', imageUrl: 'https://picsum.photos/seed/b/400/400', reasons: ['High Saves'] },
      { id: '3', artistName: 'Solar Flare', trackTitle: 'Sunspot', imageUrl: 'https://picsum.photos/seed/c/400/400', reasons: ['High Shares', 'New Artist'] },
      { id: '4', artistName: 'Tidal Wave', trackTitle: 'Deep Blue', imageUrl: 'https://picsum.photos/seed/d/400/400', reasons: ['High Growth'] },
    ];
    return mockProspects.filter(p => (filters.growth ? p.reasons.includes('High Growth') : true) && (filters.saves ? p.reasons.includes('High Saves') : true) && (filters.shares ? p.reasons.includes('High Shares') : true));
};

export const getHighlight = async (trackId: string): Promise<string> => {
    console.log('Getting highlight for track:', trackId);
    await new Promise(resolve => setTimeout(resolve, 500));
    return "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
};

export const saveProspects = async (prospects: Prospect[]): Promise<void> => {
    console.log('Saving prospects:', prospects);
    await new Promise(resolve => setTimeout(resolve, 500));
};

export const exportProspects = async (prospects: Prospect[]): Promise<string> => {
    console.log('Exporting prospects');
    const csvContent = [
      ['Artist Name', 'Track Title', 'Reasons'],
      ...prospects.map(p => [p.artistName, p.trackTitle, `"${p.reasons.join(', ')}"`]),
    ]
      .map(e => e.join(','))
      .join('\n');
    await new Promise(resolve => setTimeout(resolve, 500));
    return 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
};
