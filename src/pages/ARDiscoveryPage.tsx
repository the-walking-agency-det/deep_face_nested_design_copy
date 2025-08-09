import React, { useEffect } from 'react';
import ResultsGrid from '../components/specific/ResultsGrid';
import PreviewPanel from '../components/specific/PreviewPanel';
import { useARDiscoverStore } from '../store/arDiscoverStore';

const ARDiscoveryPage: React.FC = () => {
  const {
    filters,
    prospects,
    savedProspects,
    selectedProspect,
    loading,
    setFilters,
    searchProspects,
    exportProspects,
    selectProspect,
    addToSaved,
  } = useARDiscoverStore();

  useEffect(() => {
    searchProspects();
  }, [searchProspects]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {
    searchProspects();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">A&R Discovery</h1>
      <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={exportProspects}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
            disabled={savedProspects.length === 0}
          >
            Export List ({savedProspects.length})
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="growth" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
              Growth Rate
            </label>
            <input
              type="text"
              name="growth"
              id="growth"
              value={filters.growth}
              onChange={handleFilterChange}
              className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-divider dark:border-dark-divider rounded-md shadow-sm focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="saves" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
              Saves
            </label>
            <input
              type="text"
              name="saves"
              id="saves"
              value={filters.saves}
              onChange={handleFilterChange}
              className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-divider dark:border-dark-divider rounded-md shadow-sm focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="shares" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
              Shares
            </label>
            <input
              type="text"
              name="shares"
              id="shares"
              value={filters.shares}
              onChange={handleFilterChange}
              className="mt-1 block w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-divider dark:border-dark-divider rounded-md shadow-sm focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleApplyFilters}
            className="px-4 py-2 bg-accent-primary text-white rounded-md hover:bg-accent-primary-dark"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Apply'}
          </button>
        </div>
      </div>
      <div className="flex">
        <div className={`w-full ${selectedProspect ? 'md:w-2/3' : 'md:w-full'} transition-all duration-300`}>
          {loading && prospects.length === 0 ? (
            <p>Loading prospects...</p>
          ) : (
            <ResultsGrid prospects={prospects} onSelectProspect={selectProspect} />
          )}
        </div>
        <PreviewPanel prospect={selectedProspect} onClose={() => selectProspect(null)} onSave={addToSaved} />
      </div>
    </div>
  );
};

export default ARDiscoveryPage;
