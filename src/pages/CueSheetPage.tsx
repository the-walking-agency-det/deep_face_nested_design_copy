import React, { useState } from 'react';
import { useCueSheetStore } from '../store/cueSheetStore';
import CueSheetTable from '../components/specific/CueSheetTable';
import CueSheetControls from '../components/specific/CueSheetControls';

const CueSheetPage = () => {
  const { step, loading, error, cueSheet, fetchCueSheet, updateCueRole, exportCueSheet: exportAction } = useCueSheetStore();
  const [projectId, setProjectId] = useState('project-123');

  const handleDetectCues = () => {
    fetchCueSheet(projectId);
  };

  const renderStep = () => {
    switch (step) {
      case 'SelectProject':
        return (
          <div>
            <h2>Select Project</h2>
            <input
              type="text"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="Enter Project ID"
            />
            <button onClick={handleDetectCues} disabled={loading}>
              {loading ? 'Detecting...' : 'Detect Cues'}
            </button>
          </div>
        );
      case 'DetectTimings':
        return <div>Loading...</div>;
      case 'Review':
        if (!cueSheet) return <div>No cue sheet data available.</div>;
        return (
          <div>
            <h2>Review Cue Sheet</h2>
            <h3>{cueSheet.metadata.title}</h3>
            <CueSheetTable cues={cueSheet.cues} onCueChange={updateCueRole} />
            <CueSheetControls onExport={exportAction} />
          </div>
        );
      case 'Export':
          return <div>Exporting...</div>
      default:
        return <div>Unknown step.</div>;
    }
  };

  return (
    <div>
      <h1>Cue Sheet Generator</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {renderStep()}
    </div>
  );
};

export default CueSheetPage;
