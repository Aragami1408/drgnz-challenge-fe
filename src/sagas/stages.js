import {
  call, put, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  GET_STAGES_START,
  actions as StagesAction,
} from '../reducers/stages';
import {
  GET_STAGE_DETAIL_START,
  actions as StageAction,
} from '../reducers/stage';

export function* handleDownloadingStages() {
  yield take(GET_STAGES_START);
  try {
    const { downloadStages, timeout } = yield race({
      downloadStages: call(Api.downloadStages),
      timeout: call(delay, 15000),
    });
    if (timeout) {
      yield put(StagesAction.getStagesFailed('Unable to connect to server.\nPlease try again later!'));
      Toast.error('Unable to connect to server.\nPlease try again later!');
      return;
    }
    const { error, response } = downloadStages;
    if (error) {
      const errorMsg = Api.getNiceErrorMsg(error.response);
      yield put(StagesAction.getStagesFailed(errorMsg));
      Toast.error(errorMsg);
      return;
    }
    const { data } = response;
    yield put(StagesAction.getStagesSuccess(data));
  } catch (error) {
    yield put(StagesAction.getStagesFailed(error));
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
        yield put(StageAction.downloadStageDetailFailed('Unable to connect to server.\nPlease try again later!'));
        Toast.error('Unable to connect to server.\nPlease try again later!');
        continue;
      }
      const { error, response } = downloadStageDetail;
      if (error) {
        const errorMsg = Api.getNiceErrorMsg(error.response);
        yield put(StageAction.downloadStageDetailFailed(errorMsg));
        Toast.error(errorMsg);
        continue;
      }
      const { data } = response;
      yield put(StageAction.downloadStageDetailSuccess(data));
    } catch (error) {
      yield put(StageAction.downloadStageDetailFailed(error));
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
