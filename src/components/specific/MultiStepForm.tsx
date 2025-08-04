import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tooltip from '../common/Tooltip';

const steps = [
  { id: 1, title: 'Step 1', content: 'Content for step 1.' },
  { id: 2, title: 'Step 2', content: 'Content for step 2.' },
  { id: 3, title: 'Step 3', content: 'Content for step 3.' },
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{steps[currentStep].title}</h2>
        <div>
          <Tooltip content="Go to the previous step">
            <button
              onClick={handlePrev}
              className="mr-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
              disabled={currentStep === 0}
            >
              Previous
            </button>
          </Tooltip>
          <Tooltip content="Go to the next step">
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-blue-500 text-white"
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </Tooltip>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MultiStepForm;