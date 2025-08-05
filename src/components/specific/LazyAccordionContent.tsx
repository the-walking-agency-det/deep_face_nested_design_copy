import React, { useState, useEffect, useRef } from 'react';

interface LazyAccordionContentProps {
  children: React.ReactNode;
}

const LazyAccordionContent: React.FC<LazyAccordionContentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px 200px 0px', // Pre-load when 200px away from viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref}>{isVisible ? children : <div className="h-24" />}</div>;
};

export default LazyAccordionContent;