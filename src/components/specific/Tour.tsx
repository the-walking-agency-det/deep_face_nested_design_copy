import React from 'react';
import Joyride, { Step } from 'react-joyride';

const steps: Step[] = [
  {
    target: '.nav-dashboard',
    content: 'This is the main dashboard where you can see all your widgets.',
  },
  {
    target: '.nav-content',
    content: 'Explore dynamic content sections with accordions and search.',
  },
  {
    target: '.theme-switcher',
    content: 'Toggle between light and dark mode here.',
  },
];

const Tour: React.FC = () => {
  return (
    <Joyride
      steps={steps}
      continuous
      showProgress
      showSkipButton
      styles={{
        options: {
          arrowColor: '#FBF9F6',
          backgroundColor: '#FBF9F6',
          primaryColor: '#D97757',
          textColor: '#4E443C',
        },
      }}
    />
  );
};

export default Tour;