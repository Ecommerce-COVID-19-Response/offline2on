import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Merchants() {
  return (
    <Layout>
      <div className="py-16 bg-gray-100 sm:py-20 md:py-28">
        <div className="relative text-center">
          <h1 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            For Merchants
          </h1>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>

        <p className="max-w-xl px-6 mx-auto mt-16 text-center text-gray-500">
          Worldwide many ecommerce agencies have available capacity to help
          offline merchants get online fast or optimize existing sites.
          Depending on your budget, we catered a list of agencies based on your
          platform option.
        </p>

        <form
          name="Merchant Form"
          method="POST"
          data-netlify="true"
          action="/contact/thanks/"
          className="max-w-4xl px-6 py-8 mx-auto mt-24 bg-white shadow md:py-16 md:px-24 sm:rounded-md sm:overflow-hidden"
        >
          <div className="mb-8 text-center md:mb-16">
            <h2 className="text-2xl font-semibold text-gray-600">
              Business Information
            </h2>
            <p className="mx-8 mt-4 text-gray-500">
              In order to get you online as fast as possible, please send this
              form. We'll forward your request to the best matching contact for
              you.
            </p>
          </div>

          <Input id="name" label="Name" />

          <Input id="email" label="Email" type="email" />

          <Input id="phone" label="Phone" type="tel" />

          <Input id="business-name" label="Business Name" />

          <Input
            id="vertical"
            label="Business Description"
            hint="Tell us more about what you sell."
          />

          <Input id="url" label="Existing Website" />

          <Input
            id="can-ship"
            label="Do you currently ship?"
            inputType="select"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Input>

          <Input id="location" label="Where are you located?" />

          <Input id="budget" label="What's your budget?" inputType="select">
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
            <option value="probono">I need help or can't pay</option>
          </Input>

          <Input id="platform" label="Preferred Platform" inputType="select">
            <option value="none">I don't know</option>
            <option value="big_commerce">Big Commerce</option>
            <option value="magento">Magento</option>
            <option value="shopify">Shopify</option>
            <option value="other">Other</option>
          </Input>

          <Input
            id="help_needed"
            label="What do you need help with?"
            inputType="textarea"
          />

          <Input id="additional" label="Other Comment" inputType="textarea" />

          <div className="pt-5 mt-6 border-t border-gray-200 sm:mt-5">
            <div className="flex justify-end">
              <Button type="submit">Send</Button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
