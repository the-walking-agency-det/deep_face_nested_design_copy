import React, { useState } from 'react';
import VideoModal from '../components/specific/VideoModal';
import { FaPlay } from 'react-icons/fa';
import LazyImage from '../components/common/LazyImage';

const MediaPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Multimedia Integration</h1>
      <div className="relative">
        <LazyImage
          src="https://images.unsplash.com/photo-1517694712202-1428bc646b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Laptop"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-6xl"
          >
            <FaPlay />
          </button>
        </div>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
};

export default MediaPage;