import React, { useEffect } from 'react';
import useImportStore from '../../../store/importStore';
import { getImportStatus } from '../../../utils/backend';

const RunImport: React.FC = () => {
  const {
    importId,
    progress,
    statusMessage,
    setProgress,
    setStatusMessage,
    setDuplicates,
    setStep,
  } = useImportStore();

  useEffect(() => {
    if (!importId) return;

    const interval = setInterval(async () => {
      const result = await getImportStatus(importId);
      setProgress(result.progress);
      setStatusMessage(result.message);

      if (result.status === 'deduping') {
        setDuplicates(result.duplicates || []);
        setStep('Dedupe');
        clearInterval(interval);
      }

      if (result.status === 'complete') {
        setStep('Done');
        clearInterval(interval);
      }

      if (result.status === 'error') {
        // Handle error state
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [importId, setProgress, setStatusMessage, setDuplicates, setStep]);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">4. Running Import</h2>
      <p className="mb-4">{statusMessage}</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RunImport;
