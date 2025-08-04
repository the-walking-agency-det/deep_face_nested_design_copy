import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';

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

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenId(hash);
    }
  }, []);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
      {items.map((item) => (
        <Accordion
          key={item.id}
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
      ))}
    </div>
  );
};

export default AccordionGroup;