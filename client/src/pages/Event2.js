import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './event2.css';

const Event2 = () => {
  const [formData, setFormData] = useState({
    team_name: '',
    leader_name: '',
    leader_phone: '',
    leader_email: '',
    leader_prn: '',
    leader_branch: '',
    member2_name: '',
    member2_phone: '',
    member2_email: '',
    member2_prn: '',
    member2_branch: '',
    member3_name: '',
    member3_phone: '',
    member3_email: '',
    member3_prn: '',
    member3_branch: '',
    member4_name: '',
    member4_phone: '',
    member4_email: '',
    member4_prn: '',
    member4_branch: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        team_name,
        leader_name,
        leader_phone,
        leader_email,
        leader_prn,
        leader_branch,
        member2_name,
        member2_phone,
        member2_email,
        member2_prn,
        member2_branch,
        member3_name,
        member3_phone,
        member3_email,
        member3_prn,
        member3_branch,
        member4_name,
        member4_phone,
        member4_email,
        member4_prn,
        member4_branch,
      } = formData;

      const response = await axios.post('http://localhost:5000/api/event2', {
        team_name,
        leader_name,
        leader_phone,
        leader_email,
        leader_prn,
        leader_branch,
        member2_name,
        member2_phone,
        member2_email,
        member2_prn,
        member2_branch,
        member3_name,
        member3_phone,
        member3_email,
        member3_prn,
        member3_branch,
        member4_name,
        member4_phone,
        member4_email,
        member4_prn,
        member4_branch,
      });

      if (response.data.success) {
        console.log('Registration successful!');
        setShowModal(true);
        setFormData({
          team_name: '',
          leader_name: '',
          leader_phone: '',
          leader_email: '',
          leader_prn: '',
          leader_branch: '',
          member2_name: '',
          member2_phone: '',
          member2_email: '',
          member2_prn: '',
          member2_branch: '',
          member3_name: '',
          member3_phone: '',
          member3_email: '',
          member3_prn: '',
          member3_branch: '',
          member4_name: '',
          member4_phone: '',
          member4_email: '',
          member4_prn: '',
          member4_branch: '',
        });
      } else {
        console.error('Error registering:', response.data.error);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const Modal = () => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Team details saved!</h2>
          <p>*Complete the payment for successful registration*</p>
          <button onClick={() => window.open('https://example.com/payment', '_blank')} className="proceed-button">Proceed to Pay</button>

          <button onClick={() => setShowModal(false)} className="close-button">Close (Cancel Registration)</button>
        </div>
      </div>
    );
  };

  return (
    <div className="event2">
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
        <h1 className="title">Upcoming Event: September Hackathon</h1>
        <p>This is a short description of the event.</p>
        <img src="event2-image.jpg" alt="Event 2 Image" />
        <div className="checkout-box">
          <h2 className="title2">Registration Fee: INR 250</h2>
          <form onSubmit={handleSubmit}>
            <h3>Team Information:</h3>
            <input
              type="text"
              name="team_name"
              value={formData.team_name}
              onChange={handleChange}
              placeholder="Team Name"
            />
            <h3>Leader:</h3>
            <input
              type="text"
              name="leader_name"
              value={formData.leader_name}
              onChange={handleChange}
              placeholder="Leader Name"
            />
            <input
              type="tel"
              name="leader_phone"
              value={formData.leader_phone}
              onChange={handleChange}
              placeholder="Leader Phone Number"
            />
            <input
              type="email"
              name="leader_email"
              value={formData.leader_email}
              onChange={handleChange}
              placeholder="Leader Email ID"
            />
            <input
              type="text"
              name="leader_prn"
              value={formData.leader_prn}
              onChange={handleChange}
              placeholder="Leader PRN"
            />
            <input
              type="text"
              name="leader_branch"
              value={formData.leader_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3>Member 2:</h3>
            <input
              type="text"
              name="member2_name"
              value={formData.member2_name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="tel"
              name="member2_phone"
              value={formData.member2_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="member2_email"
              value={formData.member2_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            <input
              type="text"
              name="member2_prn"
              value={formData.member2_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member2_branch"
              value={formData.member2_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3>Member 3:</h3>
            <input
              type="text"
              name="member3_name"
              value={formData.member3_name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="tel"
              name="member3_phone"
              value={formData.member3_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="member3_email"
              value={formData.member3_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            <input
              type="text"
              name="member3_prn"
              value={formData.member3_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member3_branch"
              value={formData.member3_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <h3>Member 4:</h3>
            <input
              type="text"
              name="member4_name"
              value={formData.member4_name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="tel"
              name="member4_phone"
              value={formData.member4_phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="member4_email"
              value={formData.member4_email}
              onChange={handleChange}
              placeholder="Email ID"
            />
            <input
              type="text"
              name="member4_prn"
              value={formData.member4_prn}
              onChange={handleChange}
              placeholder="PRN"
            />
            <input
              type="text"
              name="member4_branch"
              value={formData.member4_branch}
              onChange={handleChange}
              placeholder="Branch | Ex: SYCSE Core"
            />
            <button type="submit">Save Details</button>
          </form>
          {showModal && <Modal />}
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
};

export default Event2;
