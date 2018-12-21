import {
  call, put, select, all, take,
} from 'redux-saga/effects';
import Api from '../common/api';
import {
  AUTH_USER_LOGIN_SUCCESS_TOKEN,
  AUTH_USER_LOGIN_FAIL,
  AUTH_USER_LOGIN_START,
  AUTH_USER_LOGOUT_START,
  AUTH_USER_LOGOUT,
  isAuthenticated,
  hasPreviouslyAuthenticated,
  getToken,
  actions as authAction,
} from '../reducers/auth';
import { push } from '../common/history';

export function* checkAuthentication() {
}

export function* navigateOnTokenAuth() {
}

export function* handleUserLogin() { // eslint-disable-line no-underscore-dangle
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