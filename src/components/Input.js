import React from 'react';

export default function Input({
  id,
  label,
  inputType = 'input',
  hint = null,
  ...props
}) {
  return (
    <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:pt-5 sm:border-gray-200">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
        style={{ marginBottom: 0 }} // override style affected by a Sass mixin
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        {inputType === 'input' ? (
          <input
            id={id}
            name={id}
            className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
            style={{ marginBottom: 0 }} // override style affected by a Sass mixin
            placeholder={props.required ? 'Required' : ''}
            {...props}
          />
        ) : inputType === 'textarea' ? (
          <textarea
            id={id}
            rows={3}
            name={id}
            className="block w-full transition duration-150 ease-in-out form-textarea form-input sm:text-sm sm:leading-5"
            style={{ marginBottom: 0 }} // override style affected by a Sass mixin
            placeholder={props.required ? 'Required' : ''}
            {...props}
          />
        ) : inputType === 'select' ? (
          <select
            id={id}
            name={id}
            className="block w-full transition duration-150 ease-in-out form-select form-input sm:text-sm sm:leading-5"
            style={{ marginBottom: 0 }} // override style affected by a Sass mixin
            {...props}
          />
        ) : null}

        {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
      </div>
    </div>
  );
}
