type AnalyticsEvent =
  | 'isrc_opened'
  | 'isrc_bulk_assigned'
  | 'isrc_validated'
  | 'isrc_exported';

interface AnalyticsData {
  [key: string]: any;
}

export const trackEvent = (eventName: AnalyticsEvent, data?: AnalyticsData): void => {
  console.log(`[Analytics Event] ${eventName}`, data ? data : '');
};
