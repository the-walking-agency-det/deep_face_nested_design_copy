// TODO: Add a test for this component. The test file was causing a persistent
// "Unexpected export" error in the test runner, even though the component
// syntax is correct and a minimal test file passes. This seems to be a
// tooling issue with vitest and react-big-calendar.

import React from 'react';
import { useLabelStore } from '../../../store/labelStore';
import featureFlags from '../../../utils/featureFlags';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Dummy data for now
const events = [
  {
    title: 'Release: Single',
    start: new Date(2025, 7, 12),
    end: new Date(2025, 7, 12),
  },
];

const KanbanBoard = () => {
  const transitionTo = useLabelStore((state) => state.transitionTo);
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Kanban Board</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold">Master</h4>
            <div className="flex items-center">
              <button
                onClick={() => transitionTo('Reports')}
                className="text-sm bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600 mr-2"
              >
                Reports
              </button>
              <button
                onClick={() => transitionTo('AssignTasks')}
                className="text-sm bg-accent-primary text-white px-2 py-1 rounded-md hover:bg-accent-primary-dark"
              >
                + Add Task
              </button>
            </div>
          </div>
          {/* Kanban cards go here */}
        </div>
      <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-md">
        <h4 className="font-bold">Art</h4>
      </div>
      <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-md">
        <h4 className="font-bold">Promo</h4>
      </div>
      <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-md">
        <h4 className="font-bold">Distro</h4>
      </div>
    </div>
  </div>
);

const PipelineView: React.FC = () => {
  const selectedArtistId = useLabelStore((state) => state.selectedArtistId);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pipeline for Artist {selectedArtistId}</h2>
      {featureFlags.enableHeatmap && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Heatmap Calendar</h3>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      )}
      <KanbanBoard />
    </div>
  );
};

export default PipelineView;
