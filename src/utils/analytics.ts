type AnalyticsEvent =
  | 'isrc_opened'
  | 'isrc_bulk_assigned'
  | 'isrc_validated'
  | 'isrc_exported'
  // Exclusive Drop
  | 'drop_published'
  | 'code_redeemed'
  | 'drop_closed'
  // A&R Discovery
  | 'ar_opened'
  | 'ar_filters_applied'
  | 'ar_preview_played'
  | 'ar_saved'
  | 'ar_exported'
  // Label
  | 'label_view_loaded'
  | 'task_assigned'
  | 'report_exported';

interface AnalyticsData {
  [key: string]: any;
}

export const trackEvent = (eventName: AnalyticsEvent, data?: AnalyticsData): void => {
  console.log(`[Analytics Event] ${eventName}`, data ? data : '');
};
