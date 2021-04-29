import React from 'react';

const CheckboxField = ({ isChecked, setChecked, label, className }) => {
  return (
    <div
      onClick={() => setChecked(!isChecked)}
      className={'cursor-pointer flex flex-row items-center ' + className}
    >
      <div
        className={
          'w-6 h-6 border rounded-lg transform hover:scale-105 transition duration-150 ease-in-out ' +
          (isChecked
            ? 'bg-primary-500 border-primary-500'
            : 'bg-white border-primary-300 hover:border-primary-500')
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-white"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <span className="ml-2 select-none text-primary-300">{label}</span>
    </div>
  );
};

export default CheckboxField;
