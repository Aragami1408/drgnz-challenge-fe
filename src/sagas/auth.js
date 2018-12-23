import {
  call, put, select, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import Toast from '../common/toast';
import {
  LOGIN_START,
  SIGNUP_START,
  actions as authAction,
} from '../reducers/auth';
import { push } from '../common/history';

export function* handleUserLogin() { // eslint-disable-line no-underscore-dangle
  while (true) {
    const { payload } = yield take(LOGIN_START);
    try {
      const { login, timeout } = yield race({
        login: call(Api.login, payload),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(authAction.loginFailed('Unable to login.\nPlease try again later!'));
        Toast.error('Unable to login.\nPlease try again later!');
        continue;
      }
      const { error, response } = login;
      if (error) {
        yield put(authAction.loginFailed(Api.getNiceErrorMsg(error.response)));
        continue;
      }
      const { data } = response;
      yield call(Api.setToken, data.token);
      yield put(authAction.loginSuccess(data.token));
      push('/');
      // yield put()
    } catch (error) {
      yield put(authAction.loginFailed(error));
      console.log(error);
    }
  }
}

export function* handleUserLogout() {
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
        yield put(authAction.registerFailed('Unable to connect to server.\nPlease try again later!'));
        Toast.error('Unable to connect to server.\nPlease try again later!');
        continue;
      }
      const { error, response } = register;
      if (error) {
        yield put(authAction.registerFailed(Api.getNiceErrorMsg(error.response)));
        continue;
      }
      Toast.success('Welcome to Drgnz Challenge 2018');
      const { data } = response;
      const { username, token } = data;
      yield call(Api.setToken, data.token);
      yield put(authAction.registerSuccess(username, token));
      push('/');
    } catch (error) {
      yield put(authAction.registerFailed(error));
      console.log(error);
    }
  }
}

export default function* authFlow() {
  yield all([
    handleUserLogin(),
    handleUserLogout(),
    handleRegistration(),
  ]);
}