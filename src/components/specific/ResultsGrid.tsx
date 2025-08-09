import React from 'react';

export interface Prospect {
  id: string;
  artistName: string;
  trackTitle: string;
  imageUrl: string;
  reasons: string[];
}

interface ResultsGridProps {
  prospects: Prospect[];
  onSelectProspect: (prospect: Prospect) => void;
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ prospects, onSelectProspect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {prospects.map((prospect) => (
        <div
          key={prospect.id}
          className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onSelectProspect(prospect)}
        >
          <div className="relative">
            <img src={prospect.imageUrl} alt={prospect.trackTitle} className="w-full h-48 object-cover rounded-md mb-4" />
          </div>
          <h3 className="text-lg font-bold truncate">{prospect.trackTitle}</h3>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{prospect.artistName}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {prospect.reasons.map((reason, index) => (
              <span key={index} className="px-2 py-1 bg-accent-primary-light text-accent-primary-dark text-xs rounded-full">
                {reason}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
