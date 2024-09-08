import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark px-0 mx-0">
        <div className="container py-0 px-0 align-content-center mx-5">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">                  
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-3 justify-content-end">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;