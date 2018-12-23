import { connect } from 'react-redux';
import {
  actions, getAuthStatus, getAuthError,
} from '../../reducers/auth';
import Login from '../../comopnents/Login';

const mapStateToProps = state => ({
  isLoading: getAuthStatus(state),
  errorMsg: getAuthError(state),
});

const mapDispatchToProps = {
  login: actions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
