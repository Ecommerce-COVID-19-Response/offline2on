import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import classNames from 'classnames';
import offline2onLogo from '../img/Offline2On-Logo-FC.svg';


function NavLink({ className, to, isActive, children }) {
  return (
    <Link
      to={to}
      className={classNames(
        'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-orange-700',
        isActive && 'text-gray-900 border-b-2 border-orange-500',
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between flex-1 sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <div className="w-24">
                  <img src={offline2onLogo} className="header-logo" alt="Offline2On" />
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <NavLink to="/about" isActive={location.pathname === '/about'}>
                About
              </NavLink>
              <NavLink
                to="/merchants"
                isActive={location.pathname === '/merchants'}
                className="ml-8"
              >
                For Merchants
              </NavLink>
              <NavLink
                to="/agencies"
                isActive={location.pathname === '/agencies'}
                className="ml-8"
              >
                For Agencies
              </NavLink>
              <NavLink
                to="/directory"
                isActive={location.pathname === '/directory'}
                className="ml-8"
              >
                Directory
              </NavLink>
            </div>
            <div className="flex items-center -mr-2 sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className="hidden"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center -mr-2 sm:hidden"></div>
        </div>
      </div>
      <div className={classNames('', isOpen ? 'block' : 'hidden')}>
        <div className="pt-2 pb-3">
          <a
            href="/about"
            className="block py-2 pl-3 pr-4 text-base font-medium text-orange-700 transition duration-150 ease-in-out border-l-4 border-orange-500 bg-orange-50 focus:outline-none focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700"
          >
            About
          </a>
          <a
            href="/merchants"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >
            For Merchants
          </a>
          <a
            href="/agencies"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >
            For Agencies
          </a>
          <a
            href="/directory"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >
            Directory
          </a>
        </div>
      </div>
    </nav>
  );
}
