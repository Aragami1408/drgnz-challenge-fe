import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as history from '../../common/history';

export class Login extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    fullname: PropTypes.string,
  }

  static defaultProps = {
    fullname: '',
    username: '',
  }

  constructor(props) {
    super(props);

    const { fullname, username } = props;

    this.state = {
      fullname,
      username,
    };
  }


  componentDidMount() {
    document.title = 'Account & Profile - Drgnz Challenge 2018';
  }

  goBack = () => {
    // const { history } = this.props;
    history.goBack();
  }

  render() {
    const { username, fullname } = this.state;

    return (
      <div id="card-wrapper">
        <div className="account-card">
          <div className="card-header">
            <div>
              {`Hi,  ${username || fullname || 'Drgnz'}`}
            </div>
          </div>
          <div className="card-input-wrapper">
            <div className="card-input">
              <div className="input-label">Username</div>
              <input disabled value={username} className="input-form" type="text" />
            </div>
            <div className="card-input">
              <div className="input-label">Full Name</div>
              <input value={fullname} className="input-form" type="text" />
            </div>
            <div className="card-input">
              <div className="input-label">New Password</div>
              <input className="input-form" type="password" />
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
