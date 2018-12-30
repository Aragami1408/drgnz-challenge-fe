import {
  call, put, select, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import decode from 'jwt-decode';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  LOGIN_START,
  SIGNUP_START,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  actions as AuthActions,
  getToken,
} from '../reducers/auth';
import {
  actions as UserActions,
} from '../reducers/user';
import { REHYDRATION_COMPLETE } from '../reducers';

export function* handleUserLogin() { // eslint-disable-line no-underscore-dangle
  while (true) {
    const { payload } = yield take(LOGIN_START);
    try {
      const { login, timeout } = yield race({
        login: call(Api.login, payload),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(AuthActions.loginFailed('Unable to login.\nPlease try again later!'));
        Toast.error('Unable to login.\nPlease try again later!');
        continue;
      }
      const { error, response } = login;
      if (error) {
        yield put(AuthActions.loginFailed(Api.getNiceErrorMsg(error.response)));
        continue;
      }
      const { data } = response;
      yield call(Api.setToken, data.token);
      yield put(AuthActions.loginSuccess(data.token));
      // yield put()
    } catch (error) {
      yield put(AuthActions.loginFailed(error));
      console.log(error);
    }
  }
}

export function* validateToken() { // eslint-disable-line no-underscore-dangle
  while (true) {
    yield take([REHYDRATION_COMPLETE, LOGIN_SUCCESS, SIGNUP_SUCCESS]);
    try {
      const token = yield select(getToken);
      const { id } = decode(token) || {};
      const { checkToken, timeout } = yield race({
        checkToken: call(Api.getUserDetail, id, token),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        Toast.error('Unable to connect to server.\nPlease try again later!');
        return;
      }
      const { error, response } = checkToken;
      if (error) {
        yield put(AuthActions.logout(Api.getNiceErrorMsg(error.response)));
        Toast.error('Your session is expired! Please login again!');
        return;
      }
      const { data } = response;
      yield put(UserActions.downloadUserInfoSuccess(data));
      yield call(Api.setToken, data.token);
      yield put(AuthActions.loginSuccess(data.token));
    } catch (error) {
      yield put(AuthActions.loginFailed(error.message));
      console.log(error);
    }
  }
}

export function* handleRegistration() {
  while (true) {
    const { payload } = yield take(SIGNUP_START);
    try {
      const { register, timeout } = yield race({
        register: call(Api.register, payload),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(AuthActions.registerFailed('Unable to connect to server.\nPlease try again later!'));
        Toast.error('Unable to connect to server.\nPlease try again later!');
        continue;
      }
      const { error, response } = register;
      if (error) {
        yield put(AuthActions.registerFailed(Api.getNiceErrorMsg(error.response)));
        continue;
      }
      Toast.success('Welcome to Drgnz Challenge');
      const { data } = response;
      const { username, token } = data;
      yield call(Api.setToken, data.token);
      yield put(AuthActions.registerSuccess(username, token));
    } catch (error) {
      yield put(AuthActions.registerFailed(error));
      console.log(error);
    }
  }
}

export default function* authFlow() {
  yield all([
    handleUserLogin(),
    handleRegistration(),
    validateToken(),
  ]);
}
