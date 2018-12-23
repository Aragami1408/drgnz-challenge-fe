import { connect } from 'react-redux';
import {
  getStatus,
  getError,
  getCurrentStage,
  actions,
} from '../../reducers/stages';
import Stage from '../../comopnents/Stage';

const mapStateToProps = state => ({
  isLoading: getStatus(state),
  error: getError(state),
  stage: getCurrentStage(state),
});

const mapDispatchToProps = {
  downloadStageDetail: actions.downloadStageDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
