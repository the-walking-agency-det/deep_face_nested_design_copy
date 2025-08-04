import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div className="bg-black p-4 rounded-lg">
            <video src={videoUrl} controls autoPlay className="w-full h-auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;