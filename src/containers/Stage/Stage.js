import { connect } from 'react-redux';
import {
  getStatus,
  getError,
  getStage,
  actions,
} from '../../reducers/stage';
import {
  selectUser,
} from '../../reducers/user';
import Stage from '../../comopnents/Stage';

const mapStateToProps = state => ({
  isLoading: getStatus(state),
  error: getError(state),
  stage: getStage(state),
  user: selectUser(state),
});

const mapDispatchToProps = {
  downloadStageDetail: actions.downloadStageDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
