type AnalyticsEvent =
  | 'isrc_opened'
  | 'isrc_bulk_assigned'
  | 'isrc_validated'
  | 'isrc_exported'
  | 'import_started'
  | 'fields_auto_mapped'
  | 'import_completed';

interface AnalyticsData {
  [key: string]: any;
}

export const trackEvent = (eventName: AnalyticsEvent, data?: AnalyticsData): void => {
  console.log(`[Analytics Event] ${eventName}`, data ? data : '');
};
