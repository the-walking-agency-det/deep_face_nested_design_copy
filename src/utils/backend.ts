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

// --- Exclusive Drop Flow ---

interface ExclusiveDropConfig {
  codeLimit: number;
}

export const generateCodes = async (n: number): Promise<string[]> => {
  console.log(`Generating ${n} exclusive codes...`);
  const codes = Array.from({ length: n }, () => `EXCLUSIVE_CODE_${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  console.log('Generated codes:', codes);
  return codes;
}

export const publishLanding = async (config: ExclusiveDropConfig): Promise<boolean> => {
  console.log('Publishing exclusive drop landing page with config:', config);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  console.log('Landing page published successfully.');
  return true;
}

export const checkRedemptionStats = async (): Promise<{ redeemedCount: number, totalCount: number }> => {
  console.log('Checking redemption stats...');
  // Simulate some redeemed codes
  const totalCount = 1000;
  const redeemedCount = Math.floor(Math.random() * totalCount);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  console.log('Redemption stats:', { redeemedCount, totalCount });
  return { redeemedCount, totalCount };
}
