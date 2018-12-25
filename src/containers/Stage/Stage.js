import { connect } from 'react-redux';
import {
  getStatus,
  getError,
  getStage,
  actions,
} from '../../reducers/stage';
import Stage from '../../comopnents/Stage';

const mapStateToProps = state => ({
  isLoading: getStatus(state),
  error: getError(state),
  stage: getStage(state),
});

const mapDispatchToProps = {
  downloadStageDetail: actions.downloadStageDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
