import React from 'react';
import MyCalendar from '../components/specific/Calendar';
import Checklist from '../components/specific/Checklist';

const ReleaseManagerPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-h1 font-bold mb-4">Release Manager</h1>
        <MyCalendar />
      </div>
      <div>
        <Checklist />
      </div>
    </div>
  );
};

export default ReleaseManagerPage;