import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Login extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoggingIn: PropTypes.bool,
    errorMsg: PropTypes.string,
  }

  static defaultProps = {
    isLoggingIn: false,
    errorMsg: '',
  }

  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    document.title = 'Login - Drgnz Challenge 2018';
  }

  handleLogin = () => {
    const { login, isLoggingIn } = this.props;
    if (isLoggingIn) return;
    const { username, password } = this.state;
    login(username.trim(), password.trim());
  }

  handleFieldChange = field => ({ target: { value } }) => this.setState({
    [field]: value,
  })

  render() {
    const { username, password } = this.state;
    const { isLoggingIn, errorMsg } = this.props;

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
              <input
                className="input-form"
                type="text"
                value={username}
                onChange={this.handleFieldChange('username')}
              />
            </div>
            <div className="card-input">
              <div className="input-label">Password</div>
              <input
                className="input-form"
                type="password"
                value={password}
                onChange={this.handleFieldChange('password')}
              />
              {errorMsg && <div className="input-error">{errorMsg}</div>}
            </div>
          </div>
          <div className="card-btn">
            <button onClick={this.handleLogin} type="submit">
              {isLoggingIn && (<div className="loader" />)}
              {isLoggingIn ? 'Please wait' : 'Login'}
            </button>
          </div>
          <div className="card-footer">
            <div>
              Want to join? <Link to="/signup" className="signup-link">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
