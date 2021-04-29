import React from 'react';

const ErrorMessage = ({ active, message }) => {
  return active ? (
    <span className="absolute mt-1 ml-4 text-xs text-red-500">{message}</span>
  ) : (
    ''
  );
};

export default ErrorMessage;
