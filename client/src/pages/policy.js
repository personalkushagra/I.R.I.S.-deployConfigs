import React from 'react';
import {Link} from 'react-router-dom';

function Policy() {
  return (
    <div className="policy">
      <h1>Privacy Policy</h1>
      <p>
        At I.R.I.S, we are committed to protecting the privacy of our users.
        This policy explains how we collect, use, and protect your personal data.
      </p>
      <h2>What information do we collect?</h2>
      <p>
        We collect information that you provide to us, such as your name, email address, and phone number.
        We also collect information about your interactions with our website, such as your IP address and browsing history.
      </p>
      <h2>How do we use your information?</h2>
      <p>
        We use your information to provide you with our services, to communicate with you, and to improve our website.
        We do not share your information with third parties without your consent.
      </p>
      <h2>How do we protect your information?</h2>
      <p>
        We take reasonable measures to protect your information from unauthorized access, use, and disclosure.
        We use encryption and other security technologies to protect your data.
      </p>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Club</Link></li>
              <li><Link to="/about">Our Team</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">Hackathons</Link></li>
              <li><Link to="/events">Podcasts</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://www.instagram.com/iris_mitwpu/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 I.R.I.S. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Policy;