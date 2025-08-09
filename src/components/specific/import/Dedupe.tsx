import React from 'react';
import useImportStore from '../../../store/importStore';
import { resolveDuplicates } from '../../../utils/backend';

const Dedupe: React.FC = () => {
  const { importId, duplicates, setStep } = useImportStore();

  const handleResolveDuplicates = async () => {
    if (!importId) return;

    console.log('Resolving duplicates...');
    // In a real app, we'd send the user's resolutions to the backend.
    const resolutions = duplicates.map((d) => ({ ...d, resolution: 'keep' }));
    await resolveDuplicates({ importId, resolutions });
    setStep('Done');
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">5. Resolve Duplicates</h2>
      <p className="mb-4">We found some potential duplicates. Please review and decide how to handle them.</p>
      <div className="space-y-4">
        {duplicates.map((dup, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-medium">{dup.track}</p>
              <p className="text-sm text-gray-600">{dup.artist}</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded">Keep Both</button>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded">Merge</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">Discard</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleResolveDuplicates}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm Resolutions
        </button>
      </div>
    </div>
  );
};

export default Dedupe;
