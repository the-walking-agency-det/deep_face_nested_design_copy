import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookmark, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { useBookmarkStore } from '../../store/bookmarkStore';

interface AccordionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  preview: string;
}

const Accordion: React.FC<AccordionProps> = ({ id, title, children, isOpen, onToggle, preview }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent the accordion from toggling
    if (isBookmarked(id)) {
      removeBookmark(id);
    } else {
      addBookmark(id);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700" id={id}>
      <div
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-gray-900 dark:text-white cursor-pointer"
      >
        <div>
          <span>{title}</span>
          {!isOpen && <p className="text-sm text-gray-500 mt-1">{preview}</p>}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleBookmark} className="focus:outline-none">
            {isBookmarked(id) ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          <button onClick={handleShare} className="focus:outline-none">
            <FaShareAlt />
          </button>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            &#9660;
          </motion.span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;