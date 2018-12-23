import { connect } from 'react-redux';
import {
  getStageList,
  actions,
} from '../../reducers/stages';
import Home from '../../comopnents/Home';

const mapStateToProps = state => ({
  stages: getStageList(state),
});

const mapDispatchToProps = {
  selectStage: actions.selectStageByIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
