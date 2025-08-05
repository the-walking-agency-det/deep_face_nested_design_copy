import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
}

const initialItems: ChecklistItem[] = [
  { id: '1', label: 'Artwork', completed: false },
  { id: '2', label: 'Mastering', completed: false },
  { id: '3', label: 'Distribution', completed: true },
];

const Checklist: React.FC = () => {
  const [items, setItems] = useState(initialItems);

  const handleToggle = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="p-4 bg-light-surface dark:bg-dark-surface rounded-lg">
      <h2 className="text-h2 font-bold mb-4">Release Checklist</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
              className="mr-2"
            />
            <span className={item.completed ? 'line-through' : ''}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;