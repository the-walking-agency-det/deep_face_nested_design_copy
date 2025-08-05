import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookmark, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { useBookmarkStore } from '../../store/bookmarkStore';

import LazyAccordionContent from './LazyAccordionContent';
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
    <div className="border-b border-light-surface dark:border-dark-surface" id={id}>
      <div
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-light-text-primary dark:text-dark-text-primary cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <div>
          <span id={`accordion-title-${id}`}>{title}</span>
          {!isOpen && <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{preview}</p>}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleBookmark} className="focus:outline-none" aria-label={`Bookmark ${title}`}>
            {isBookmarked(id) ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          <button onClick={handleShare} className="focus:outline-none" aria-label={`Share ${title}`}>
            <FaShareAlt />
          </button>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          >
            &#9660;
          </motion.span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-title-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4">
              <LazyAccordionContent>{children}</LazyAccordionContent>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;