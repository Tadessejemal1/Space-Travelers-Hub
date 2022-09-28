import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const links = [
    { id: 1, name: 'Rockets', path: '/' },
    { id: 2, name: 'Missions', path: '/missions' },
    { id: 3, name: 'My Profile', path: '/my-profile' },
  ];

  return (
    <nav>
      <div className="logo">
        <div className="logo-img">
          <img
            src={logo}
            alt="logo"
            style={{ width: '100px', height: '100px' }}
            className="logo-img"
          />
        </div>
        <span className="logo-title">Space Travelers&apos; Hub</span>
      </div>
      <div className="hamburger">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
