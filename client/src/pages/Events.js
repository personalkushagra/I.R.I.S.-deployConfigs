import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

function Events() {
  const pastEvent = {
    id: 1,
    title: "Innovation Hackathon",
    description: "This is a past event",
    image: "./past-innovation-hackathon.jpg",
    date: "Held on: 15/02/2024",
    time: "",
  };

  const upcomingEvent = {
    id: 2,
    title: "Sept Hackathon",
    description: "Hackathon details to be added soon. Registration starts from 13th Sept, 2024. Stay Tuned!",
    image: "./logo2.png",
    date: "To be held on: 26/09/2024 || ",
    time: "04:00 PM",
  };

  const podcast = {
    id: 1,
    title: "I.R.I.S. Podcast",
    description: "Our latest podcast episode",
    image: "./podcast1.jpg",
    date: "2024-03-14 || ",
    length: "Length: 21 mins 02 secs",
  };

  return (
    <div className="events">
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
        <h1 className="title">Events</h1>
        <section className="upcoming-events">
          <h2 className="upcoming">Upcoming Events</h2>
          <div className="event-list">
            <div key={upcomingEvent.id} className="event-card">
              <img src={upcomingEvent.image} alt={upcomingEvent.title} />
              <h2>{upcomingEvent.title}</h2>
              <p>{upcomingEvent.description}</p>
              <p>
                <span>{upcomingEvent.date}</span>
                <span>{upcomingEvent.time}</span>
              </p>
              <Link to={`/events/${upcomingEvent.id}`} className="btn">
                REGISTRATION OPEN!
              </Link>
            </div>
          </div>
        </section>
        <section className="past-events">
          <h2 className="past">Past Events</h2>
          <div className="event-list">
            <div key={pastEvent.id} className="event-card">
              <img src={pastEvent.image} alt={pastEvent.title} />
              <h2>{pastEvent.title}</h2>
              <p>{pastEvent.description}</p>
              <p>
                <span>{pastEvent.date}</span>
                <span>{pastEvent.time}</span>
              </p>
              <Link to={`/events/${pastEvent.id}`} className="btn">
                Click to know more
              </Link>
            </div>
          </div>
        </section>
        <section className="podcasts">
          <h2 className="podcast-title">Podcasts</h2>
          <div className="event-list">
            <div key={podcast.id} className="event-card">
              <img src={podcast.image} alt={podcast.title} />
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
              <p>
                <span>{podcast.date}</span>
                <span>{podcast.length}</span>
              </p>
              <a href="https://www.youtube.com/watch?v=sFbYHID_w2c" target="_blank" rel="noopener noreferrer" className="btn">
                Listen now
              </a>
            </div>
          </div>
        </section>
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

export default Events;