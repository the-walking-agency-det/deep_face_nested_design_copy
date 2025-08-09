import React from 'react';
import { Prospect } from './ResultsGrid';
import { FaTimes } from 'react-icons/fa';
import { useARDiscoverStore } from '../../store/arDiscoverStore';

interface PreviewPanelProps {
  prospect: Prospect | null;
  onClose: () => void;
  onSave: (prospect: Prospect) => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ prospect, onClose, onSave }) => {
  const { highlightUrl, loading } = useARDiscoverStore();

  if (!prospect) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-light-surface dark:bg-dark-surface shadow-lg p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out"
         style={{ transform: prospect ? 'translateX(0)' : 'translateX(100%)' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Preview</h2>
        <button onClick={onClose} className="text-light-text-secondary dark:text-dark-text-secondary">
          <FaTimes />
        </button>
      </div>
      <div>
        <img src={prospect.imageUrl} alt={prospect.trackTitle} className="w-full h-64 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold">{prospect.trackTitle}</h3>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-4">{prospect.artistName}</p>
        <div className="mb-4">
          <h4 className="font-bold mb-2">Why Surfaced</h4>
          <div className="flex flex-wrap gap-2">
            {prospect.reasons.map((reason, index) => (
              <span key={index} className="px-2 py-1 bg-accent-primary-light text-accent-primary-dark text-xs rounded-full">
                {reason}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Audio Highlight</h4>
          {loading && !highlightUrl ? <p>Loading highlight...</p> : null}
          {highlightUrl && (
            <audio controls src={highlightUrl} className="w-full">
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <div className="mt-4">
            <h4 className="font-bold mb-2">Notes</h4>
            <textarea
                className="w-full p-2 bg-light-background dark:bg-dark-background border border-light-divider dark:border-dark-divider rounded-md"
                placeholder="Add notes here..."
            ></textarea>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onSave(prospect)}
            className="px-4 py-2 bg-accent-primary text-white rounded-md hover:bg-accent-primary-dark"
          >
            Save Prospect
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
