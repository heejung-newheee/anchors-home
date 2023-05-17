import React from 'react';

export const usePrevious = value => {
  const oldValue = React.useRef();
  React.useEffect(() => {
    oldValue.current = value;
  }, [value]);
  return oldValue.current;
};
