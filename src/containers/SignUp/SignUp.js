import { connect } from 'react-redux';
import  {
  actions, getAuthStatus, getAuthError,
} from '../../reducers/auth';
import SignUp from '../../comopnents/SignUp';

const mapStateToProps = state => ({
  isLoading: getAuthStatus(state),
  errorMsg: getAuthError(state),
});

const mapDispatchToProps = {
  register: actions.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
