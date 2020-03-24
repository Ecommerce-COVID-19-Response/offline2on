import React from 'react';
import Layout from '../components/Layout';
import GettingStarted from '../components/HomePage/GettingStarted';

import socialDistancing from '../img/social-distancing.svg';
import global from '../img/global.svg';
import eCommerce from '../img/ecommerce.svg';

export default function IndexPage() {
  return (
    <Layout>
      {/* Hero  */}
      <div className="bg-gray-100">
        <div className="max-w-screen-lg px-4 py-10 mx-auto sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Get Your Business Online and Back to Work - Fast
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Offline2on.com is a community-led, cross platform
              initiative to support businesses in ramping up their e-commerce
              efforts in the wake of COVID-19 by connecting merchants with the
              resources, developers, platforms, and partners they need to take
              action.
            </p>
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
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
              The unfolding global coronavirus (COVID-19) pandemic is reshaping
              life and business around the world.
            </p>
            <p>
              Small and mid-sized companies are bearing the brunt of the
              necessary containment measures. The fear of losing traffic and revenue,
			  making payroll, and of keeping the lights on is apparent.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 md:flex-row">
          <img src={global} className="md:mr-24 w-96" alt="global trade icon" />
          <div className="px-0 mt-12 text-right md:mt-0 sm:px-12 md:px-0">
            <p className="mb-4">
              Unprecedented times call for unprecedented measures.
            </p>
            <p>
             We are a global commerce community initiative — spanning organizations with
			 expertise across all aspects of commerce — all focused on helping
			 companies navigate these difficult times.
            </p>
			<p>
			Our goal is to provide support for merchants to keep their business running
			using e-commerce platforms and expert advice. Merchants will be able to access
			designers, solution integrators, developers, and more.
			</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 md:flex-row-reverse">
          <img src={eCommerce} className="md:ml-24 w-96" alt="eCommerce icon" />
          <div className="px-0 mt-12 md:mt-0 sm:px-12 md:px-0">
            Whether you’re looking for a simple guide for getting you started
            selling online within the week or resources to optimize your site
            for ecommerce sales, fulfillment and shipping there are sources to
            help.
          </div>
        </div>
      </div>
      <GettingStarted />
    </Layout>
  );
}
