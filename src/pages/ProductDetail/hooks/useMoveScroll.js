import { useRef } from 'react';

function useMoveScroll(name) {
  const element = useRef();
  const onMoveElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveElement, name };
}

export default useMoveScroll;
