import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Agencies() {
  return (
    <Layout>
      <div className="bg-gray-100 py-28">
        <div className="relative text-center">
          <h1 className="inline-block text-5xl font-semibold text-gray-900">
            For Agencies
          </h1>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>

        <p className="max-w-xl mx-auto mt-16 text-center text-gray-500">
          Many ecommerce agencies worldwide have available capacity to help
          merchants set up a website or optimize their online operations,
          fulfillment and shipping. If you are one of those agencies that would
          like to help merchants through this difficult time, complete this form
          to add your name to the list.
        </p>

        <form
          name="Agency Form"
          method="POST"
          data-netlify="true"
          action="/contact/thanks/"
          className="max-w-4xl px-24 py-16 mx-auto mt-24 bg-white shadow sm:rounded-md sm:overflow-hidden"
        >
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              Business Information
            </h2>
            <p className="mx-8 mt-4 text-gray-500">
              Once you submit this info you will be able to connect with
              merchants in need of your services. We’re in this together!
            </p>
          </div>

          <Input id="name" label="Name" />

          <Input id="email" label="Email" type="email" />

          <Input id="phone" label="Phone" type="tel" />

          <Input id="business-name" label="Business Name" />

          <Input
            id="expertise"
            label="Business Expertise"
            hint="Tell us more about how you can help merchants."
          />

          <Input id="platforms" label="Which platforms you work with?" />

          <Input id="location" label="Where are you located?" />

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
