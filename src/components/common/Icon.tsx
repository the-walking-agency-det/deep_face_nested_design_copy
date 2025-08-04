import React from 'react';
import { IconContext } from 'react-icons';

interface IconProps {
  children: React.ReactNode;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ children, size = '1em', color }) => {
  return (
    <IconContext.Provider value={{ size, color }}>
      {children}
    </IconContext.Provider>
  );
};

export default Icon;