import React from 'react';
import { useVirtual } from '@tanstack/react-virtual';
import DraggableWidget from './DraggableWidget';
import Chart from './Chart';
import usePersistentState from '../../hooks/usePersistentState';

const generateItems = (count: number) => {
  return Array.from({ length: count }, (v, k) => ({
    id: `${k}`,
    title: `Widget ${k + 1}`,
    content: k === 0 ? <Chart /> : `Content for widget ${k + 1}.`,
    className: k === 0 ? 'lg:col-span-2' : '',
  }));
};

const Dashboard: React.FC = () => {
  const [items, setItems] = usePersistentState('dashboard-widgets', () => generateItems(1000));
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef,
    estimateSize: React.useCallback(() => 200, []), // Estimate row height
  });

  return (
    <div ref={parentRef} className="h-[80vh] overflow-y-auto">
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualItem.start}px)`,
            }}
            className="p-2"
          >
            <DraggableWidget item={items[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;