import React from 'react';
import useImportStore from '../../../store/importStore';
import { trackEvent } from '../../../utils/analytics';

const MapFields: React.FC = () => {
  const { setStep, setMappings } = useImportStore();

  // Mocked data for now
  const csvColumns = ['Track Title', 'Artist Name', 'ISRC Code'];
  const appFields = ['title', 'artist', 'isrc'];

  const handleConfirmMapping = () => {
    // In a real app, we'd save the user's mapping configuration.
    const autoMapping = {
      'Track Title': 'title',
      'Artist Name': 'artist',
      'ISRC Code': 'isrc',
    };
    console.log('Confirmed mapping:', autoMapping);
    trackEvent('fields_auto_mapped', { confidence: 0.9 }); // Mock confidence score
    setMappings(autoMapping);
    setStep('Validate');
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">2. Map Fields</h2>
      <p className="mb-4">Map the columns from your CSV to the corresponding fields in the application.</p>
      <div className="space-y-4">
        {csvColumns.map((col) => (
          <div key={col} className="flex items-center space-x-4">
            <span className="w-1/3 font-medium">{col}</span>
            <select className="w-2/3 p-2 border rounded">
              <option>Select field...</option>
              {appFields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleConfirmMapping}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm Mapping
        </button>
      </div>
    </div>
  );
};

export default MapFields;
