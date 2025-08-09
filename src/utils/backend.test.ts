import * as backend from './backend';
import { describe, it, expect, vi } from 'vitest';

describe('backend utility', () => {
  describe('ISRC Functions', () => {
    it('generateISRCs should return the correct number of ISRCs', async () => {
      const isrcs = await backend.generateISRCs({ country: 'US', registrant: 'S1Z', year: 2025, count: 5 });
      expect(isrcs).toHaveLength(5);
      expect(isrcs[0]).toMatch(/^US-S1Z-25-\d{5}$/);
    });

    it('validateISRCs should correctly validate ISRCs', async () => {
      const results = await backend.validateISRCs(['US-S1Z-25-00001', 'INVALID-ISRC']);
      expect(results).toHaveLength(2);
      expect(results[0].valid).toBe(true);
      expect(results[1].valid).toBe(false);
    });

    it('saveISRCs should log the assignments', async () => {
      const consoleSpy = vi.spyOn(console, 'log');
      await backend.saveISRCs({ assignments: [] });
      expect(consoleSpy).toHaveBeenCalledWith('Saving ISRC assignments:', []);
      consoleSpy.mockRestore();
    });

    it('exportRegistry should return a CSV data URL', async () => {
      const url = await backend.exportRegistry({ scope: 'all' });
      expect(url).toMatch(/^data:text\/csv;charset=utf-8,/);
    });
  });

  describe('Import Functions', () => {
    it('startImport should return an importId', async () => {
      const result = await backend.startImport({ source: 'csv', mapping: {} });
      expect(result).toHaveProperty('importId');
      expect(result.importId).toMatch(/^import-/);
    });

    it('getImportStatus should return a status object', async () => {
      const result = await backend.getImportStatus('test-id');
      expect(result).toHaveProperty('status');
      expect(result).toHaveProperty('progress');
      expect(result).toHaveProperty('message');
    });

    it('resolveDuplicates should not throw an error', async () => {
      await expect(
        backend.resolveDuplicates({ importId: 'test-id', resolutions: [] })
      ).resolves.not.toThrow();
    });
  });
});
