import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Event2 = () => {
  return (
    <div>
      <h1>Sept Hackathon</h1>
      <p>This is the event 2 page.</p>
      <Link to="/events" className="btn">
        Back to Events
      </Link>
    </div>
  );
};

export default Event2;