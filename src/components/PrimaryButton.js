import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const PrimaryButton = ({
  onClick,
  text,
  low,
  className,
  inactive,
  loading,
  icon,
  disableScale,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'inline-flex select-none flex-row items-center justify-center px-4 rounded-st ' +
        (low ? 'py-2 ' : 'py-3 ') +
        (inactive || loading
          ? ' '
          : 'cursor-pointer bg-secondary-500 hover:shadow-cd ') +
        (inactive ? 'bg-primary-200 ' : ' ') +
        (loading ? 'bg-secondary-300 ' : ' ') +
        (!inactive && !loading
          ? disableScale
            ? ''
            : 'transform transition duration-150 ease-in-out hover:scale-105 '
          : ' ') +
        className
      }
    >
      {loading ? (
        <div className="absolute">
          <HashLoader
            className="absolute"
            color={'#ffffff'}
            loading={true}
            size={20}
          />
        </div>
      ) : (
        ''
      )}
      <div
        className={
          'flex items-center ' + (loading ? 'text-transparent' : 'text-white')
        }
      >
        {icon ? icon : ''}
        {text}
      </div>
    </button>
  );
};

export default PrimaryButton;
