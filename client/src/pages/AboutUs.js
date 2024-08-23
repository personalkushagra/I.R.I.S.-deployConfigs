import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <header>
      <nav>
          <ul className="navbar">
            <li className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Logo" />
              </Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>About I.R.I.S</h1>
        <p>I.R.I.S (Innovation Research & Intelligence Support) is a tech club dedicated to fostering innovation and supporting research in the field of technology.</p>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: contact@iris-tech.org</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
        </div>
        <div className="mission-vision">
          <h2>Our Mission</h2>
          <p>To provide a platform for tech enthusiasts to collaborate, learn, and innovate.</p>
          <h2>Our Vision</h2>
          <p>To be the leading tech community that drives technological advancements and shapes the future of innovation.</p>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Featured</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">Hackathon</Link></li>
              <li><Link to="/events">Seminars</Link></li>
              <li><Link to="/events">Workshops</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Socials</h4>
            <ul>
              <li><a href="https://www.instagram.com/iris_mitwpu/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 | I.R.I.S. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;