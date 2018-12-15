import React, { PureComponent } from 'react'

export class Footer extends PureComponent {
  render() {
    const { username } = this.props;
    return (
      <div id="header">
        <div className="header-nav">{' '}</div>
        <div className="header-title">Drgnz Challenge 2018</div>
        <div className="header-user">Hi there{username && `, ${username}`}</div>
      </div>
    )
  }
 }

export default Footer
