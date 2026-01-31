import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png'; // If logo.png is in src folder and Navbar.jsx is in src/components

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="IITK RaSET Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Projects</NavLink>
          </li>
          {/* <li>
            <NavLink to="/sponsors" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Sponsorships</NavLink>
          </li> */}
          <li className="dropdown">
            <NavLink to="/team" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Team</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/team/current">Current Team</NavLink></li>
              <li><NavLink to="/team/alumni">Alumni</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="nav-link">Subsystem</span>
            <ul className="dropdown-menu">
              <li><a href="https://drive.google.com/file/d/1IFZKqOCarH6pvy-6I6CcIEONcF9FSToy/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Propulsion</a></li>
              <li><a href="https://drive.google.com/file/d/1S0mTjwDa7oSt_cBynET0sFR62Tz5FIKu/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Aerodynamics & Structures</a></li>
              <li><a href="https://drive.google.com/file/d/1nPs4nQZAK0p1hDS4q2Fv8dv6ysnZFz1c/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Avionics & Payload</a></li>
              <li><a href="https://drive.google.com/file/d/1cRV9z-osZqELUE4k4jkiz2k2u9rnFQE_/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Recovery</a></li>
            </ul>
          </li>
          <li>
            {/*TODO: Add sponsors to contact page */}
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact us</NavLink>
          </li>
        </ul>

        {/* Hamburger menu */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu toggle"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;