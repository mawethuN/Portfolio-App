import React from 'react';
import { Link } from 'react-router-dom';
import './Navstyles.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/theme">Theme</Link>
        </li>
        <li>
          <Link to="/theory">Theory</Link>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/design">Design</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;