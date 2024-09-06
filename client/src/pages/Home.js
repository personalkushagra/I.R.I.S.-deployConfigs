import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import videoSource from './vid1.mp4'; // Import the video file
import backgroundVideo from './vid2.mp4'; // Import the background video file

function Home() {
  return (
    <div className="home">
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay">
      <header className="bg-dark fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container py-0 align-content-center">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="Logo" className="logo-img" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-3 justify-content-end">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

        <main className="flex-grow-1">
          <div className="hero text-white d-flex align-items-center ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 wordart">I.R.I.S</h1>
                  <h2 className="lead">Innovation Research & Intelligence Support</h2>
                  <p className="mb-4">Empowering innovation and fostering technological advancements.</p>
                </div>
                <div className="col-lg-6 text-center">
                  {/* Add video component here */}
                  <video className="hero-video" autoPlay loop muted>
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="journey py-5 text-center text-light">
            <div className="container">
              <h3 className="journey-title py-5">Join us on the I.R.I.S Journey</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="step p-4 shadow-sm h-100">
                    <h4>Bring Your Idea</h4>
                    <p>Transform your concepts into reality with our supportive community.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="step p-4 shadow-sm h-100">
                    <h4>Collaborate and Develop</h4>
                    <p>Work with like-minded individuals to refine and expand your projects.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="step p-4 shadow-sm h-100">
                    <h4>Achieve and Launch</h4>
                    <p>Bring your innovations to life and make a lasting impact in the tech world.</p>
                  </div>
                </div>
              </div>
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
    </div>
  );
}

export default Home;
