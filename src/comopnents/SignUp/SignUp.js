import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends PureComponent {
  componentDidMount() {
    console.log('Your registration code is: 123456789');
    document.title = 'Sign Up - Drgnz Challenge 2018';
  }

  render() {
    return (
      <div id="card-wrapper">
        <div className="signup-card">
          <div className="card-header">
            Registration
          </div>
          <div className="card-input-wrapper">
            <div className="card-input">
              <div className="input-label">Username</div>
              <input className="input-form" type="text" />
            </div>
            <div className="card-input">
              <div className="input-label">Password</div>
              <input className="input-form" type="password" />
            </div>
            <div className="card-input">
              <div className="input-label">Registration Code</div>
              <input className="input-form" type="string" />
            </div>
          </div>
          <div className="card-btn">
            <Link to="/">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
