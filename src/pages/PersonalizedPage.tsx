import React, { useState } from 'react';
import usePersonalizedStore from '../store/personalizedStore';
import { trackEvent } from '../utils/analytics';
import featureFlags from '../utils/featureFlags';
import { generateCovers, renderBatch, sendEmails } from '../utils/backend';
import Papa from 'papaparse';

const FanCsvUpload: React.FC = () => {
  const { setFans } = usePersonalizedStore();
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          if (results.errors.length) {
            setError('Error parsing CSV file.');
            return;
          }
          // Assuming CSV has 'name' and 'email' columns
          const fans = results.data as { name: string; email: string }[];
          setFans(fans);
          setError(null);
        },
      });
    }
  };

  return (
    <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-lg shadow">
      <h2 className="text-h2 font-bold mb-4">Upload Fan List (CSV)</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

const PersonalizedPage: React.FC = () => {
  const { state, setState, fans, variants, setVariants } = usePersonalizedStore();

  const handleGenerateVariants = async () => {
    trackEvent('personalized_generated', { fanCount: fans.length });
    const generatedVariants = await generateCovers(fans);
    setVariants(generatedVariants);
    setState('GenerateVariants');
  };

  const handleBatchRender = async () => {
    await renderBatch(variants);
    setState('BatchRender');
  };

  const handleDistribute = async () => {
    trackEvent('emails_sent', { variantCount: variants.length });
    await sendEmails(variants);
    setState('Distribute');
  };

  if (!featureFlags.enableWatermark) {
    // Assuming this flag gates the whole feature for now
    return (
      <div>
        <h1 className="text-h1 font-bold mb-4">Personalized Thank-You Edition</h1>
        <p>This feature is currently disabled.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">Personalized Thank-You Edition</h1>

      {state === 'UploadFanList' && (
        <div>
          <FanCsvUpload />
          <button
            onClick={handleGenerateVariants}
            disabled={fans.length === 0}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            Generate Variants
          </button>
        </div>
      )}

      {state === 'GenerateVariants' && (
        <div>
          <h2 className="text-h2 font-bold mb-4">Generated Variants</h2>
          {/* Display variants here */}
          <button
            onClick={handleBatchRender}
            className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Render Batch
          </button>
        </div>
      )}

      {state === 'BatchRender' && (
        <div>
          <h2 className="text-h2 font-bold mb-4">Batch Rendering</h2>
          <p>Rendering personalized assets...</p>
          <button
            onClick={handleDistribute}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Distribute
          </button>
        </div>
      )}

      {state === 'Distribute' && (
        <div>
          <h2 className="text-h2 font-bold mb-4">Distributing</h2>
          <p>Distributing personalized assets to fans...</p>
          <button
            onClick={() => setState('Track')}
            className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Track
          </button>
        </div>
      )}

      {state === 'Track' && (
        <div>
          <h2 className="text-h2 font-bold mb-4">Tracking</h2>
          <p>Tracking delivery status...</p>
          {/* Tracking info will be displayed here */}
        </div>
      )}
    </div>
  );
};

export default PersonalizedPage;
