import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Login extends PureComponent {

  static propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string,
  }

  static defaultProps = {
    fullname: '',
  }

  componentDidMount() {
    document.title = 'Account & Profile';
  }
  render() {
    const { username, fullname } = this.props;
    return (
      <div id="card-wrapper">
        <div className="account-card">
          <div className="card-header">
            <div>Hi, {username || fullname || 'Drgnz'}</div>
          </div>
          <div className="card-input-wrapper">
            <div className="card-input">
              <div className="input-label">Username</div>
              <input className="input-form" type="text"/>
            </div>
            <div className="card-input">
              <div className="input-label">Full Name</div>
              <input className="input-form" type="text"/>
            </div>
            <div className="card-input">
              <div className="input-label">New Password</div>
              <input className="input-form" type="password"/>
            </div>
          </div>
          <div className="card-btn">
            <a href="/">Save</a>
          </div>
          <div className="card-footer">
            <div>
              <Link to="/" className="signup-link">Back To Home</Link>
            </div>
            <div>
              <Link to="/" className="signup-link">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
