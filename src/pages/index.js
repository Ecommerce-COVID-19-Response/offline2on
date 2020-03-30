import React from 'react';
import Layout from '../components/Layout';
import GettingStarted from '../components/HomePage/GettingStarted';

import socialDistancing from '../img/social-distancing.svg';
import global from '../img/global.svg';
import eCommerce from '../img/ecommerce.svg';
import icoForm from '../img/getting-started/ico-form.svg';
import icoSearch from '../img/getting-started/ico-search.svg';
import icoNewsite from '../img/getting-started/ico-newsite.svg';

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
           <h3 className="text-xl font-bold text-gray-900 leading-tight md:text-2xl">Sign Up</h3>
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

      {/* Mission */}
      <div className="max-w-screen-lg px-4 mx-auto my-32 text-lg">
        <div className="relative text-center">
          <h2 className="inline-block text-5xl font-bold text-gray-900">
            Missions
          </h2>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>

        <div className="flex flex-col items-center mt-24 md:flex-row-reverse">
          <img src={socialDistancing} className="md:ml-24 w-96" alt="social distancing icon" />
          <div className="px-0 mt-12 md:mt-0 sm:px-12 md:px-0">
            <p className="mb-4">
              The unfolding global coronavirus (COVID-19) pandemic is reshaping life and business around the world.
            </p>
            <p>
              Small- and mid-sized companies are bearing the brunt of the worldwide containment measures. The fear of
              losing traffic and revenue, making payroll, and of keeping the lights on is apparent.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 md:flex-row">
          <img src={global} className="md:mr-24 w-96" alt="global trade icon" />
          <div className="px-0 mt-12 text-right md:mt-0 sm:px-12 md:px-0">
            <p className="mb-4">
              Unprecedented times call for unprecedented measures.
            </p>
            <p className="mb-4">
             We are a global commerce community initiative &mdash; spanning organizations with expertise across all
              aspects of commerce &mdash; all focused on helping companies navigate these difficult times.
            </p>
			<p>
			  Our goal is to provide support for merchants to keep their business running using e-commerce platforms
              and expert advice. Merchants will be able to access designers, solution integrators, developers, and more.
			</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 md:flex-row-reverse">
          <img src={eCommerce} className="md:ml-24 w-96" alt="eCommerce icon" />
          <div className="px-0 mt-12 md:mt-0 sm:px-12 md:px-0">
           Whether you’re looking for a simple guide to get you started selling online as quickly as possible, or you
            require resources to optimize your site for e-commerce sales, fulfillment, and shipping, you will find
            what you need.
          </div>
        </div>
      </div>
      <GettingStarted />
    </Layout>
  );
}
