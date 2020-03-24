import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby'

import existingSite from '../../img/getting-started/ico-exsitingsite.svg';
import restaurant from '../../img/getting-started/ico-restaurant.svg';
import retail from '../../img/getting-started/ico-retail.svg';
import wholesale from '../../img/getting-started/ico-wholesale.svg';
import newSite from '../../img/getting-started/ico-newsite.svg';

function AnswerButton({ children, onClick, isActive, className }) {
  return (
    <button
      onClick={onClick}
      className={classNames("flex items-center flex-1 px-4 py-4 border rounded shadow", className,
        isActive ? "bg-gray-200" : "transition-all duration-150 ease-in-out transform bg-white hover:scale-105 hover:shadow-lg hover:bg-gray-50")}
      type="button"
    >
      {children}
    </button>
  )
}

export default function GettingStarted() {
  const [businessType, setBusinessType] = useState(null);
  const [hasWebsite, setHasWebsite] = useState(null);

  return (
    <>
      <section id="getting-started" className="bg-gray-100">
        <div className="max-w-screen-md px-4 py-20 mx-auto text-lg md:py-24">
          <div className="border-b-2 border-gray-200">
            <div className="relative text-center">
              <h2 className="inline-block text-5xl font-bold text-gray-900">
                Getting Started
            </h2>
              <div
                className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
                style={{ transform: 'translate3D(-50%, 10px, 0)' }}
              />
            </div>
            <p className="max-w-md mx-auto my-8 text-base text-center text-gray-500 sm:text-lg md:text-xl md:max-w-2xl">
              Tell us a little bit about your business so we can redirect to the most relevant and helpful resources.
          </p>
          </div>
          <div className="mt-16">
            <p className="mb-10 text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 sm:leading-none">
              What type of business are you?
            </p>
            <div className="flex flex-col justify-between md:flex-row">
              <AnswerButton className="mb-4 md:mb-0 md:mr-4" onClick={() => setBusinessType('restaurant')} isActive={businessType === 'restaurant'}>
                <img className="w-12 mr-4" src={restaurant} alt="restaurant icon" />
                <p className="text-2xl font-bold">Restaurant</p>
              </AnswerButton>
              <AnswerButton className="mb-4 md:mb-0 md:mr-4" onClick={() => setBusinessType('retail')} isActive={businessType === 'retail'}>
                <img className="w-12 mr-4" src={retail} alt="retail icon" />
                <p className="text-2xl font-bold">Retailer</p>
              </AnswerButton>
              <AnswerButton className="mb-0 mr-0" onClick={() => setBusinessType('wholesale')} isActive={businessType === 'wholesale'}>
                <img className="w-12 mr-4" src={wholesale} alt="wholesale icon" />
                <p className="text-2xl font-bold">Wholesaler</p>
              </AnswerButton>
            </div>
          </div>
          {businessType && <div className="mt-24">
            <p className="mb-10 text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 sm:leading-none">
              What kind of help do you need?
            </p>
            <div className="flex flex-col justify-between md:flex-row">
              <AnswerButton className="mb-4 md:mb-0 md:mr-4" onClick={() => setHasWebsite(false)} isActive={hasWebsite != null && !hasWebsite}>
                <img className="w-12 mr-4" src={newSite} alt="new site icon" />
                <p className="text-2xl font-bold">Starting a Website</p>
              </AnswerButton>
              <AnswerButton className="mb-0 mr-0" onClick={() => setHasWebsite(true)} isActive={hasWebsite != null && hasWebsite}>
                <img className="w-12 mr-4" src={existingSite} alt="existing site icon" />
                <p className="text-2xl font-bold">Optimizing my Website</p>
              </AnswerButton>
            </div>
          </div>}
        </div>
      </section>

      {/* Result */}

      {businessType && hasWebsite != null && <section className="bg-white">
        <div className="max-w-screen-md px-4 py-20 mx-auto text-lg">
          <h2 className="max-w-2xl text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 md:text-5xl sm:leading-none">
            Great! Here are some helpful options to get you started.
          </h2>
          <div className="mt-16">
            <div className="flex items-start py-8 border-b-2 border-gray-200">
              <span className="inline-block px-5 py-1 mr-8 text-3xl font-bold text-white rounded" style={{ backgroundColor: '#575a89' }}>1</span>
              <div className="leading-none">
                <p className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:text-4xl">Local Delivery or Pickup Services</p>
                <p className="mb-4 text-gray-600">Find services available for you to offer</p>
                <Link className="text-orange-500 underline" to="/resources/local-delivery-services/">Learn More</Link>
              </div>
            </div>
            <div className="flex items-start py-8 border-b-2 border-gray-200">
              <span className="inline-block px-5 py-1 mr-8 text-3xl font-bold text-white rounded" style={{ backgroundColor: '#575a89' }}>2</span>
              <div className="leading-none">
                <p className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:text-4xl">Get Started With Your Own Website</p>
                <p className="mb-4 text-gray-600">Find eCommerce platforms for your business needs</p>
                <Link className="text-orange-500 underline" to="/resources/how-to-start-a-website/">Learn More</Link>
              </div>
            </div>
            <div className="flex items-start py-8">
              <span className="inline-block px-5 py-1 mr-8 text-3xl font-bold text-white rounded" style={{ backgroundColor: '#575a89' }}>3</span>
              <div className="leading-none">
                <p className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:text-4xl">Get in Contact With Agencies Who Can Help</p>
                <p className="mb-4 text-gray-600">Find help from eCommerce professionals worldwide</p>
                <Link className="text-orange-500 underline" to="/merchants/">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </>
  )
}