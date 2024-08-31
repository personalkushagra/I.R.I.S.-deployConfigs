import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
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
        <div className="hero">
          <div className="hero-text">
            <h1>I.R.I.S</h1>
            <h2>Innovation Research & Intelligence Support</h2>
            <p>Empowering innovation and fostering technological advancements</p>
          </div>
          <div className="hero-image">
            <img src="/logo.png" alt="Hero Image" />
          </div>
        </div>
        <div className="journey">
          <h3 className="journey-title">JOIN US ON THE I.R.I.S JOURNEY</h3>
          <div className="journey-steps">
            <div className="step">
              <h4>Bring Your Idea</h4>
              <p>Transform your concepts into reality with our supportive community.</p>
            </div>
            <div className="step">
              <h4>Collaborate and Develop</h4>
              <p>Work with like-minded individuals to refine and expand your projects.</p>
            </div>
            <div className="step">
              <h4>Achieve and Launch</h4>
              <p>Bring your innovations to life and make a lasting impact in the tech world.</p>
            </div>
          </div>
        </div>
      </main>

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

export default Home;