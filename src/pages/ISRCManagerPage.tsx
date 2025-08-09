import React, { useEffect } from 'react';
import useIsrcStore from '../store/isrcStore';
import ISRCTable from '../components/specific/ISRCTable';
import { trackEvent } from '../utils/analytics';
import featureFlags from '../utils/featureFlags';

const ISRCManagerPage: React.FC = () => {
  const { mode, setMode, setSource, tracks } = useIsrcStore();

  useEffect(() => {
    trackEvent('isrc_opened');
  }, []);

  const handleModeSelect = (source: 'generate' | 'import') => {
    setSource(source);
    setMode('Assign');
  };

  const handleValidate = () => {
    trackEvent('isrc_validated', { trackCount: tracks.length });
    setMode('Validate');
  };

  const handleExport = () => {
    trackEvent('isrc_exported', { trackCount: tracks.length });
    setMode('Done');
  };

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">ISRC Manager</h1>

      {mode === 'ModeSelect' && (
        <div className="flex space-x-4">
          {featureFlags.enableGenerate && (
            <button
              onClick={() => handleModeSelect('generate')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Generate ISRCs
            </button>
          )}
          <button
            onClick={() => handleModeSelect('import')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Import ISRCs
          </button>
        </div>
      )}

      {mode === 'Assign' && (
        <div>
          <ISRCTable />
          <div className="flex space-x-4 mt-4">
            {featureFlags.enableValidate && (
              <button
                onClick={handleValidate}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Validate
              </button>
            )}
          </div>
        </div>
      )}

      {mode === 'Validate' && (
        <div>
          <p>Validation results will be shown here.</p>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setMode('Export')}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Export
            </button>
            <button
              onClick={() => setMode('Assign')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Back to Assign
            </button>
          </div>
        </div>
      )}

      {mode === 'Export' && (
        <div>
          <p>Export options will be shown here.</p>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleExport}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {mode === 'Done' && (
        <div>
          <p>ISRC assignment process is complete.</p>
          <button
            onClick={() => useIsrcStore.getState().reset()}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default ISRCManagerPage;
