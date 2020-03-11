import { useState, useRef, useEffect } from 'react';

export function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
        return () => {
          node.removeEventListener('mouseenter', handleMouseEnter);
          node.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    },
    [ref.current], // Recall only if ref changes
  );

  return [ref, value];
}
