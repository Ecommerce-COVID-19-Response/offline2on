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
        <label htmlFor="vertical">Business Vertical</label>
        <div className="control"><input className="input" type="text" name="vertical" id="vertical" /> </div>
        <span className="form-hint">Tell us more about what you sell.</span>
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
        <label htmlFor="budget">Do you have a budget?</label>
        <select className="input"  name="budget" id="budget">
          <option value="under-1000">Under a $1000</option>
          <option value="1000-3000">$1000 to $3000</option>
          <option value="3000-5000">$3000 to $5000</option>
          <option value="over-5000">$5000 or more</option>
          <option value="probono">I need help or can't pay</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="additional">Anything else you want to tell us</label>
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
