import React from 'react';
import Icon from '../components/common/Icon';
import IconGroup from '../components/common/IconGroup';
import { FaBeer, FaReact, FaVuejs } from 'react-icons/fa';

const IconographyPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Scalable Iconography</h1>
      <IconGroup>
        <Icon>
          <FaBeer />
        </Icon>
        <Icon size="2em">
          <FaReact />
        </Icon>
        <Icon size="3em" color="green">
          <FaVuejs />
        </Icon>
      </IconGroup>
    </div>
  );
};

export default IconographyPage;