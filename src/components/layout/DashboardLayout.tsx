import React from 'react';
import ThemeSwitcher from '../common/ThemeSwitcher';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-end mb-4">
        <ThemeSwitcher />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;