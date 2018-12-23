import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAuth } from '../../reducers/auth';
import {
  getError, getStageList,
  getStatus, actions,
} from '../../reducers/stages';
import App from '../../comopnents/App';

const mapStateToProps = state => ({
  authenticated: getAuth(state),
  isDownloadingStage: getStatus(state),
  requiresDownload: (getStageList(state).length === 0),
  stageErrorMsg: getError(state),
});

const mapDispatchToProps = dispatch => ({
  getStages: bindActionCreators(actions.getStages, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
