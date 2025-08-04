import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Dashboard from '../components/specific/Dashboard';
import PresetTemplates from '../components/specific/PresetTemplates';
import usePersistentState from '../hooks/usePersistentState';

const initialItems = [
  { id: '1', title: 'Widget 1', content: 'Content for widget 1.', className: 'lg:col-span-2' },
  { id: '2', title: 'Widget 2', content: 'Content for widget 2.' },
  { id: '3', title: 'Widget 3', content: 'Content for widget 3.' },
  { id: '4', title: 'Widget 4', content: 'Content for widget 4.', className: 'lg:col-span-4' },
];

const templates = [
  { id: '1', name: 'Default', layout: initialItems },
  {
    id: '2',
    name: 'Template 2',
    layout: [
      { id: '1', title: 'Widget A', content: 'Content for widget A.' },
      { id: '2', title: 'Widget B', content: 'Content for widget B.', className: 'lg:col-span-3' },
      { id: '3', title: 'Widget C', content: 'Content for widget C.', className: 'lg:col-span-4' },
    ],
  },
];

const DashboardPage: React.FC = () => {
  const [items, setItems] = usePersistentState('dashboard-widgets', initialItems);

  const handleSelectTemplate = (template: any) => {
    setItems(template.layout);
  };

  return (
    <DashboardLayout>
      <div className="mb-4">
        <PresetTemplates templates={templates} onSelect={handleSelectTemplate} />
      </div>
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;