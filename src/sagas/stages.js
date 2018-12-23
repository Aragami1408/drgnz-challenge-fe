import {
  call, put, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  GET_STAGES_START,
  GET_STAGE_DETAIL_START,
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
    yield put(stageAction.getStagesFailed(error));
    console.log(error);
  }
}

export function* handleDownloadingStageDetail() {
  while (true) {
    const { payload } = yield take(GET_STAGE_DETAIL_START);
    try {
      const { id } = payload;
      const { downloadStageDetail, timeout } = yield race({
        downloadStageDetail: call(Api.downloadStageDetail, id),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(stageAction.downloadStageDetailFailed('Unable to connect to server.\nPlease try again later!'));
        Toast.error('Unable to connect to server.\nPlease try again later!');
        continue;
      }
      const { error, response } = downloadStageDetail;
      if (error) {
        yield put(stageAction.downloadStageDetailFailed(Api.getNiceErrorMsg(error.response)));
        continue;
      }
      const { data } = response;
      console.log(data);
      yield put(stageAction.downloadStageDetailSuccess(data));
    } catch (error) {
      yield put(stageAction.downloadStageDetailFailed(error));
      console.log(error);
    }
  }
}

export default function* authFlow() {
  yield all([
    handleDownloadingStages(),
    handleDownloadingStageDetail(),
  ]);
}
