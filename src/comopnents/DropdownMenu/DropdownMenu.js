import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const DropdownMenu = ({ logout }) => (
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
    <div className="dropdown-item" onClick={logout}>
      <span>Logout</span>
      <FontAwesomeIcon icon="sign-out-alt" />
    </div>
  </div>
);

DropdownMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default DropdownMenu;
