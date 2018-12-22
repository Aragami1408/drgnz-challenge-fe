import { connect } from 'react-redux';
import  { actions, getLoginStatus, getAuthError } from '../../reducers/auth';
import Login from '../../comopnents/Login';

const mapStateToProps = state => ({
  isLoggingIn: getLoginStatus(state),
  errorMsg: getAuthError(state),
});

const mapDispatchToProps = {
  login: actions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
