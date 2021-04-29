import React from 'react';
import Transition from '../utils/Transition';

const Dropdown = ({ isDropdownOpen, options }) => {
  return (
    <Transition
      show={isDropdownOpen}
      enter="transition ease-out duration-200 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-100 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute px-4 py-4 bg-white shadow-xl rounded-xl">
        {options.map((option) => (
          <span
            key={option.label}
            onClick={option.onClick}
            className="block px-3 py-2 cursor-pointer rounded-st text-primary-500 hover:bg-gray-100"
          >
            {option.label}
          </span>
        ))}
      </div>
    </Transition>
  );
};
export default Dropdown;
