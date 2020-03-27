import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import useOnclickOutside from 'react-cool-onclickoutside';
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

function MobileNavLink({ className, to, isActive, children, style }) {
  return (
    <Link
      to={to}
      className={classNames(
        'block py-2 px-3 text-base font-medium leading-5 border-l-4 border-transparent transition duration-150 ease-in-out hover:bg-gray-100',
        isActive &&
          'text-orange-700 border-orange-500 bg-orange-50 focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700',
        !isActive && 'text-gray-700 focus:outline-none focus:bg-gray-100',
        className
      )}
      style={style}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);

  const resourceRef = React.useRef();
  const menuButtonRef = React.useRef();
  useOnclickOutside([resourceRef, menuButtonRef], () => {
    setIsResourcesOpen(false);
  });

  const animatedStyle = useSpring({
    transform: isResourcesOpen ? 'scale(1)' : 'scale(0)',
    opacity: isResourcesOpen ? 1 : 0,
    config: { mass: 1, tension: 180, friction: 20 }
  });

  return (
    <nav className="bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between flex-1 sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <div className="w-24">
                  <img
                    src={offline2onLogo}
                    className="header-logo"
                    alt="Offline2On"
                  />
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <NavLink to="/about" isActive={location.pathname === '/about'}>
                About
              </NavLink>
              <NavLink
                to="/resources/frequently-asked-questions"
                isActive={
                  location.pathname === '/resources/frequently-asked-questions'
                }
                className="ml-8"
              >
                FAQ
              </NavLink>
              <NavLink
                to="/merchants"
                isActive={location.pathname === '/merchants'}
                className="ml-8"
              >
                For Businesses 
              </NavLink>
              <NavLink
                to="/agencies"
                isActive={location.pathname === '/agencies'}
                className="ml-8"
              >
                For Agencies
              </NavLink>

              <div className="relative">
                <button
                  ref={menuButtonRef}
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="inline-flex items-center h-full px-1 pt-1 ml-8 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-orange-700"
                >
                  Resources
                </button>

                <animated.div
                  style={animatedStyle}
                  className="absolute right-0 z-50 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                  aria-hidden={JSON.stringify(!isResourcesOpen)}
                >
                  <div
                    className="py-1 bg-white rounded-md shadow-xs"
                    ref={resourceRef}
                  >
                    {/* <Link
                      to="/directory"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      Agency Directory
                    </Link> */}
                    <Link
                      to="/resources/local-delivery-services"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      Food Delivery Services
                    </Link>
                    <Link
                      to="/resources/product-marketplaces"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      Marketplaces
                    </Link>
                    <Link
                      to="/resources/ecommerce-platforms"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      Ecommerce Platforms
                    </Link>
                    {/* <Link
                      to="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      Shipping & Logistics
                    </Link> */}
                    <Link
                      to="/resources/marketing-advertising"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      Advertising & Marketing
                    </Link>
                    {/* <Link
                      to="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      style={{ marginBottom: 0 }}
                      tabIndex={isResourcesOpen ? '0' : '-1'}
                    >
                      B2B
                    </Link> */}
                  </div>
                </animated.div>
              </div>
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
          <MobileNavLink
            to="/about"
            style={{ marginBottom: 0 }}
            isActive={location.pathname === '/about'}
          >
            About
          </MobileNavLink>
          <MobileNavLink
            to="/resources/frequently-asked-questions"
            style={{ marginBottom: 0 }}
            className="mt-1"
            isActive={
              location.pathname === '/resources/frequently-asked-questions'
            }
          >
            FAQ
          </MobileNavLink>
          <MobileNavLink
            to="/merchants"
            style={{ marginBottom: 0 }}
            className="mt-1"
            isActive={location.pathname === '/merchants'}
          >
            For Merchants
          </MobileNavLink>
          <MobileNavLink
            to="/agencies"
            style={{ marginBottom: 0 }}
            className="mt-1"
            isActive={location.pathname === '/agencies'}
          >
            For Agencies
          </MobileNavLink>
          <div
            to="/"
            className="block px-3 py-2 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
            style={{ marginBottom: 0 }}
          >
            Resources
            <div>
              {/* <Link
                to="/"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                Agency Directory
              </Link> */}
              <Link
                to="/resources/local-delivery-services"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                Food Delivery Services
              </Link>
              <Link
                to="/resources/product-marketplaces"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                Marketplaces
              </Link>
              <Link
                to="/resources/ecommerce-platforms"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                Ecommerce Platforms
              </Link>
              {/* <Link
                to="/"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                Shipping & Logistics
              </Link> */}
              <Link
                to="/resources/marketing-advertising"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                Advertising & Marketing
              </Link>
              {/* <Link
                to="/"
                className="block px-2 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                style={{ marginBottom: 0 }}
                tabIndex={isResourcesOpen ? '0' : '-1'}
              >
                B2B
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
