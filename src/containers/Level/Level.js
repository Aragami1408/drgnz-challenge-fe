import { connect } from 'react-redux';
import {
  getStageList,
} from '../../reducers/stages';
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
  errorMsg: getError(state),
});

const mapDispatchToProps = {
  downloadLevelDetail: LevelActions.downloadLevelDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Level);
