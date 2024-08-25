import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Event1 = () => {
  return (
    <div>
      <h1>Innovation Hackathon</h1>
      <p>This is the event 1 page.</p>
      <Link to="/events" className="btn">
        Back to Events
      </Link>
    </div>
  );
};

export default Event1;