import React from 'react';
import existingSite from '../../img/getting-started/ico-exsitingsite.svg';
import restaurant from '../../img/getting-started/ico-restaurant.svg';
import retail from '../../img/getting-started/ico-retail.svg';
import wholesale from '../../img/getting-started/ico-wholesale.svg';
import newSite from '../../img/getting-started/ico-newsite.svg';

export default function GettingStarted() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-md px-4 py-24 mx-auto text-lg">
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
        <hr className="bg-gray-200" />
        <p className="mb-4 text-4xl font-semibold leading-10 tracking-tight text-gray-900 sm:leading-none">I am a...</p>
        <button className="flex items-center w-full px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
          <img className="w-12 mr-4" className="w-12 mr-4" src={restaurant} alt="restaurant icon" />
          <p className="text-xl font-bold">Restaurant, cafe, or bar</p>
        </button>
        <button className="flex items-center w-full px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
          <img className="w-12 mr-4" src={retail} alt="retail icon" />
          <p className="text-xl font-bold">Retailer of goods or services</p>
        </button>
        <button className="flex items-center w-full px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
          <img className="w-12 mr-4" src={wholesale} alt="wholesale icon" />
          <p className="text-xl font-bold">Wholesaler or manufacturer</p>
        </button>
        <p className="mt-8 mb-4 text-4xl font-semibold leading-10 tracking-tight text-gray-900 sm:leading-none">And...</p>
        <button className="flex items-center w-full px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
          <img className="w-12 mr-4" src={newSite} alt="new site icon" />
          <p className="text-xl font-bold">I Need a Website</p>
        </button>
        <button className="flex items-center w-full px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
          <img className="w-12 mr-4" src={existingSite} alt="existing site icon" />
          <p className="text-xl font-bold">I Have a Website</p>
        </button>
      </div>
    </div>
  )
}