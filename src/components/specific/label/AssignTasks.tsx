import React from 'react';
import { useLabelStore } from '../../../store/labelStore';
import { trackEvent } from '../../../utils/analytics';

const AssignTasks: React.FC = () => {
  const transitionTo = useLabelStore((state) => state.transitionTo);
  const selectedArtistId = useLabelStore((state) => state.selectedArtistId);

  const handleAssignTask = () => {
    // In a real app, you'd call the backend here.
    // assignTask({ entityId: 'some-entity', assignee: 'some-user', due: new Date() });
    trackEvent('task_assigned', { artistId: selectedArtistId });
    console.log('Task assigned for artist', selectedArtistId);
    transitionTo('PipelineView');
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <button
          onClick={() => transitionTo('PipelineView')}
          className="mr-4 p-2 rounded-md hover:bg-light-surface dark:hover:bg-dark-surface"
        >
          &larr; Back
        </button>
        <h2 className="text-xl font-bold">Assign Task for Artist {selectedArtistId}</h2>
      </div>
      <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-md">
        <h3 className="text-lg font-bold mb-2">Task Details</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="task" className="block text-sm font-medium mb-1">
              Task Description
            </label>
            <input
              type="text"
              id="task"
              className="w-full p-2 rounded-md bg-light-background dark:bg-dark-background"
              placeholder="e.g., Finalize album art"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assignee" className="block text-sm font-medium mb-1">
              Assignee
            </label>
            <input
              type="text"
              id="assignee"
              className="w-full p-2 rounded-md bg-light-background dark:bg-dark-background"
              placeholder="e.g., design.team@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="due" className="block text-sm font-medium mb-1">
              Due Date
            </label>
            <input
              type="date"
              id="due"
              className="w-full p-2 rounded-md bg-light-background dark:bg-dark-background"
            />
          </div>
          <button
            type="button"
            onClick={handleAssignTask}
            className="bg-accent-primary text-white px-4 py-2 rounded-md hover:bg-accent-primary-dark"
          >
            Assign Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignTasks;
