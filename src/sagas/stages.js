import {
  call, put, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  GET_STAGES_START,
  actions as stageAction,
} from '../reducers/stages';

export function* handleDownloadingStages() {
  yield take(GET_STAGES_START);
  try {
    const { downloadStages, timeout } = yield race({
      downloadStages: call(Api.downloadStages),
      timeout: call(delay, 15000),
    });
    if (timeout) {
      yield put(stageAction.getStagesFailed('Unable to connect to server.\nPlease try again later!'));
      Toast.error('Unable to connect to server.\nPlease try again later!');
      return;
    }
    const { error, response } = downloadStages;
    if (error) {
      yield put(stageAction.getStagesFailed(Api.getNiceErrorMsg(error.response)));
      return;
    }
    const { data } = response;
    yield put(stageAction.getStagesSuccess(data));
  } catch (error) {
    yield put(error);
    console.log(error);
  }
}

export default function* authFlow() {
  yield all([
    handleDownloadingStages(),
  ]);
};