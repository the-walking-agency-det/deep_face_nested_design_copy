import { useEffect } from 'react';

interface UseAccordionKeysProps {
  itemCount: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
  onOpen: (index: number) => void;
}

export const useAccordionKeys = ({
  itemCount,
  selectedIndex,
  onSelect,
  onOpen,
}: UseAccordionKeysProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          onSelect(Math.min(selectedIndex + 1, itemCount - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          onSelect(Math.max(selectedIndex - 1, 0));
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          onOpen(selectedIndex);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [itemCount, selectedIndex, onSelect, onOpen]);
};