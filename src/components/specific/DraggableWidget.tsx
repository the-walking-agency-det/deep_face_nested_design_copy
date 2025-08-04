import React from 'react';
import { Reorder } from 'framer-motion';
import Widget from './Widget';

interface DraggableWidgetProps {
  item: { id: string; title: string; content: string; className?: string };
}

const DraggableWidget: React.FC<DraggableWidgetProps> = ({ item }) => {
  return (
    <Reorder.Item value={item} id={item.id} className={item.className}>
      <Widget title={item.title}>
        <div>{item.content}</div>
      </Widget>
    </Reorder.Item>
  );
};

export default DraggableWidget;