import React from 'react';
import useImportStore from '../../../store/importStore';

const SourceSelect: React.FC = () => {
  const { setSource, setStep } = useImportStore();

  const handleCsvSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      // In a real app, we'd do more with the file here.
      // For now, just setting the source and moving to the next step.
      console.log('CSV file selected:', event.target.files[0].name);
      setSource('csv');
      setStep('MapFields');
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">1. Select Source</h2>
      <p className="mb-4">Choose a source to import your tracks from. Currently, only CSV import is supported.</p>
      <div className="flex items-center space-x-4">
        <label
          htmlFor="csv-upload"
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload CSV
        </label>
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleCsvSelect}
        />
        <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
          Connect Spotify (Coming Soon)
        </button>
        <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>
          Connect Apple Music (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default SourceSelect;
