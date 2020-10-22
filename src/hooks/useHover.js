import { useRef, useState, useEffect } from 'react';

// Custom useHover hook
export default function useHover() {
  //useState to define if the element is hovered
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  //Functions to handle the event
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  });

  return [ref, value];
}
