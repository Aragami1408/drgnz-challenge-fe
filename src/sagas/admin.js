import {
  call, put, select, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  SUBMIT_LEVEL_START,
  DOWNLOAD_LEVEL_DETAIL_START,
  DOWNLOAD_STAGE_DETAIL_START,
  actions as AdminActions,
} from '../reducers/admin';


export function* handleSubmitNewLevel() { // eslint-disable-line no-underscore-dangle
  while (true) {
    const { payload } = yield take(SUBMIT_LEVEL_START);
    const { level } = payload;
    try {
      const { submitNewLevel, timeout } = yield race({
        submitNewLevel: call(Api.submitNewLevel, level), // eslint-disable-line
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(AdminActions.submitLevellFailed('Failed to update user information.\nPlease try again later!'));
        Toast.error('Failed to update user information.\nPlease try again later!');
        continue;
      }
      const { error, response } = submitNewLevel;
      if (error) {
        const errorMsg = Api.getNiceErrorMsg(error.response);
        yield put(AdminActions.submitLevellFailed(errorMsg));
        Toast.error(errorMsg);
        continue;
      }
      const { data } = response;
      console.log(data);
      yield put(AdminActions.submitLevellSuccess());
      Toast.success('New level has been added!');
      // yield put()
    } catch (error) {
      yield put(AdminActions.submitLevellFailed(error));
      console.log(error);
    }
  }
}

export default function* authFlow() {
  yield all([
    handleSubmitNewLevel(),
  ]);
}
