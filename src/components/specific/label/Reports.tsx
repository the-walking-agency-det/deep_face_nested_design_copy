import React from 'react';
import { useLabelStore } from '../../../store/labelStore';
import { trackEvent } from '../../../utils/analytics';

const Reports: React.FC = () => {
  const transitionTo = useLabelStore((state) => state.transitionTo);
  const selectedArtistId = useLabelStore((state) => state.selectedArtistId);

  const handleExportReport = () => {
    // In a real app, you'd call the backend here.
    // exportLabelReport({ period: 'some-period' });
    trackEvent('report_exported', { artistId: selectedArtistId });
    console.log('Exporting report for artist', selectedArtistId);
    transitionTo('PipelineView');
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <button
          onClick={() => transitionTo('PipelineView')}
          className="mr-4 p-2 rounded-md hover:bg-light-surface dark:hover:bg-dark-surface"
        >
          &larr; Back
        </button>
        <h2 className="text-xl font-bold">Export Report for Artist {selectedArtistId}</h2>
      </div>
      <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-md">
        <h3 className="text-lg font-bold mb-2">Report Period</h3>
        <form>
          <div className="flex items-center space-x-4 mb-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="w-full p-2 rounded-md bg-light-background dark:bg-dark-background"
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium mb-1">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="w-full p-2 rounded-md bg-light-background dark:bg-dark-background"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleExportReport}
            className="bg-accent-primary text-white px-4 py-2 rounded-md hover:bg-accent-primary-dark"
          >
            Export Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reports;
