import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from 'react-select';

const expertise_options = [
  { value: 'Website Design', label: 'Website Design'},
  { value: 'Custom Development and Support', label: 'Custom Development and Support'},
  { value: 'Shipping and Logistics', label: 'Shipping and Logistics'},
  { value: 'Marketing and Advertising', label: 'Marketing and Advertising'},
  { value: 'Fulfillment', label: 'Fulfillment'},
  { value: 'Copywriting', label: 'Copywriting'},
  { value: 'Branding', label: 'Branding'},
  { value: 'Other', label: 'Other'},
]

const platform_options = [
  { value: 'BigCommerce', label: 'BigCommerce'},
  { value: 'Shopify', label: 'Shopify'},
  { value: 'Magento', label: 'Magento'},
  { value: 'Shopware', label: 'Shopware'},
  { value: 'Other', label: 'Other'}, 
]

const location_options = [
  { value: 'Australia or New Zealand', label: 'Australia or New Zealand'}, 
  { value: 'Canada', label: 'Canada'}, 
  { value: 'Europe', label: 'Europe'}, 
  { value: 'United Kingdom', label: 'United Kingdom'}, 
  { value: 'United States', label: 'United States'}, 

]

export default function Agencies() {
  return (
    <Layout>
      <div className="py-16 bg-gray-100 sm:py-20 md:py-28">
        <div className="relative text-center">
          <h1 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            I Want To Offer Help
          </h1>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>

        <p className="max-w-xl px-6 mx-auto mt-16 text-center text-gray-500">
          If you are an e-commerce agency anywhere in the world who has available capacity to help merchants set up a website or optimize their online operations, fulfillment, and shipping and would like to help out in this difficult time, complete this form to add your name to the list.
        </p>
		<p className="max-w-xl px-6 mx-auto mt-16 text-center text-gray-500">
		  Once you submit this info you will be able to connect with merchants in need of your services. We’re in this together!
		</p>

        <form
          name="Agency Form"
          method="POST"
          data-netlify="true"
          action="/contact/thanks/"
          className="max-w-4xl px-6 py-8 mx-auto mt-24 bg-white shadow md:py-16 md:px-24 sm:rounded-md sm:overflow-hidden"
        >
          <input type="hidden" name="form-name" value="Agency Form" />

          <div className="mb-8 text-center md:mb-16">
            <h2 className="text-2xl font-semibold text-gray-600">
              Business Information
            </h2>
            <p className="mx-8 mt-4 text-gray-500">
            Agencies can join the initiative by visiting offline2on.com/agencies and completing a short request form. Once vetted, the agency will be added to a public directory on the site to be contacted by either the business directly or by Offline2On on behalf of a particular business.
            </p>
          </div>

          <Input id="name" label="Name" required />

          <Input id="email" label="Email" type="email" required />

          <Input id="phone" label="Phone" type="tel" required />

          <Input id="business-name" label="Business Name" />


          <Input
            label="Business Expertise"
            id="expertise"
            inputType="multiselect" 
            options={expertise_options} />
          <Input id="expertise-other" label="Other:" hint="If you can offer other expertise, please specify"/>


          <Input 
            id="platforms" 
            label="Which platforms you work with?"
            inputType="multiselect"
            options={platform_options} 
          />
          <Input id="platforms-other" label="Other:" hint="If you worth with other platforms, please specify"/>

          <Input 
            id="location"  
            label="Where are you located?"
            inputType="multiselect"
            options={location_options} 
          />
          <Input id="location-other" label="Other:" hint="If you work on another region, please specify"/>

          <Input
            id="help_needed"
            label="Anything else you want to tell us?"
            inputType="textarea"
          />

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
