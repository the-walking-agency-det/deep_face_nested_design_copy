import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const CardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const card = cardItems.find((item) => item.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Link to="/cards" className="text-blue-500 mb-4 inline-block">
        &larr; Back to Cards
      </Link>
      <motion.div layoutId={`card-container-${id}`}>
        <motion.img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-96 object-cover rounded-lg"
          layoutId={`card-image-${id}`}
        />
        <motion.h2 className="text-4xl font-bold mt-4" layoutId={`card-title-${id}`}>
          {card.title}
        </motion.h2>
        <motion.p className="mt-2" layoutId={`card-content-${id}`}>
          {card.content}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CardDetailPage;