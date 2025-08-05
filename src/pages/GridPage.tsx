import React from 'react';
import ModularSection from '../components/layout/ModularSection';

const GridPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Responsive Grid Systems</h1>
      <ModularSection className="grid grid-cols-1 @md:grid-cols-3 @xl:grid-cols-5 gap-4">
        <div className="bg-accent-primary p-4 rounded-lg @md:col-span-2 @xl:col-span-3">
          <p>This is a wider grid item.</p>
        </div>
        <div className="bg-accent-secondary p-4 rounded-lg @md:col-span-1 @xl:col-span-2">
          <p>This is a smaller grid item.</p>
        </div>
        <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-lg @md:col-span-3 @xl:col-span-5">
          <p>This is a full-width item on medium screens.</p>
        </div>
      </ModularSection>
    </div>
  );
};

export default GridPage;