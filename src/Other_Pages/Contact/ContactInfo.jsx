import React from 'react';
import './ContactInfo.css'; // Assuming the CSS is saved in ContactInfo.css
import mail_ic from '../../assets/contact/mail.png';
import call_ic from '../../assets/contact/call.png';
import location from '../../assets/contact/location.png';

const ContactInfo = () => {
  return (
    <div id="contact-info-container" className="container">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {/* Address info */}
        <div className="col">
          <div id="address-card" className="card card-body bg-light border p-sm-5">
            <img id='loc-icon' className='icon_style' src={location} alt="Location" />
            <h6 className="mb-3 marginlogo">Class Address</h6>
            <p>Nirala Greenshire , G12-2505 Greater Noida West</p>
            <a id="address-link" className="heading-color text-primary-hover text-decoration-underline mb-0">Address</a>
          </div>
        </div>

        {/* Email info */}
        <div className="col">
          <div id="email-card" className="card card-body bg-light border p-sm-5">
            <img id='email-icon' className='icon_style' src={mail_ic} alt="Email" />
            <h6 className="mb-3 marginlogo">Email us</h6>
            <p>We're on top of things and aim to respond to all inquiries within 24 hours.</p>
            <a href="mailto:taraartclass@gmail.com" id="email-link" className="heading-color text-primary-hover text-decoration-underline mb-0">taraartclass@gmail.com</a>
          </div>
        </div>

        {/* Contact info */}
        <div className="col">
          <div id="phone-card" className="card card-body bg-light border p-sm-5">
            <img id='call-icon' className='icon_style' src={call_ic} alt="Call" />
            <h6 className="mb-3 marginlogo">Call us</h6>
            <p>Let's learn together towards a common goal - get in touch!</p>
            <a href="tel:+12518546308" id="phone-link" className="heading-color text-primary-hover text-decoration-underline mb-0">+91 81300 11848</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
