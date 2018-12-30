import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as history from '../../common/history';

export class Login extends PureComponent {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
    updateUserInfo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    errorMsg: PropTypes.string,
  }

  static defaultProps = {
    isLoading: false,
    errorMsg: '',
  }

  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      fullName: user.fullName || '',
      username: user.username || '',
      password: '',
      oldPassword: '',
      error: {},
    };
  }


  componentDidMount() {
    document.title = 'Account & Profile - Drgnz Challenge';
  }

  goBack = () => {
    // const { history } = this.props;
    history.goBack();
  }

  validUsername = (username) => {
    if (!username || !username.trim()) return 'Username cannot be empty!';
    if (username.length < 3) return 'Username must contains at least 3 characters';
    if (!/^[a-zA-Z_0-9]{3,}$/.test(username)) return 'Invalid username. Can only contains a-z, 0-9 and _';
    return null;
  }

  validOldPassword = (oldPassword) => {
    if (!oldPassword || !oldPassword.trim()) return 'Old password is required!';
    return null;
  }

  validPassword = (password) => {
    if (!password) return '';
    if (!/^.{6,}$/.test(password)) return 'Password must contains at least 6 characters';
    return null;
  }

  handleUpdate = () => {
    const {
      username,
      fullName,
      password,
      oldPassword,
    } = this.state;
    const { updateUserInfo } = this.props;
    let hasError = false;
    const error = {};

    error.username = this.validUsername(username);
    hasError = hasError || !!error.username;
    error.password = this.validPassword(password);
    hasError = hasError || !!error.password;
    error.oldPassword = this.validOldPassword(oldPassword);
    hasError = hasError || !!error.oldPassword;

    if (hasError) {
      this.setState({ error });
      return;
    }
    updateUserInfo({
      username,
      fullName,
      password,
      oldPassword,
    });
  }

  handleFieldChange = field => ({ target: { value } }) => this.setState({
    [field]: value,
  })

  render() {
    const {
      username,
      fullName,
      password,
      oldPassword,
      error,
    } = this.state;
    const { isLoading, errorMsg } = this.props;

    return (
      <div id="card-wrapper">
        <div className="account-card">
          <div className="card-header">
            <div>
              {`Hi,  ${username || fullName || 'Drgnz'}`}
            </div>
          </div>
          <div className="card-input-wrapper">
            <div className="card-input">
              <div className="input-label">Username</div>
              <input
                value={username}
                className={`input-form ${error.username ? 'has-error' : ''}`}
                type="text"
                disabled
              />
              {error.username && <div className="input-error">{error.username}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">Full Name</div>
              <input
                value={fullName}
                className="input-form"
                type="text"
                onChange={this.handleFieldChange('fullName')}
              />
            </div>
            <div className="card-input">
              <div className="input-label">Old Password</div>
              <input
                value={oldPassword}
                className={`input-form ${error.oldPassword ? 'has-error' : ''}`}
                type="password"
                onChange={this.handleFieldChange('oldPassword')}
              />
              {error.oldPassword && <div className="input-error">{error.oldPassword}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">New Password</div>
              <input
                value={password}
                className={`input-form ${error.password ? 'has-error' : ''}`}
                type="password"
                onChange={this.handleFieldChange('password')}
              />
              {error.password && <div className="input-error">{error.password}</div>}
            </div>
          </div>
          {errorMsg && <div className="input-error">{errorMsg}</div>}
          <div className="card-btn">
            <button onClick={this.handleUpdate} type="submit">
              {isLoading && (<div className="loader" />)}
              {isLoading ? 'Please wait' : 'Save'}
            </button>
          </div>
          <div className="card-footer">
            <div>
              <Link to="/" className="signup-link">Back To Home</Link>
            </div>
            <div>
              <div onClick={this.goBack} className="signup-link">
                Go Back
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
