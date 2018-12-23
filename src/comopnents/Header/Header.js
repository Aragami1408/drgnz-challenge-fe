import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from '../DropdownMenu';

export class Header extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    fullname: PropTypes.string,
    logout: PropTypes.func.isRequired,
  }

  static defaultProps = {
    fullname: '',
    username: '',
  }

  render() {
    const { username, fullname, logout } = this.props;

    return (
      <div id="header">
        <div className="header-nav">{' '}</div>
        <div className="header-title">Drgnz Challenge 2018</div>
        <div className="header-user">
          <span>{`Hi there, ${username || fullname || 'Drgnz'}`}</span>
          <DropdownMenu logout={logout} />
        </div>
      </div>
    );
  }
}

export default Header;
