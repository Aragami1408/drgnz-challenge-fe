import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from '../DropdownMenu';

export class Header extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    fullname: PropTypes.string,
    logout: PropTypes.func.isRequired,
    title: PropTypes.string,
  }

  static defaultProps = {
    fullname: '',
    username: '',
    title: 'Drgnz Challenge 2018',
  }

  render() {
    const { username, fullname, logout, title } = this.props;

    return (
      <div id="header">
        <div className="header-nav">{' '}</div>
        <div className="header-title">{title}</div>
        <div className="header-user">
          <span>{`Hi there, ${username || fullname || 'Drgnz'}`}</span>
          <DropdownMenu logout={logout} />
        </div>
      </div>
    );
  }
}

export default Header;
