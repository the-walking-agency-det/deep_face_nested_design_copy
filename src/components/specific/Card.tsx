import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link to={`/cards/${id}`}>
      <motion.div
        className="relative rounded-lg overflow-hidden shadow-lg"
        layoutId={`card-container-${id}`}
      >
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          layoutId={`card-image-${id}`}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <motion.h3 className="text-white text-xl font-bold" layoutId={`card-title-${id}`}>
            {title}
          </motion.h3>
          <motion.p className="text-gray-300" layoutId={`card-content-${id}`}>
            {content}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;