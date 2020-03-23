import React from 'react';
import classNames from 'classnames';

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={classNames(
        'inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-orange-500 border border-transparent rounded-md hover:bg-orange-500 focus:outline-none focus:border-orange-600 focus:shadow-outline-orange active:bg-orange-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
