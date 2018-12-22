import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { randInt } from '../../common/utils';
import Toast from '../../common/toast';

export class SignUp extends PureComponent {

  static propTypes = {
    register: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    errorMsg: PropTypes.string,
  }

  static defaultProps = {
    isLoading: false,
    errorMsg: '',
  }

  state = {
    username: '',
    password: '',
    regCode: '',
    hiddenRegCode: '',
    error: {},
    recaptcha: '',
    // 'g-recaptcha-response': '',
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
    if (username.length < 3) return 'Username must contains at least 3 characters';
    if (!/^[a-zA-Z_0-9]{3,}$/.test(username)) return 'Invalid username. Can only contains a-z, 0-9 and _';
    return null;
  }

  validPassword = (password) => {
    if (!password) return 'Password cannot be empty!';
    if (!/^.{6,}$/.test(password)) return 'Password must contains at least 6 characters';
    return null;
  }

  handleRegister = () => {
    const {
      username, password, regCode, recaptcha,
    } = this.state;
    const { register, isLoading } = this.props;
    if (isLoading) {
      Toast.warning('There are another requests waiting to process. Please wait!');
      return;
    }
    if (!recaptcha) {
      Toast.error('Please solve the captcha before continue');
      return;
    }
    let hasError = false;
    const error = {};
    error.regCode = this.validRedCode(regCode);
    hasError = hasError || error.regCode;
    error.username = this.validUsername(username);
    hasError = hasError || error.username;
    error.password = this.validPassword(password);
    hasError = hasError || error.password;
    if (hasError) {
      this.setState({ error });
      return;
    }
    this.setState({ error });
    register(username.trim().toLowerCase(), password, recaptcha);
  }

  onChange = (recaptcha) => {
    this.setState({ recaptcha });
  }

  handleFieldChange = field => ({ target: { value } }) => this.setState({
    [field]: value,
  })

  render() {
    const {
      username, password, regCode, recaptcha, error,
    } = this.state;
    const { isLoading, errorMsg } = this.props;

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
                value={username}
                onChange={this.handleFieldChange('username')}
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
                value={password}
                onChange={this.handleFieldChange('password')}
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
                value={regCode}
                onChange={this.handleFieldChange('regCode')}
              />
              {error.regCode && <div className="input-error">{error.regCode}</div>}
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6Le6PYQUAAAAALpivyOQasj9vCKgyXJ6Fks__JM5"
            onChange={this.onChange}
          />
          {errorMsg && <div className="input-error">{errorMsg}</div>}
          <div className={`card-btn ${(!recaptcha) ? 'disable' : ''}`}>
            <button onClick={this.handleRegister} type="submit">
              {isLoading && (<div className="loader" />)}
              {isLoading ? 'Please wait' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
