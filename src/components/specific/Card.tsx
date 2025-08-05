import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useBookmarkStore } from '../../store/bookmarkStore';
import LazyImage from '../common/LazyImage';

interface CardProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, title, content, imageUrl }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isBookmarked(id)) {
      removeBookmark(id);
    } else {
      addBookmark(id);
    }
  };

  return (
    <Link to={`/cards/${id}`}>
      <motion.div
        className="relative rounded-lg overflow-hidden shadow-lg"
        layoutId={`card-container-${id}`}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => {
          if (info.offset.x > 200) {
            // Handle swipe right (e.g., dismiss)
            console.log('Swiped right');
          } else if (info.offset.x < -200) {
            // Handle swipe left (e.g., archive)
            console.log('Swiped left');
          }
        }}
      >
        <button
          onClick={handleFavorite}
          className="absolute top-2 right-2 text-white text-2xl z-10"
        >
          {isBookmarked(id) ? <FaBookmark /> : <FaRegBookmark />}
        </button>
        import LazyImage from '../common/LazyImage';

// ... inside the Card component's return statement
        <LazyImage
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <motion.h3 className="text-white text-xl font-bold [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]" layoutId={`card-title-${id}`}>
            {title}
          </motion.h3>
          <motion.p className="text-gray-200 [text-shadow:0_1px_2px_rgb(0_0_0_/_0.5)]" layoutId={`card-content-${id}`}>
            {content}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;