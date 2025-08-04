import React from 'react';
import CardGroup from '../components/specific/CardGroup';

const cardItems = [
  {
    id: '1',
    title: 'Card 1',
    content: 'This is the content for card 1.',
    imageUrl: 'https://images.unsplash.com/photo-1559223594-42ea76b14132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '2',
    title: 'Card 2',
    content: 'This is the content for card 2.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-1428bc646b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '3',
    title: 'Card 3',
    content: 'This is the content for card 3.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const CardsPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Interactive Card Designs</h1>
      <CardGroup items={cardItems} />
    </div>
  );
};

export default CardsPage;