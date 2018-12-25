import {
  call, put, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  GET_LEVEL_DETAIL_START,
  actions as LevelAction,
} from '../reducers/level';

export function* handleDownloadingLevelDetail() {
  while (true) {
    const { payload } = yield take(GET_LEVEL_DETAIL_START);
    try {
      const { id } = payload;
      const { downloadLevelDetail, timeout } = yield race({
        downloadLevelDetail: call(Api.downloadLevelDetail, id),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(LevelAction.downloadLevelDetailFailed('Unable to connect to server.\nPlease try again later!'));
        Toast.error('Unable to connect to server.\nPlease try again later!');
        continue;
      }
      const { error, response } = downloadLevelDetail;
      if (error) {
        const errorMsg = Api.getNiceErrorMsg(error.response);
        yield put(LevelAction.downloadLevelDetailFailed(errorMsg));
        Toast.error(errorMsg);
        continue;
      }
      const { data } = response;
      console.log(data);
      yield put(LevelAction.downloadLevelDetailSuccess(data));
    } catch (error) {
      yield put(LevelAction.downloadLevelDetailFailed(error));
      console.log(error);
    }
  }
}

export default function* authFlow() {
  yield all([
    handleDownloadingLevelDetail(),
  ]);
}
