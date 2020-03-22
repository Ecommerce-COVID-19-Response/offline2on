import React from 'react';

const AgencyForm = () =>
  <section id="form" className="wrapper">
  <div class="inner">
    <form name="Agency Form" method="POST" data-netlify="true" action="/contact/thanks/">
    <div className="control">
      <input className="input" type="hidden" name="form-name" value="Agency Form" /> 
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
        <label htmlFor="expertise">My Expertise are: </label>
        <div className="control"><input className="input" type="text" name="expertise" id="expertise" /> </div>
        <span className="form-hint">Tell us more about how you can help merchants.</span>
      </div>
      <div className="field">
        <label htmlFor="platforms">Which Platforms you work with: </label>
        <div className="control"><input className="input" type="text" name="platforms" id="platforms" /> </div>
      </div>
      <div className="field">
        <label htmlFor="location">Where are you located?</label>
        <div className="control"><input className="input" type="text" name="location" id="location" /> </div>
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

export default AgencyForm;
