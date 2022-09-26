import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
  <div>
    <img src=".src/assets/logo.png" alt="display images" />
  </div>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Rocket</Link></li>
        <li className="nav-item"><Link to="/mission">Mission</Link></li>
        <li className="nav-item"><Link to="/profile">My Profile</Link></li>
        
      </ul>
    </nav>
  </div>
);

export default Header;
