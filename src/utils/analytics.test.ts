import { trackEvent } from './analytics';
import { describe, it, expect, vi } from 'vitest';

describe('analytics', () => {
  it('trackEvent should log the event to the console', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    trackEvent('isrc_opened', { page: 'ISRCManagerPage' });
    expect(consoleSpy).toHaveBeenCalledWith('[Analytics Event] isrc_opened', { page: 'ISRCManagerPage' });
    consoleSpy.mockRestore();
  });
});
