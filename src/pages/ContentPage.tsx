import React, { useState } from 'react';
import AccordionGroup from '../components/specific/AccordionGroup';
import { useBookmarkStore } from '../store/bookmarkStore';

const accordionItems = [
  {
    id: 'section-1',
    title: 'Section 1',
    content: 'Full content for section 1.',
    preview: 'This is a preview for section 1.',
    children: [
      {
        id: 'section-1.1',
        title: 'Section 1.1',
        content: 'Full content for section 1.1.',
        preview: 'This is a preview for section 1.1.',
      },
      {
        id: 'section-1.2',
        title: 'Section 1.2',
        content: 'Full content for section 1.2.',
        preview: 'This is a preview for section 1.2.',
      },
    ],
  },
  {
    id: 'section-2',
    title: 'Section 2',
    content: 'Full content for section 2.',
    preview: 'This is a preview for section 2.',
  },
  {
    id: 'section-3',
    title: 'Section 3',
    content: 'Full content for section 3.',
    preview: 'This is a preview for section 3.',
  },
];

const ContentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { bookmarkedIds } = useBookmarkStore();

  const filteredItems = accordionItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bookmarkedItems = accordionItems.filter((item) => bookmarkedIds.includes(item.id));

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Dynamic Content Sections</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <AccordionGroup items={filteredItems} />

      {bookmarkedItems.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Bookmarked Sections</h2>
          <ul>
            {bookmarkedItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-500">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentPage;