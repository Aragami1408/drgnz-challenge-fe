import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Login extends PureComponent {
  componentDidMount() {
    document.title = 'Login';
  }
  render() {
    return (
      <div id="card-wrapper">
        <div className="login-card">
          <div className="card-header">
            <img className="card-logo" src="/images/logo.png" alt="logo" />
            <div>welcome</div>
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
            <div>
              Want to join? <Link to="/signup" className="signup-link">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
