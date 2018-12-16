import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUserCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export class DropdownMenu extends PureComponent {
  render() {
    return (
      <div id="dropdown">
        <Link to="/" className="dropdown-item">
          <span>Home</span>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="/account" className="dropdown-item">
          <span>{'Account & Profile'}</span>
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
        <div className="dropdown-seperator">

        </div >
        <Link to="/about" className="dropdown-item">
          <span>Help</span>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Link>
        <div className="dropdown-item">
          <span>Logout</span>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
      </div>
    )
  }
}

export default DropdownMenu
