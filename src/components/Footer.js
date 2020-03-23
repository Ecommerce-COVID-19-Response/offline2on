import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo2.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

export default function Footer() {
  return (
    <div class="bg-gray-800">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div id="footerLinks" class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h4>
                <ul class="mt-4">
                  <li>
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Marketing
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Analytics
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Commerce
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul class="mt-4">
                  <li>
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Documentation
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Guides
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul class="mt-4">
                  <li>
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Jobs
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Press
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul class="mt-4">
                  <li>
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Claim
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Privacy
                    </a>
                  </li>
                  <li class="mt-4">
                    <a
                      href="#"
                      class="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 xl:mt-0">
            <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Subscribe to our newsletter
            </h4>
            <p class="mt-4 text-gray-300 text-base leading-6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form class="mt-4 sm:flex sm:max-w-md">
              <input
                aria-label="Email address"
                type="email"
                required
                class="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                placeholder="Enter your email"
              />
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>        
          <p class="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Offline2on. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
