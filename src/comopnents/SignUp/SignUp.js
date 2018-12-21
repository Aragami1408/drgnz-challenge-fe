import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';
import { randInt } from '../../common/utils';

export class SignUp extends PureComponent {
  state = {
    username: '',
    password: '',
    regCode: '',
    hiddenRegCode: '',
    error: {},
  }

  componentDidMount() {
    document.title = 'Sign Up - Drgnz Challenge 2018';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const hiddenRegCode = [...new Array(randInt(5, 11))].map(() => possible.charAt(randInt(0, possible.length))).join``;
    this.setState({ hiddenRegCode });
    console.log(`Your registration code is: ${hiddenRegCode}`);
  }

  validRedCode = (regCode) => {
    const { hiddenRegCode } = this.state;
    if (!regCode || !regCode.trim()) return 'Registration code cannot be empty!';
    if (regCode.trim() !== hiddenRegCode) return 'Wrong registration code!';
    return null;
  }

  validUsername = (username) => {
    if (!username || !username.trim()) return 'Username cannot be empty!';
    if (!/^[a-zA-Z_0-9]{3,}$/.test(username)) return 'Invalid username. Can only contains a-z, A-Z, 0-9 and _';
    return null;
  }

  validPassword = (password) => {
    if (!password || !password.trim()) return 'Username cannot be empty!';
    if (!/^.{6,}$/.test(password)) return 'Password must contains atleast 6 characters';
    return null;
  }

  handleRegister = () => {
    const { username, password, regCode } = this.state;
    const error = {};
    this.setState({ error });
    error.regCode = this.validRedCode(regCode);
    error.username = this.validUsername(username);
    error.password = this.validPassword(password);

    if (!isEmpty(error)) {
      this.setState({ error });
      return;
    }
    // handle registraion
  }

  render() {
    const { error } = this.state;
    return (
      <div id="card-wrapper">
        <div className="signup-card">
          <div className="card-header">
            Registration
          </div>
          <div className="card-input-wrapper">
            <div className="card-input">
              <div className="input-label">
                Username
              </div>
              <input
                className={`input-form ${error.username ? 'has-error' : ''}`}
                type="text"
              />
              {error.username && <div className="input-error">{error.username}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">
                Password
              </div>
              <input
                className={`input-form ${error.username ? 'has-error' : ''}`}
                type="password"
              />
              {error.password && <div className="input-error">{error.password}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">
                Registration Code
              </div>
              <input
                className={`input-form ${error.username ? 'has-error' : ''}`}
                type="text"
              />
              {error.regCode && <div className="input-error">{error.regCode}</div>}
            </div>
          </div>
          <div className="card-btn">
            <button onClick={this.handleRegister} type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
