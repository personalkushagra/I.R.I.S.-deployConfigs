import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import backgroundVideo from './vid2.mp4'; // Import the background video file

function AboutUs() {
  return (
    <div className="about-us">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay"></div>
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="Logo" className="logo-img" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="content py-5">
        <div className="container">
          <h1 className="title">About I.R.I.S</h1>
          <p className="title-desc">I.R.I.S (Innovation Research & Intelligence Support) is a tech club dedicated to fostering innovation and supporting research in the field of technology.</p>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info p-4">
                <h2>Contact Information</h2>
                <p>Email: iris@mitwpu.edu.in</p>
                <p>Phone: +91 7715958053</p>
                <p>Address: MIT World Peace University Survey No, 124, Paud Rd, Kothrud, Pune, Maharashtra 411038</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission p-4">
                <h2>Our Mission</h2>
                <h4>To provide a platform for tech enthusiasts to ::</h4>
                <h5>* Collaborate</h5>
                <h5>*  Learn</h5>
                <h5>* Innovate</h5>
              </div>
            </div>
          </div>
          <div className="vision p-4">
            <h2>Our Vision</h2>
            <p>To be the leading tech community that drives technological advancements and shapes the future of innovation.</p>
          </div>
          <div className="team-members p-4">
            <h2>Team Members</h2>
            <p>Person infos with roles to be added.</p>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-light">Club</Link></li>
                <li><Link to="/about" className="text-light">Our Team</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Events</h5>
              <ul className="list-unstyled">
                <li><Link to="/events" className="text-light">Hackathons</Link></li>
                <li><Link to="/events" className="text-light">Podcasts</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.instagram.com/iris_mitwpu/" className="text-light" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://chat.whatsapp.com/Lnu3YpiEM4WDmwCjwDCY6n" className="text-light" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 I.R.I.S. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
