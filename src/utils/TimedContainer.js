import React, { useEffect, useRef } from 'react';

const TimedContainer = ({ children, isOpen, onTimeout, timeout }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (isOpen) {
        onTimeout(false);
      }
    }, timeout);
  }, [isOpen, onTimeout, timeout]);

  return isOpen ? <div>{children}</div> : '';
};

export default TimedContainer;
