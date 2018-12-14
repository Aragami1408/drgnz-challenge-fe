import React, { PureComponent } from 'react';

export class SignUp extends PureComponent {
  componentDidMount() {
    console.log('Your registration code is: 123456789');
  }

  render() {
    return (
      <div id="card-wrapper">
        <div className="card-header">
          Registration
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
          <div className="card-input">
            <div className="input-label">Registration Code</div>
            <input className="input-form" type="string"/>
          </div>
        </div>
        <div className="card-btn">
          <a href="/">Sign Up</a>
        </div>
      </div>
    )
  }
}

export default SignUp
