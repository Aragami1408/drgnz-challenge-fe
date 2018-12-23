import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Login extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
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
  }

  componentDidMount() {
    document.title = 'Login - Drgnz Challenge 2018';
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress = ({ keyCode }) => {
    if (keyCode === 13) {
      this.handleLogin();
    }
  }

  handleLogin = () => {
    const { login, isLoading } = this.props;
    if (isLoading) return;
    const { username, password } = this.state;
    if (!username || !username.trim()) return;
    if (!password) return;
    login(username.trim().toLowerCase(), password);
  }

  handleFieldChange = field => ({ target: { value } }) => this.setState({
    [field]: value,
  })

  render() {
    const { username, password } = this.state;
    const { isLoading, errorMsg } = this.props;

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
              {isLoading && (<div className="loader" />)}
              {isLoading ? 'Please wait' : 'Login'}
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
