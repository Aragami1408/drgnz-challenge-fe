import { connect } from 'react-redux';
import {
  getStageList,
} from '../../reducers/stages';
import {
  getStatus as getSubmissionStatus,
  actions as SubmissionActions,
} from '../../reducers/submission';
import {
  getLevel,
  getError,
  getStatus,
  actions as LevelActions,
} from '../../reducers/level';
import Level from '../../comopnents/Level';

const mapStateToProps = state => ({
  stageList: getStageList(state),
  level: getLevel(state),
  isLoading: getStatus(state),
  isSubmitting: getSubmissionStatus(state),
  errorMsg: getError(state),
});

const mapDispatchToProps = {
  downloadLevelDetail: LevelActions.downloadLevelDetail,
  submitFlag: SubmissionActions.submitFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(Level);
