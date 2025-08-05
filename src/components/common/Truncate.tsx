import React, { useState } from 'react';

interface TruncateProps {
  children: string;
  lines: number;
}

const Truncate: React.FC<TruncateProps> = ({ children, lines }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p
        className={!isExpanded ? `line-clamp-${lines}` : ''}
        style={{ WebkitLineClamp: lines }}
      >
        {children}
      </p>
      <button
        onClick={toggleIsExpanded}
        className="text-accent-primary hover:underline mt-2"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Truncate;