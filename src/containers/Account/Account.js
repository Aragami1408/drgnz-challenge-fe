import { connect } from 'react-redux';
import {
  selectUser,
  selectStatus,
  selectError,
  actions as UserActins,
} from '../../reducers/user';
import Account from '../../comopnents/Account';

const mapStateToProps = state => ({
  user: selectUser(state),
  isLoading: selectStatus(state),
  errorMsg: selectError(state),
});

const mapDispatchToProps = {
  updateUserInfo: UserActins.updateUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
