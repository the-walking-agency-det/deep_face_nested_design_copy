import React, { useEffect } from 'react';
import useImportStore from '../../../store/importStore';
import { trackEvent } from '../../../utils/analytics';

const Done: React.FC = () => {
  const { reset, source, results } = useImportStore();

  useEffect(() => {
    trackEvent('import_completed', { source, completeness: 1 }); // Mock completeness
  }, [source, results]);

  return (
    <div className="p-4 border rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Import Complete!</h2>
      <p className="mb-6">Your tracks and metadata have been successfully imported.</p>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Another Import
      </button>
    </div>
  );
};

export default Done;
