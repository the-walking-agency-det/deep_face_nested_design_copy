import React from 'react';

interface ModularSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ModularSection: React.FC<ModularSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`@container ${className}`}>
      {children}
    </div>
  );
};

export default ModularSection;