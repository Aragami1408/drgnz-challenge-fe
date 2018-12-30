import { connect } from 'react-redux';
import { getUsername, actions } from '../../reducers/auth';
import { selectUser } from '../../reducers/user';
import Header from '../../comopnents/Header';

const mapStateToProps = state => ({
  username: getUsername(state),
  fullName: selectUser(state).fullName || '',
});

const mapDispatchToProps = {
  logout: actions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
