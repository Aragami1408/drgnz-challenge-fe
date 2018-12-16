import React, { PureComponent } from 'react';
import DropdownMenu from '../DropdownMenu';

export class Footer extends PureComponent {
  render() {
    const { username } = this.props;
    return (
      <div id="header">
        <div className="header-nav">{' '}</div>
        <div className="header-title">Drgnz Challenge 2018</div>
        <div className="header-user">
          <span>Hi there{username && `, ${username}`}</span>
          <DropdownMenu />
        </div>
      </div>
    )
  }
 }

export default Footer
