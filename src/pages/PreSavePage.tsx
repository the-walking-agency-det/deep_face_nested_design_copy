import React from 'react';
import usePreSaveStore from '../store/preSaveStore';
import { trackEvent } from '../utils/analytics';
import featureFlags from '../utils/featureFlags';
import { createPreSave } from '../utils/backend';

const HookWindowSelector: React.FC = () => {
  const { config, setConfig } = usePreSaveStore();

  return (
    <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-lg shadow">
      <h2 className="text-h2 font-bold mb-4">Hook Window Selector</h2>
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="hookStart" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
            Start Time (seconds)
          </label>
          <input
            type="number"
            id="hookStart"
            value={config.hookStart}
            onChange={(e) => setConfig({ hookStart: parseInt(e.target.value, 10) })}
            className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="hookEnd" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
            End Time (seconds)
          </label>
          <input
            type="number"
            id="hookEnd"
            value={config.hookEnd}
            onChange={(e) => setConfig({ hookEnd: parseInt(e.target.value, 10) })}
            className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm"
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        Preview window: {config.hookStart}s - {config.hookEnd}s
      </p>
    </div>
  );
};


const PreSavePage: React.FC = () => {
  const { state, setState, config, presaveId, setPresaveId } = usePreSaveStore();

  const handleGenerateLink = async () => {
    trackEvent('presave_link_created', config);
    const { presaveId } = await createPreSave(config);
    setPresaveId(presaveId);
    setState('GenerateLink');
  };

  if (!featureFlags.enableGating) {
    return (
      <div>
        <h1 className="text-h1 font-bold mb-4">Pre-Save Gating</h1>
        <p>This feature is currently disabled.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">Pre-Save Gating</h1>

      {state === 'Configure' && (
        <div>
          <HookWindowSelector />
          <button
            onClick={handleGenerateLink}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate Link
          </button>
        </div>
      )}

      {state === 'GenerateLink' && (
        <div>
          <h2 className="text-h2 font-bold mb-4">Generated Link</h2>
          <p>Here is your pre-save link:</p>
          <pre className="bg-light-surface dark:bg-dark-surface p-4 rounded-lg shadow">
            /presave/{presaveId}
          </pre>
          <button
            onClick={() => setState('TrackMetrics')}
            className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Track Metrics
          </button>
        </div>
      )}

      {state === 'TrackMetrics' && (
        <div>
          <h2 className="text-h2 font-bold mb-4">Metrics</h2>
          <p>Tracking metrics for pre-save link...</p>
          {/* Metrics will be displayed here */}
        </div>
      )}

    </div>
  );
};

export default PreSavePage;
