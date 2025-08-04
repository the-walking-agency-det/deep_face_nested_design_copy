import React from 'react';

const TypographyPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-h1 font-bold mb-4">Adaptive Typography</h1>
      <h2 className="text-h2 font-bold mb-4">Heading 2</h2>
      <h3 className="text-h3 font-bold mb-4">Heading 3</h3>
      <h4 className="text-h4 font-bold mb-4">Heading 4</h4>
      <h5 className="text-h5 font-bold mb-4">Heading 5</h5>
      <h6 className="text-h6 font-bold mb-4">Heading 6</h6>
      <p className="fluid-text">
        This text is fluid. It will grow and shrink with the viewport.
      </p>
    </div>
  );
};

export default TypographyPage;