import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';
import { useAccordionKeys } from '../../hooks/useAccordionKeys';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  preview: string;
  children?: AccordionItem[];
}

interface AccordionGroupProps {
  items: AccordionItem[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const index = items.findIndex(item => item.id === hash);
      if (index !== -1) {
        setOpenId(hash);
        setSelectedIndex(index);
      }
    }
  }, [items]);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useAccordionKeys({
    itemCount: items.length,
    selectedIndex,
    onSelect: setSelectedIndex,
    onOpen: (index) => handleToggle(items[index].id),
  });

  return (
    <div className="border border-light-surface dark:border-dark-surface rounded-lg">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`outline-none ${
            selectedIndex === index ? 'ring-2 ring-accent-primary' : ''
          }`}
          tabIndex={0}
          onFocus={() => setSelectedIndex(index)}
        >
          <Accordion
            id={item.id}
            title={item.title}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
            preview={item.preview}
          >
            {item.content}
            {item.children && (
              <div className="pl-4 mt-4">
                <AccordionGroup items={item.children} />
              </div>
            )}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;