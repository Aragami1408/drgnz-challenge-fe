import {
  call, put, select, all, take, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Api from '../common/api';
import {
  LOGIN_START,
  actions as authAction,
} from '../reducers/auth';
import { push } from '../common/history';

export function* checkAuthentication() {
}

export function* navigateOnTokenAuth() {
}

export function* handleUserLogin() { // eslint-disable-line no-underscore-dangle
  while (true) {
    const { payload } = yield take(LOGIN_START);
    try {
      const { login, timeout } = yield race({
        login: call(Api.login, payload),
        timeout: call(delay, 15000),
      });
      if (timeout) {
        yield put(authAction.loginFailed('Unable to login. Please try again later!'));
        continue;
      }
      const { error, response } = login;
      if (error) {
        yield put(authAction.loginFailed(Api.getNiceErrorMsg(error.response)));
        continue;
      }
      const { data } = response;
      yield put(authAction.loginSuccess(data.token));
      push('/');
      // yield put()
    } catch (error) {
      yield put(error);
      console.log(error);
    }
  }
}

export function* handleUserLogout() {
}

export default function* authFlow() {
  yield all([
    checkAuthentication(),
    handleUserLogin(),
    navigateOnTokenAuth(),
    handleUserLogout(),
  ]);
}