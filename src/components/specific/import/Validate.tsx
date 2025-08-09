import React from 'react';
import useImportStore from '../../../store/importStore';
import { startImport } from '../../../utils/backend';
import { trackEvent } from '../../../utils/analytics';

const Validate: React.FC = () => {
  const { setStep, setImportId, source, mappings } = useImportStore();

  // Mocked validation data
  const validationResults = {
    totalRows: 100,
    validRows: 98,
    invalidRows: 2,
    errors: [
      { row: 15, message: 'Missing ISRC' },
      { row: 42, message: 'Invalid date format' },
    ],
  };

  const handleStartImport = async () => {
    if (!source) {
      console.error('Source is not selected');
      return;
    }
    console.log('Starting import...');
    trackEvent('import_started', { source });
    const result = await startImport({ source, mapping: mappings });
    setImportId(result.importId);
    setStep('RunImport');
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">3. Validate Data</h2>
      <p className="mb-4">Here's a summary of the data validation. You can proceed with the import or go back to fix the errors.</p>
      <div className="bg-gray-100 p-4 rounded-lg space-y-2">
        <p>Total Rows: {validationResults.totalRows}</p>
        <p className="text-green-600">Valid Rows: {validationResults.validRows}</p>
        <p className="text-red-600">Invalid Rows: {validationResults.invalidRows}</p>
        <div>
          <h3 className="font-semibold">Errors:</h3>
          <ul className="list-disc list-inside">
            {validationResults.errors.map((err) => (
              <li key={err.row}>Row {err.row}: {err.message}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleStartImport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Run Import
        </button>
      </div>
    </div>
  );
};

export default Validate;
