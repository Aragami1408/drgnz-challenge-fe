import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HistoryService from '../../common/history';
import DropdownMenu from '../DropdownMenu';

export class Header extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    fullName: PropTypes.string,
    logout: PropTypes.func.isRequired,
    title: PropTypes.string,
    location: PropTypes.string,
  }

  static defaultProps = {
    location: '/',
    fullName: '',
    username: '',
    title: 'Drgnz Challenge',
  }

  handleTitleClick = () => {
    const { location } = this.props;
    HistoryService.push(location);
  }

  render() {
    const {
      username, fullName,
      logout, title,
    } = this.props;

    return (
      <div id="header">
        <div className="header-nav">{' '}</div>
        <div
          className="header-title"
          onClick={this.handleTitleClick}
        >
          {title}
        </div>
        <div className="header-user">
          <span>{`Hi there, ${fullName || username || 'Drgnz'}`}</span>
          <DropdownMenu logout={logout} />
        </div>
      </div>
    );
  }
}

export default Header;
