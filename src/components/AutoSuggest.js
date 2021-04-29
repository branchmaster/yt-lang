import React, { useState, useRef } from 'react';
import { Field } from 'formik';

const getSuggestions = (options, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? options
    : options.filter(
        (option) => option.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const AutoSuggest = ({
  id,
  name,
  value,
  hasError,
  availableOptions,
  formik,
}) => {
  const [isActive, setIsActive] = useState(false);
  const { setFieldTouched, setFieldValue } = formik;
  const node = useRef();

  const handleFocus = () => {
    setFieldTouched(name, true);
    setIsActive(true);
  };

  const handleBlur = async () => {
    setTimeout(() => setIsActive(false), 150);
  };

  const setItem = (name, item) => {
    setFieldValue(name, item);
    setIsActive(false);
  };

  return (
    <div className="relative">
      <Field
        id={id}
        name={name}
        value={value}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        autoComplete="off"
        className={
          'block w-full py-2 pl-4 pr-3 bg-white outline-none text-primary-500 placeholder-primary-100 ' +
          (isActive
            ? 'border border-primary-400 ' +
              (getSuggestions(availableOptions, value).length
                ? 'rounded-t-st '
                : 'rounded-st ')
            : 'border rounded-st ' +
              (hasError ? 'border-red-500 ' : 'border-gray-100 '))
        }
      />
      <div ref={node}>
        {isActive && getSuggestions(availableOptions, value).length ? (
          <div className="absolute left-auto right-auto z-50 w-full p-3 overflow-y-auto bg-white border-b border-l border-r border-transparent max-h-64 shadow-cd rounded-b-st">
            {getSuggestions(availableOptions, value).map((item) => (
              <span
                key={item}
                onClick={() => setItem(name, item)}
                className="block px-3 py-2 cursor-pointer text-primary-500 hover:bg-gray-100 rounded-mp"
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AutoSuggest;
