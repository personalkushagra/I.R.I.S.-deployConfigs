import React from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <div className="terms">
      <h1>Terms and Conditions</h1>
      <p>
        By using our website, you agree to these terms and conditions.
        Please read them carefully before using our website.
      </p>
      <h2>Use of our website</h2>
      <p>
        You must use our website for lawful purposes only.
        You must not use our website to harm or offend others.
      </p>
      <h2>Intellectual property</h2>
      <p>
        All content on our website is owned by us or our licensors.
        You must not copy, modify, or distribute our content without our permission.
      </p>
      <h2>Liability</h2>
      <p>
        We are not liable for any damages or losses arising from your use of our website.
        We are not responsible for any third-party content or services.
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

export default Terms;