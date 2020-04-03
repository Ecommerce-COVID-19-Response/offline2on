import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Input from '../components/Input';

const platform_options = [
  { value: 'BigCommerce', label: 'BigCommerce'},
  { value: 'Shopify', label: 'Shopify'},
  { value: 'Magento', label: 'Magento'},
  { value: 'I need help choosing a platform', label: 'I need help choosing a platform'},
  { value: 'Shopware', label: 'Shopware'},
  { value: 'Other', label: 'Other'}, 
]

const location_options = [
  { value: 'Australia or New Zealand', label: 'Australia or New Zealand'}, 
  { value: 'Canada', label: 'Canada'}, 
  { value: 'Europe', label: 'Europe'}, 
  { value: 'United Kingdom', label: 'United Kingdom'}, 
  { value: 'United States', label: 'United States'},
  { value: 'Other', label: 'Other'}, 
]

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

const business_options = [
  { value: 'Restaurant or Bar', label: 'Restaurant or Bar'},
  { value: 'Retailer', label: 'Retailer'},
  { value: 'Wholesaler or manufacturer', label: 'Wholesaler or manufacturer'},
]

const market_options = [
  { value: 'Local', label: 'Local'},
  { value: 'Domestic', label: 'Domestic'},
  { value: 'International', label: 'International'},
]
  
const financial_options = [
  { value: 'I want to grow my business', label: 'I want to grow my business'},
  { value: 'The revenue trend looks really bad, and I need to get ahead of this', label: 'The revenue trend looks really bad, and I need to get ahead of this'},
  { value: 'My business will not survive the pandemic', label: 'My business will not survive the pandemic'},
]

export default function Merchants() {
  return (
    <Layout>
      <div className="py-16 bg-gray-100 sm:py-20 md:py-28">
        <div className="relative text-center">
          <h1 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            Find an Agency to Help You Get Online Fast
          </h1>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>

        <p className="max-w-xl px-6 mx-auto mt-16 text-center text-gray-500">
          Many e-commerce agencies worldwide have available capacity to help merchants like you get a website set up fast, or optimize their current online operations, fulfillment, and shipping. There is hope and help is on the way!
        </p>

        <form
          name="Merchant Form"
          method="POST"
          data-netlify="true"
          action="/contact/thanks/"
          className="max-w-4xl px-6 py-8 mx-auto mt-24 bg-white shadow md:py-16 md:px-24 sm:rounded-md sm:overflow-hidden"
        >
          <input type="hidden" name="form-name" value="Merchant Form" />

          <div className="mb-8 text-center md:mb-16">
            <h2 className="text-2xl font-semibold text-gray-600">
              Business Information
            </h2>
            <p className="mx-8 mt-4 text-gray-500">
              In order to get you online as fast as possible, complete this form and we’ll forward your request to the agency best suited to help with your needs.
            </p>
          </div>

          <Input id="name" label="Name" required />

          <Input id="email" label="Email" type="email" required />

          <Input id="phone" label="Phone" type="tel" inputType="phone" required />

          <Input id="business-name" label="Business Name" />

          <Input id="url" label="Existing Website" />

          <Input 
            id="location"  
            label="Where are you located?"
            inputType="multiselect"
            options={location_options} 
          />
          <Input id="location-other" label="Other:" hint="If you work on another region, please specify"/>

          <Input 
            id="business_type"  
            label="What type of business do you have?"
            inputType="multiselect"
            options={business_options} 
          />

          <Input
            id="business_sells"
            label="What do you sell?"
            inputType="textarea"
          />

          <Input 
            id="market"  
            label="What markets do you serve?"
            inputType="multiselect"
            options={market_options} 
          />

          <Input
            id="can-ship"
            label="Do you currently ship?"
            inputType="select"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Input>

          <Input 
            id="financial_situation"  
            label="What is your current financial situation?"
            inputType="multiselect"
            options={financial_options} 
          />

          <Input 
            id="platforms" 
            label="Preferred e-commerce platforms"
            inputType="multiselect"
            options={platform_options} 
          />
          <Input id="platforms-other" label="Other:" />
 

          <Input 
            id="help_needed" 
            label="What do you need help with?"
            inputType="multiselect"
            options={expertise_options} 
          />

          <Input id="additional" label="Other Comments" inputType="textarea" />

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
