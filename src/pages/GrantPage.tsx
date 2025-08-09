import React from 'react';
import useGrantStore from '../store/grantStore';
import { trackEvent } from '../utils/analytics';
import featureFlags from '../utils/featureFlags';
import { generatePortfolioPDF, exportBundle, setReminder } from '../utils/backend';
import { motion, AnimatePresence } from 'framer-motion';
import Tooltip from '../components/common/Tooltip';

const FillForm: React.FC = () => {
  const { form, setForm } = useGrantStore();
  return (
    <div>
      <h3 className="text-h3 font-bold mb-4">Fill Form</h3>
      <p>Form fields will go here.</p>
    </div>
  );
};

const Attachments: React.FC = () => {
  return (
    <div>
      <h3 className="text-h3 font-bold mb-4">Attachments</h3>
      <p>File attachment component will go here.</p>
    </div>
  );
};

const ValidateChecklist: React.FC = () => {
  return (
    <div>
      <h3 className="text-h3 font-bold mb-4">Validate Checklist</h3>
      <p>Checklist component will go here.</p>
    </div>
  );
};

const ExportBundle: React.FC = () => {
    return (
      <div>
        <h3 className="text-h3 font-bold mb-4">Export Bundle</h3>
        <p>Export bundle component will go here.</p>
      </div>
    );
};

const TrackStatus: React.FC = () => {
    return (
      <div>
        <h3 className="text-h3 font-bold mb-4">Track Status</h3>
        <p>Track status component will go here.</p>
      </div>
    );
};

const steps = [
    { id: 'FillForm', title: 'Fill Form', component: FillForm },
    { id: 'Attachments', title: 'Attachments', component: Attachments },
    { id: 'ValidateChecklist', title: 'Validate Checklist', component: ValidateChecklist },
    { id: 'ExportBundle', title: 'Export Bundle', component: ExportBundle },
    { id: 'TrackStatus', title: 'Track Status', component: TrackStatus },
];

const GrantPage: React.FC = () => {
  const { state, setState } = useGrantStore();

  const currentStepIndex = steps.findIndex(step => step.id === state);
  const CurrentComponent = steps[currentStepIndex].component;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setState(steps[currentStepIndex + 1].id as any);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setState(steps[currentStepIndex - 1].id as any);
    }
  };

  if (!featureFlags.enableAutoScan) {
    return (
      <div>
        <h1 className="text-h1 font-bold mb-4">Grant Submission</h1>
        <p>This feature is currently disabled.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-h1 font-bold mb-4">Grant Submission</h1>
      <div className="p-4 border border-light-surface dark:border-dark-surface rounded-lg bg-light-surface dark:bg-dark-surface">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{steps[currentStepIndex].title}</h2>
          <div>
            <Tooltip content="Go to the previous step">
              <button
                onClick={handlePrev}
                className="mr-2 px-4 py-2 rounded-full bg-light-background dark:bg-dark-background disabled:opacity-50"
                disabled={currentStepIndex === 0}
              >
                Previous
              </button>
            </Tooltip>
            <Tooltip content="Go to the next step">
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-full bg-accent-primary text-white disabled:opacity-50"
                disabled={currentStepIndex === steps.length - 1}
              >
                Next
              </button>
            </Tooltip>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GrantPage;
