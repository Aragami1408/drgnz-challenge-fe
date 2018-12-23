import { connect } from 'react-redux';
import {
  getStageList,
} from '../../reducers/stages';
import Home from '../../comopnents/Home';

const mapStateToProps = state => ({
  stages: getStageList(state),
});

export default connect(mapStateToProps)(Home);
