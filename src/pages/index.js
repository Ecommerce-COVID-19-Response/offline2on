import React, {useState} from 'react';
import Layout from '../components/Layout';
import GettingStarted from '../components/HomePage/GettingStarted';
import { Link } from 'gatsby';
import ModalVideo from 'react-modal-video'

// import socialDistancing from '../img/social-distancing.svg';
// import global from '../img/global.svg';
import eCommerce from '../img/ecommerce.svg';
import homeVideo from '../img/home-video.jpg';
import icoForm from '../img/getting-started/ico-form.svg';
import icoSearch from '../img/getting-started/ico-search.svg';
import icoNewsite from '../img/getting-started/ico-newsite.svg';
import responsive from '../img/responsive.svg';
import growthAnalytics from '../img/growth-analytics.svg';
import mobileMarketing from '../img/mobile-marketing.svg';

export default function IndexPage() {
  const [isOpen, setIsOpen] = useState(false)

  function openModal () {
    setIsOpen(true)
  }
  
  function closeModal() {
    setIsOpen(false)
  }
  
  return (
    <Layout>
    <style>
    </style>
    <div>
      <ModalVideo channel='vimeo' isOpen={isOpen} videoId='402705931' onClose={closeModal} />
    </div>
      {/* Hero  */}
      <div className="flex flex-col px-4 mx-auto md:flex-row max-w-7xl sm:px-6 lg:px-8 items-center">
        <div className="py-10 mb-15 md:w-3/6">
          <div className="px-0 text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
            Get Your Business Onlin and Back to Work with Our  
              <span className="relative inline-block pl-3">
                 Resources
                <span className="absolute block w-full h-2 bg-orange-500 bottom--3"></span>
              </span>
            </h2>
            <p className="mt-5 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
            The Offline2On Initiative has served the e-commerce community well and united nearly 1,400 e-commerce professionals in order to help small to medium-sized businesses get online fast, as a result of the COVID-19 Pandemic. 
            </p>
          </div>
          <div className="mt-10">
          <p className="mt-5 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
          We would like to sincerely <strong>THANK</strong> all of our dedicated volunteers for their time and passion to help! </p>
          <p className="mt-5 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
      Starting today, O2O is transforming into a resource center for small businesses. We also recommend you visit <a href="https://keepsmallstrong.org/">Keep Small Strong</a> for additional and immediate support.
      </p>        
      <p className="mt-5 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl">
            Please visit our <a href="https://medium.com/offline2on">Medium</a> for helpful blog posts about getting your business online.
      </p>   
          </div>
        </div>
        <div className="md:ml-24 md:w-3/6">
          <button onClick={openModal}>
              <img src={homeVideo} alt="eCommerce icon" />
          </button>    
        </div>
      </div>
      <div className="flex flex-col px-4 mx-auto mt-0 md:flex-row max-w-7xl sm:px-6 lg:px-8 items-center">
         
      </div>
    </Layout>
  );
}
