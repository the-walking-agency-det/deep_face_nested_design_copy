type AnalyticsEvent =
  | 'isrc_opened'
  | 'isrc_bulk_assigned'
  | 'isrc_validated'
  | 'isrc_exported'
  | 'label_view_loaded'
  | 'task_assigned'
  | 'report_exported';
>>>>>>> origin/main
=======
  | 'label_view_loaded'
  | 'task_assigned'
  | 'report_exported';
>>>>>>> origin/main

interface AnalyticsData {
  [key: string]: any;
}

export const trackEvent = (eventName: AnalyticsEvent, data?: AnalyticsData): void => {
  console.log(`[Analytics Event] ${eventName}`, data ? data : '');
};
