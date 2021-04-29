import React from 'react';

const SecondaryButton = ({ onClick, text, low, className }) => {
  return (
    <span
      onClick={onClick}
      className={
        'px-4 text-secondary-500 cursor-pointer rounded-st bg-white border border-secondary-500 hover:shadow-cd transform hover:scale-105 transition duration-150 ease-in-out ' +
        (low ? 'py-2 ' : 'py-3 ') +
        className
      }
    >
      {text}
    </span>
  );
};

export default SecondaryButton;
