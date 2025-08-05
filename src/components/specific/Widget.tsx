import React from 'react';

interface WidgetProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`@container bg-light-surface dark:bg-dark-surface rounded-lg shadow-md p-4 sm:p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">{title}</h3>
      <div className="text-light-text-secondary dark:text-dark-text-secondary @lg:text-lg">
        {children}
      </div>
    </div>
  );
};

export default Widget;