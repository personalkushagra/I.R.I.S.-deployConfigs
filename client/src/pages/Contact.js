import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/contact', formData);
            if (response.data.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="contact">
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
                <h1>Contact Us</h1>
                {submitted ? (
                    <div className="success-message">
                        <h2>Thank you for your message!</h2>
                        <p>We'll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                )}
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

export default Contact;