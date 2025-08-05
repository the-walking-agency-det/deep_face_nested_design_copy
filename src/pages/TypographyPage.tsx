import React from 'react';
import ReadingMode from '../components/common/ReadingMode';
import Truncate from '../components/common/Truncate';

const longText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam.
`;

const TypographyPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <ReadingMode>
        <h1 className="text-h1 font-bold mb-4">Adaptive Typography</h1>
        <p className="fluid-text mb-4">
          This text is fluid. It will grow and shrink with the viewport, but reading mode will constrain its width for optimal readability.
        </p>
        <h2 className="text-h2 font-bold mb-4">Text Truncation</h2>
        <Truncate lines={3}>{longText}</Truncate>
        <h2 className="text-h2 font-bold mt-8 mb-4">The Quick Brown Fox</h2>
        <p>
          {longText}
        </p>
      </ReadingMode>
    </div>
  );
};

export default TypographyPage;