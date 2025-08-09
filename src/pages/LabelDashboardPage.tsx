import React, { useEffect } from 'react';
import { useLabelStore } from '../store/labelStore';
import { trackEvent } from '../utils/analytics';
import ArtistList from '../components/specific/label/ArtistList';
import PipelineView from '../components/specific/label/PipelineView';
import AssignTasks from '../components/specific/label/AssignTasks';
import Reports from '../components/specific/label/Reports';

const LabelDashboardPage: React.FC = () => {
  const currentState = useLabelStore((state) => state.currentState);

  useEffect(() => {
    trackEvent('label_view_loaded');
  }, []);

  const renderView = () => {
    switch (currentState) {
      case 'ArtistList':
        return <ArtistList />;
      case 'PipelineView':
        return <PipelineView />;
      case 'AssignTasks':
        return <AssignTasks />;
      case 'Reports':
        return <Reports />;
      default:
        return <ArtistList />;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Label Dashboard</h1>
      {renderView()}
    </div>
  );
};

export default LabelDashboardPage;
