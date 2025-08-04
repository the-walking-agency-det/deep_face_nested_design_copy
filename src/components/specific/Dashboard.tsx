import React from 'react';
import { Reorder } from 'framer-motion';
import DraggableWidget from './DraggableWidget';
import Chart from './Chart';
import usePersistentState from '../../hooks/usePersistentState';

const initialItems = [
  { id: '1', title: 'Widget 1', content: <Chart />, className: 'lg:col-span-2' },
  { id: '2', title: 'Widget 2', content: 'Content for widget 2.' },
  { id: '3', title: 'Widget 3', content: 'Content for widget 3.' },
  { id: '4', title: 'Widget 4', content: 'Content for widget 4.', className: 'lg:col-span-4' },
];

const Dashboard: React.FC = () => {
  const [items, setItems] = usePersistentState('dashboard-widgets', initialItems);

  return (
    <Reorder.Group as="div" axis="y" values={items} onReorder={setItems} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {items.map((item) => (
        <DraggableWidget key={item.id} item={item} />
      ))}
    </Reorder.Group>
  );
};

export default Dashboard;