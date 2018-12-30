import { connect } from 'react-redux';
import {
  actions as AdminActions,
  getStatus,
  getError,
} from '../../reducers/admin';
import { getStageList } from '../../reducers/stages';
import AddLevel from '../../comopnents/AddLevel';

const mapStateToProps = state => ({
  isLoading: getStatus(state),
  errorMsg: getError(state),
  stageList: getStageList(state),
});

const mapDispatchToProps = {
  submitLevel: AdminActions.submitLevell,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLevel);
