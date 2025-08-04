import React from 'react';
import MultiStepForm from '../components/specific/MultiStepForm';

const FormPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Progressive Disclosure</h1>
      <MultiStepForm />
    </div>
  );
};

export default FormPage;