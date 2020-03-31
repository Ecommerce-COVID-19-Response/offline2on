import React from 'react';
import Layout from '../components/Layout';
import GettingStarted from '../components/HomePage/GettingStarted';
import { Link } from 'gatsby';

// import socialDistancing from '../img/social-distancing.svg';
// import global from '../img/global.svg';
import eCommerce from '../img/ecommerce.svg';
import icoForm from '../img/getting-started/ico-form.svg';
import icoSearch from '../img/getting-started/ico-search.svg';
import icoNewsite from '../img/getting-started/ico-newsite.svg';
import responsive from '../img/responsive.svg';
import growthAnalytics from '../img/growth-analytics.svg';
import mobileMarketing from '../img/mobile-marketing.svg';

export default function IndexPage() {
  return (
    <Layout>
      {/* Hero  */}
      <div className="flex flex-col px-4 mx-auto md:flex-row max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 mb-15 md:w-3/6">
          <div className="px-0 text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Get Your Business Online and Back to Work &mdash;{' '}
              <span className="relative inline-block">
                Fast
                <span className="absolute block w-full h-2 bg-orange-500 bottom--3"></span>
              </span>
            </h2>
            <p className="mt-5 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
              Many e-commerce agencies worldwide have available capacity to help
              business owners like you get a website set up quickly, or optimize
              their current online operations, fulfillment, and shipping. There
              is hope and we’re here to help!
            </p>
            <div className="max-w-md mt-5 sm:flex md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#getting-started"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-orange-500 border border-transparent rounded-md hover:text-white hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={eCommerce}
          className="md:ml-24 md:w-3/6"
          alt="eCommerce icon"
        />
      </div>

      {/* How It Works  */}
      <div className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-10 text-2xl font-bold text-gray-900 md:text-4xl">
          How It Works
        </h2>
      </div>
      <div className="flex flex-col px-4 mx-auto lg:flex-row lg:justify-between max-w-7xl sm:px-6 lg:px-10">
        <div className="flex flex-row items-start mb-8 hiw__item lg:w-1/3 lg:pr-10">
          <div>
            <img
              src={icoForm}
              className="max-w-sm mr-5"
              style={{ width: 50 + 'px', maxHeight: 50 + 'px' }}
              alt="form"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl">
              Contact Us
            </h3>
            <p>Tell us about your business and how we can help you.</p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-8 hiw__item lg:w-1/3 lg:px-5">
          <div>
            <img
              src={icoSearch}
              className="max-w-sm mr-5"
              style={{ maxWidth: 50 + 'px' }}
              alt="search icon"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl">
              Find a Match
            </h3>
            <p>
              We’ll connect you with agencies who are the right fit based on
              your needs and location
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-8 hiw__item lg:w-1/3 lg:pl-10">
          <div>
            <img
              src={icoNewsite}
              className="max-w-sm mr-5"
              style={{ maxWidth: 50 + 'px' }}
              alt="new site icon"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl">
              Identify Solutions
            </h3>
            <p>Get set up with your new or optimized website</p>
          </div>
        </div>
      </div>
      {/* Offering  */}
      <div className="py-20 mt-10 bg-gray-100">
        <div className="relative mb-20 text-center">
          <h2 className="inline-block text-4xl font-bold text-gray-900">
            What We're Offering
          </h2>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>
        <div className="flex flex-col px-4 mx-auto lg:items-start lg:flex-row lg:justify-between max-w-7xl sm:px-6 lg:px-10">
          <div className="flex flex-row justify-center w-full mb-20 hiw__item lg:items-start lg:w-1/3 lg:pr-10">
            <div>
              <div>
                <img
                  src={responsive}
                  className="mx-auto mb-10"
                  style={{ maxHeight: 185 + 'px' }}
                  alt="responsive icon"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                The Online Now Package
              </h3>
              <p className="mb-4 text-xs font-bold leading-tight">
                For businesses that don’t currently have an online store, we
                will pair you with an e-commerce expert who will:
              </p>
              <ul className="list-disc list-outside">
                <li className="mb-2">
                  Advise you on the best platform for your needs
                </li>
                <li className="mb-2">Help get your products online</li>
                <li className="mb-2">
                  Assist you in getting your new website live
                </li>
              </ul>
              <div className="flex flex-row items-end justify-between pt-2 mt-5 border-t border-gray-900">
                <div>
                  <p className="leading-none">Cost:</p>
                  <p className="text-2xl font-bold leading-none">FREE</p>
                </div>
                <div>
                  <Link
                    className="text-lg font-bold text-gray-900 underline"
                    to="/resources/packages"
                  >
                    More Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mb-20 hiw__item lg:items-start lg:w-1/3 lg:px-5">
            <div>
              <div>
                <img
                  src={growthAnalytics}
                  className="mx-auto mb-10"
                  style={{ maxHeight: 185 + 'px' }}
                  alt="analytics icon"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                The Store Audit Package
              </h3>
              <p className="mb-4 text-xs font-bold leading-tight">
                For businesses that have a website but need some support, we
                will pair you with an e-commerce expert who will:
              </p>
              <ul className="list-disc list-outside">
                <li className="mb-2">
                  Review your customer experience for possible improvements
                </li>
                <li className="mb-2">
                  Test your website speed and help you increase performance
                </li>
                <li className="mb-2">
                  Help set up optimized promotions and gift card sales
                </li>
              </ul>
              <div className="flex flex-row items-end justify-between pt-2 mt-5 border-t border-gray-900">
                <div>
                  <p className="leading-none">Cost:</p>
                  <p className="text-2xl font-bold leading-none">FREE</p>
                </div>
                <div>
                  <Link
                    className="text-lg font-bold text-gray-900 underline"
                    to="/resources/packages"
                  >
                    More Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center w-full hiw__item lg:items-start lg:w-1/3 lg:pl-10">
            <div>
              <div>
                <img
                  src={mobileMarketing}
                  className="mx-auto mb-10"
                  style={{ maxHeight: 185 + 'px' }}
                  alt="marketing icon"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                The Marketing Intro Package
              </h3>
              <p className="mb-4 text-xs font-bold leading-tight">
                For businesses that have a website but need help with marketing,
                we will pair you with an e-commerce expert who will:
              </p>
              <ul className="list-disc list-outside">
                <li className="mb-2">Review social media integrations</li>
                <li className="mb-2">
                  Go through your choice of organic traffic support or paid
                  traffic consultation
                </li>
                <li className="mb-2">
                  Make sure your website is optimized for search engines (SEO)
                </li>
                <li className="mb-2">
                  Discuss opportunities for paid advertising
                </li>
              </ul>
              <div className="flex flex-row items-end justify-between pt-2 mt-5 border-t border-gray-900">
                <div>
                  <p className="leading-none">Cost:</p>
                  <p className="text-2xl font-bold leading-none">FREE</p>
                </div>
                <div>
                  <Link
                    className="text-lg font-bold text-gray-900 underline"
                    to="/resources/packages"
                  >
                    More Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GettingStarted />
    </Layout>
  );
}
