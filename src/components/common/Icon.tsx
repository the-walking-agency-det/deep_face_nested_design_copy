import React from 'react';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

interface IconProps {
  children: React.ReactNode;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ children, size = '1em', color }) => {
  return (
    <IconContext.Provider value={{ size, color }}>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.div>
    </IconContext.Provider>
  );
};

export default Icon;