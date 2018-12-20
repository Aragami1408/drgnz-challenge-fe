import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export class DropdownMenu extends PureComponent {
  render() {
    return (
      <div id="dropdown">
        <Link to="/" className="dropdown-item">
          <span>Home</span>
          <FontAwesomeIcon icon="home" />
        </Link>
        <Link to="/account" className="dropdown-item">
          <span>{'Account & Profile'}</span>
          <FontAwesomeIcon icon="user-circle" />
        </Link>
        <div className="dropdown-seperator">

        </div >
        <Link to="/about" className="dropdown-item">
          <span>Help</span>
          <FontAwesomeIcon icon="question-circle" />
        </Link>
        <div className="dropdown-item">
          <span>Logout</span>
          <FontAwesomeIcon icon="sign-out-alt" />
        </div>
      </div>
    )
  }
}

export default DropdownMenu
