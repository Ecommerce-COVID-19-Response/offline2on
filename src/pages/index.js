import React from 'react';
import Layout from '../components/Layout';
import GettingStarted from '../components/HomePage/GettingStarted';

import socialDistancing from '../img/social-distancing.svg';
import global from '../img/global.svg';
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
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 mb-15 md:w-3/6">
          <div className="text-left px-0">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Get Your Business Online and Back to Work &mdash; <span className="relative inline-block">Fast<span className="absolute h-2 w-full block bottom--3 bg-orange-500"></span></span>
            </h2>
            <p className="mt-5 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
              Many e-commerce agencies worldwide have available capacity to help business owners like you get a website set up quickly, or optimize their current online operations, fulfillment, and shipping. There is hope and we’re here to help!
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
        <img src={eCommerce} className="md:ml-24 md:w-3/6" alt="eCommerce icon" />
      </div>
        
      {/* How It Works  */}
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-2xl mb-10 text-gray-900 md:text-4xl">How It Works</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
       <div className="hiw__item mb-8 flex flex-row items-start lg:w-1/3 lg:pr-10">
         <img src={icoForm} className="max-w-sm mr-5" style={{width: 50 + "px", maxHeight: 50 + "px"}} />
         <div>
           <h3 className="text-xl font-bold text-gray-900 leading-tight md:text-2xl">Contact Us</h3>
           <p>Tell us about your business and how we can help you.</p>
         </div>
       </div>
       <div className="hiw__item mb-8 flex flex-row items-start lg:w-1/3 lg:px-5">
         <img src={icoSearch} className="max-w-sm mr-5" style={{maxWidth: 50 + "px"}} />
         <div>
           <h3 className="text-xl font-bold text-gray-900 leading-tight md:text-2xl">Find a Match</h3>
           <p>We’ll connect you with agencies who are the right fit based on your needs and location</p>
         </div>
       </div>
       <div className="hiw__item mb-8 flex flex-row items-start lg:w-1/3 lg:pl-10">
         <img src={icoNewsite} className="max-w-sm mr-5" style={{maxWidth: 50 + "px"}} />
         <div>
           <h3 className="text-xl font-bold text-gray-900 leading-tight md:text-2xl">Identify Solutions</h3>
           <p>Get set up with your new or optimized website</p>
         </div>
       </div>
      </div>
    {/* Offering  */}
    <div className="bg-gray-100 py-20 mt-10">
      <div className="relative text-center mb-20">
        <h2 className="inline-block text-4xl font-bold text-gray-900">
          What We're Offering
        </h2>
        <div
          className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
          style={{ transform: 'translate3D(-50%, 10px, 0)' }}
        />
      </div>
      <div className="flex flex-col lg:items-start lg:flex-row lg:justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
       <div className="hiw__item mb-20 flex flex-row justify-center lg:items-start w-full lg:w-1/3 lg:pr-10">
         <div>
          <img src={responsive} className="mb-10" style={{maxHeight: 185 + "px"}} />
          <h3 className="text-xl mb-1 font-bold text-gray-900 leading-tight md:text-2xl">The Online Now Package</h3>
          <p className="leading-tight mb-4 text-xs font-bold">For businesses that don’t currently have an online store, we will pair you with an e-commerce expert who will:</p>
          <ul className="list-disc list-outside">
            <li className="mb-2">Advise you on the best platform for your needs</li>
            <li className="mb-2">Help get your products online</li>
            <li className="mb-2">Assist you in getting your new website live</li>
          </ul>
          <div className="mt-5 pt-2 border-t border-gray-900 flex flex-row justify-between items-end">
            <div>
              <p className="leading-none">Cost:</p>
              <p className="text-2xl font-bold leading-none">FREE</p>
            </div>
            <div>
              <a className="text-lg underline font-bold text-gray-900" href="/resources/packages">More Information</a>
            </div>
          </div>
        </div>
       </div>
       <div className="hiw__item mb-20 flex flex-row justify-center lg:items-start w-full lg:w-1/3 lg:px-5">
         <div>
          <img src={growthAnalytics} className="mb-10" style={{maxHeight: 185 + "px"}} />
          <h3 className="text-xl mb-1 font-bold text-gray-900 leading-tight md:text-2xl">The Store Audit Package</h3>
          <p className="leading-tight mb-4 text-xs font-bold">For businesses that have a website but need some support, we will pair you with an e-commerce expert who will:</p>
          <ul className="list-disc list-outside">
            <li className="mb-2">Review your customer experience for possible improvements</li>
            <li className="mb-2">Test your website speed and help you increase performance</li>
            <li className="mb-2">Help set up optimized promotions and gift card sales</li>
          </ul>
          <div className="mt-5 pt-2 border-t border-gray-900 flex flex-row justify-between items-end">
            <div>
              <p className="leading-none">Cost:</p>
              <p className="text-2xl font-bold leading-none">FREE</p>
            </div>
            <div>
              <a className="text-lg underline font-bold text-gray-900" href="/resources/packages">More Information</a>
            </div>
          </div>
        </div>
       </div>
       <div className="hiw__item flex flex-row justify-center lg:items-start w-full items-start lg:w-1/3 lg:pl-10">
         <div>
          <img src={mobileMarketing} className="mb-10" style={{maxHeight: 185 + "px"}}/>
          <h3 className="text-xl mb-1 font-bold text-gray-900 leading-tight md:text-2xl">The Marketing Intro Package</h3>
          <p className="leading-tight mb-4 text-xs font-bold">For businesses that have a website but need help with marketing, we will pair you with an e-commerce expert who will:</p>
          <ul className="list-disc list-outside">
            <li className="mb-2">Review social media integrations</li>
            <li className="mb-2">Go through your choice of organic traffic support or paid traffic consultation</li>
            <li className="mb-2">Make sure your website is optimized for search engines (SEO)</li>
            <li className="mb-2">Discuss opportunities for paid advertising</li>
          </ul>
          <div className="mt-5 pt-2 border-t border-gray-900 flex flex-row justify-between items-end">
            <div>
              <p className="leading-none">Cost:</p>
              <p className="text-2xl font-bold leading-none">FREE</p>
            </div>
            <div>
              <a className="text-lg underline font-bold text-gray-900" href="/resources/packages">More Information</a>
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
