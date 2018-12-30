import {
  call, put, select, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  UPDATE_USER_INFO_START,
  actions as UserActions,
  selectUser,
} from '../reducers/user';
import {
  actions as AuthActions,
} from '../reducers/auth';

export function* handleUserLogin() { // eslint-disable-line no-underscore-dangle
  while (true) {
    const { payload } = yield take(UPDATE_USER_INFO_START);
    const user = yield select(selectUser);
    try {
      const { updateUserInformation, timeout } = yield race({
        updateUserInformation: call(Api.updateUserInformation, user._id, payload.user), // eslint-disable-line
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(UserActions.updateUserInfoFailed('Failed to update user information.\nPlease try again later!'));
        Toast.error('Failed to update user information.\nPlease try again later!');
        continue;
      }
      const { error, response } = updateUserInformation;
      if (error) {
        const errorMsg = Api.getNiceErrorMsg(error.response);
        yield put(UserActions.updateUserInfoFailed(errorMsg));
        Toast.error(errorMsg);
        continue;
      }
      const { data } = response;
      yield call(Api.setToken, data.token);
      yield put(AuthActions.loginSuccess(data.token));
      yield put(UserActions.updateUserInfoSuccess(data));
      Toast.success('Your information has been updated successfully!');
      // yield put()
    } catch (error) {
      yield put(UserActions.updateUserInfoFailed(error));
      console.log(error);
    }
  }
}

export default function* authFlow() {
  yield all([
    handleUserLogin(),
  ]);
}
