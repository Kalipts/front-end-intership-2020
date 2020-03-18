import { useState, useRef, useEffect } from 'react';

export function useHover({ drag }) {
  const [value, setValue] = useState(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEffect(
    () => {
      const node = drag.current;

      if (node) {
        drag.current.addEventListener('mouseenter', handleMouseEnter);
        drag.current.addEventListener('mouseleave', handleMouseLeave);
        return () => {
          drag.current.removeEventListener('mouseenter', handleMouseEnter);
          drag.current.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    },
    [drag.current], // Recall only if ref changes
  );

  return [drag, value];
}
