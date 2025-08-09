import { generateISRCs, validateISRCs, saveISRCs, exportRegistry } from './backend';
import { describe, it, expect, vi } from 'vitest';

describe('backend', () => {
  it('generateISRCs should return the correct number of ISRCs', async () => {
    const isrcs = await generateISRCs({ country: 'US', registrant: 'S1Z', year: 2025, count: 5 });
    expect(isrcs).toHaveLength(5);
    expect(isrcs[0]).toMatch(/^US-S1Z-25-\d{5}$/);
  });

  it('validateISRCs should correctly validate ISRCs', async () => {
    const results = await validateISRCs(['US-S1Z-25-00001', 'INVALID-ISRC']);
    expect(results).toHaveLength(2);
    expect(results[0].valid).toBe(true);
    expect(results[1].valid).toBe(false);
  });

  it('saveISRCs should log the assignments', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    await saveISRCs({ assignments: [] });
    expect(consoleSpy).toHaveBeenCalledWith('Saving ISRC assignments:', []);
    consoleSpy.mockRestore();
  });

  it('exportRegistry should return a CSV data URL', async () => {
    const url = await exportRegistry({ scope: 'all' });
    expect(url).toMatch(/^data:text\/csv;charset=utf-8,/);
  });
});
