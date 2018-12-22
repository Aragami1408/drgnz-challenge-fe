import { connect } from 'react-redux';
import { getAuth } from '../../reducers/auth';
import App from '../../comopnents/App';

const mapStateToProps = state => ({
  authenticated: getAuth(state),
});

export default connect(mapStateToProps)(App);
