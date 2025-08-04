import React from 'react';

interface IconGroupProps {
  children: React.ReactNode;
}

const IconGroup: React.FC<IconGroupProps> = ({ children }) => {
  return (
    <div className="flex items-center space-x-4">
      {children}
    </div>
  );
};

export default IconGroup;