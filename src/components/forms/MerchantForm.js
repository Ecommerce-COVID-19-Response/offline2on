import React from 'react';

const MerchantForm = () =>
  <section id="form" className="wrapper">
  <div class="inner">
    <form name="Merchant Form" method="POST" data-netlify="true" action="/contact/thanks/">
    <div className="control">
      <input className="input" type="hidden" name="form-name" value="Merchant Form" /> 
    </div>
    <div className="fields">
      <div className="field half">
        <label htmlFor="name">Name</label>
        <div className="control"><input className="input" type="text" name="name" id="name" /> </div>
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <div className="control"><input className="input" type="text" name="email" id="email" /> </div>
      </div>
      <div className="field">
        <label htmlFor="phone">Phone Number</label>
        <div className="control"><input className="input" type="tel" name="phone" id="phone" /> </div>
      </div>
      <div className="field">
        <label htmlFor="business-name">Business Name</label>
        <div className="control"><input className="input" type="text" name="business-name" id="business-name" /> </div>
      </div>
      <div className="field">
        <label htmlFor="vertical">Business Description</label>
        <div className="control"><input className="input" type="text" name="vertical" id="vertical" /> </div>
        <span className="form-hint">Tell us more about what you sell.</span>
      </div>
      <div className="field">
        <label htmlFor="url">Existing Website</label>
        <div className="control"><input className="input" type="text" name="url" id="url" /> </div>
      </div>
      <div className="field">
        <label htmlFor="can-ship">Do you currently ship?</label>
        <select className="input"  name="can-ship" id="can-ship">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="location">Where are you located?</label>
        <div className="control"><input className="input" type="text" name="location" id="location" /> </div>
      </div>
      <div className="field">
        <label htmlFor="budget">What's  your Budget?</label>
        <select className="input"  name="budget" id="budget">
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="probono">I need help or can't pay</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="platform">Preferred Platform</label>
        <select className="input"  name="platform" id="platform">
          <option value="none">I don't know</option>
          <option value="big_commerce">Big Commerce</option>
          <option value="magento">Magento</option>
          <option value="shopify">Shopify</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="help_needed">What do you need help with?</label>
        <div className="control">
          <textarea className="textarea" name="help_needed" id="help_needed" rows="3" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="additional">Other Comments</label>
        <div className="control">
          <textarea className="textarea" name="additional" id="additional" rows="3" />
        </div>
      </div>
    </div>
    
    <div className="actions">
      <div className="field">
        <button class="button is-link" type="submit">Send</button>
      </div>
    </div>
  </form>
  </div>
  </section>

export default MerchantForm;
