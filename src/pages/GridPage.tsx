import React from 'react';
import ModularSection from '../components/layout/ModularSection';

const GridPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Responsive Grid Systems</h1>
      <ModularSection className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-4 gap-4">
        <div className="bg-blue-500 p-4 rounded-lg">
          <p>This is a grid item.</p>
        </div>
        <div className="bg-green-500 p-4 rounded-lg">
          <p>This is a grid item.</p>
        </div>
        <div className="bg-red-500 p-4 rounded-lg">
          <p>This is a grid item.</p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg">
          <p>This is a grid item.</p>
        </div>
      </ModularSection>
    </div>
  );
};

export default GridPage;