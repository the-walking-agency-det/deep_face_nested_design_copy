type AnalyticsEvent =
  | 'isrc_opened'
  | 'isrc_bulk_assigned'
  | 'isrc_validated'
  | 'isrc_exported'
  | 'presave_link_created'
  | 'preview_played'
  | 'launch_autoswitch'
  | 'personalized_generated'
  | 'emails_sent'
  | 'downloads';

interface AnalyticsData {
  [key: string]: any;
}

export const trackEvent = (eventName: AnalyticsEvent, data?: AnalyticsData): void => {
  console.log(`[Analytics Event] ${eventName}`, data ? data : '');
};
