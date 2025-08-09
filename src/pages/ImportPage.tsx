import React from 'react';
import useImportStore from '../store/importStore';
import SourceSelect from '../components/specific/import/SourceSelect';
import MapFields from '../components/specific/import/MapFields';
import Validate from '../components/specific/import/Validate';
import RunImport from '../components/specific/import/RunImport';
import Dedupe from '../components/specific/import/Dedupe';
import Done from '../components/specific/import/Done';

const ImportPage: React.FC = () => {
  const { step } = useImportStore();

  const renderStep = () => {
    switch (step) {
      case 'SourceSelect':
        return <SourceSelect />;
      case 'MapFields':
        return <MapFields />;
      case 'Validate':
        return <Validate />;
      case 'RunImport':
        return <RunImport />;
      case 'Dedupe':
        return <Dedupe />;
      case 'Done':
        return <Done />;
      default:
        return <p>Unknown import step.</p>;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Import Tracks and Metadata</h1>
      {renderStep()}
    </div>
  );
};

export default ImportPage;
