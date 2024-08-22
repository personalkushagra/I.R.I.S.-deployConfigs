import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

function Events() {
  const events = [
    {
      id: 1,
      title: "All New Rush",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      image: "path/to/event1-image.jpg"
    },
    {
      id: 2,
      title: "Hackathon 2024",
      description: "Join us for an exciting 48-hour coding challenge!",
      image: "path/to/event2-image.jpg"
    },
    {
      id: 3,
      title: "AI Workshop",
      description: "Learn about the latest advancements in Artificial Intelligence.",
      image: "path/to/event3-image.jpg"
    }
  ];

  return (
    <div className="events">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Upcoming Events</h1>
        <div className="event-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="btn">Learn More</Link>
            </div>
          ))}
        </div>
      </main>
      <footer>
        {/* Footer content (same as in Home.js) */}
      </footer>
    </div>
  );
}

export default Events;