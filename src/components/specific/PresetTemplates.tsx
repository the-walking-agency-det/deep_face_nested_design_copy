import React from 'react';

interface PresetTemplate {
  id: string;
  name: string;
  layout: any[]; // You can define a more specific type for the layout
}

interface PresetTemplatesProps {
  templates: PresetTemplate[];
  onSelect: (template: PresetTemplate) => void;
}

const PresetTemplates: React.FC<PresetTemplatesProps> = ({ templates, onSelect }) => {
  return (
    <div className="flex space-x-2">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelect(template)}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {template.name}
        </button>
      ))}
    </div>
  );
};

export default PresetTemplates;