import React from 'react';
import Card from './Card';

interface CardItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

interface CardGroupProps {
  items: CardItem[];
}

const CardGroup: React.FC<CardGroupProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardGroup;