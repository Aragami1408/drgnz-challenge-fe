import { connect } from 'react-redux';
import { getUsername, actions } from '../../reducers/auth';
import Header from '../../comopnents/Header';

const mapStateToProps = state => ({
  username: getUsername(state),
});

const mapDispatchToProps = {
  logout: actions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
