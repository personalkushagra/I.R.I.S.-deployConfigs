import React from 'react';
import { Link } from 'react-router-dom';

function Refund() {
  return (
    <div className="refund">
      <h1>Refund Policy</h1>
      <p>
        At I.R.I.S, we want to ensure that you are satisfied with our services.
        If you are not satisfied, we offer a refund policy.
      </p>
      <h2>Eligibility for Refund</h2>
      <p>
        You are eligible for a refund if you have paid for our services and are not satisfied with them.
        You must request a refund within 30 days of payment.
      </p>
      <h2>Refund Process</h2>
      <p>
        To request a refund, please contact us at [insert contact email].
        We will process your refund within 14 days of receiving your request.
      </p>
      <h2>Refund Amount</h2>
      <p>
        The refund amount will be the full amount paid for the service, minus any applicable fees.
      </p>
      <h2>Exceptions</h2>
      <p>
        We reserve the right to deny a refund if:
        <ul>
          <li>You have used the service for more than 30 days.</li>
          <li>You have not followed our terms and conditions.</li>
          <li>You have not provided sufficient information to process the refund.</li>
        </ul>
      </p>
      <h2>Payment Methods</h2>
      <p>
        Refunds will be processed using the original payment method.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our refund policy, please contact us at [insert contact email].
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

export default Refund;