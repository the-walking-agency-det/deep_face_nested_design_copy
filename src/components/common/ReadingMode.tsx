import React, { useState } from 'react';

interface ReadingModeProps {
  children: React.ReactNode;
}

const ReadingMode: React.FC<ReadingModeProps> = ({ children }) => {
  const [isReadingMode, setIsReadingMode] = useState(false);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsReadingMode(!isReadingMode)}
          className="px-4 py-2 rounded-full bg-accent-secondary text-white"
        >
          {isReadingMode ? 'Exit' : 'Enter'} Reading Mode
        </button>
      </div>
      <div
        className={`prose dark:prose-invert max-w-none ${
          isReadingMode ? 'max-w-prose mx-auto' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ReadingMode;