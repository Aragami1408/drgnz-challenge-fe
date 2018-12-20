import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const DropdownMenu = () => (
  <div id="dropdown">
    <Link to="/" className="dropdown-item">
      <span>Home</span>
      <FontAwesomeIcon icon="home" />
    </Link>
    <Link to="/account" className="dropdown-item">
      <span>Account & Profile</span>
      <FontAwesomeIcon icon="user-circle" />
    </Link>
    <Link to="/about" className="dropdown-item">
      <span>Help</span>
      <FontAwesomeIcon icon="question-circle" />
    </Link>
    <div className="dropdown-item">
      <span>Logout</span>
      <FontAwesomeIcon icon="sign-out-alt" />
    </div>
  </div>
);

export default DropdownMenu;
