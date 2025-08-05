import React from 'react';
import RoyaltyTable from '../components/specific/RoyaltyTable';

const RoyaltyTrackerPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">Royalty Tracker</h1>
      <RoyaltyTable />
    </div>
  );
};

export default RoyaltyTrackerPage;