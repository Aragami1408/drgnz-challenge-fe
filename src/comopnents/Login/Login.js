import React, { PureComponent } from 'react';

export class Login extends PureComponent {
  render() {
    return (
      <div id="card-wrapper">
        <div className="card-header">
          Drgnz's Challenge
        </div>
        <div className="card-input-wrapper">
          <div className="card-input">
            <div className="input-label">Username</div>
            <input className="input-form" type="text"/>
          </div>
          <div className="card-input">
            <div className="input-label">Password</div>
            <input className="input-form" type="password"/>
          </div>
        </div>
        <div className="card-btn">
          <a href="/">Login</a>
        </div>
        <div className="card-footer">
          <div>Want to join? <b>Sign Up</b></div>
          <div>Forgot Password</div>
        </div>
      </div>
    )
  }
}

export default Login
