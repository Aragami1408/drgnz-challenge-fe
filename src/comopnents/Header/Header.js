import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from '../DropdownMenu';

export class Footer extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    fullname: PropTypes.string,
  }

  static defaultProps = {
    fullname: '',
    username: '',
  }

  render() {
    const { username, fullname } = this.props;
    return (
      <div id="header">
        <div className="header-nav">{' '}</div>
        <div className="header-title">Drgnz Challenge 2018</div>
        <div className="header-user">
          <span>Hi there{`, ${username || fullname || 'Drgnz'}`}</span>
          <DropdownMenu />
        </div>
      </div>
    )
  }
 }

export default Footer
