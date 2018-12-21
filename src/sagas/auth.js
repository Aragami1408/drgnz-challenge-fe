import {
  call, put, select, all, take,
} from 'redux-saga/effects';
import { AuthSession, Constants } from 'expo';
import { Alert } from 'react-native';
import Api, { getAuthWebViewUrl } from '../../api';
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
} from '../../reducers/auth';
import { getVoyageList, actions as voyageListAction } from '../../reducers/voyages';
import { navigateToCurrentVoyage } from '../voyageList';
import NavigationService from '../../common/NavigationService';

export function* checkAuthentication() {
  try {
    const auth = yield select(isAuthenticated);
    const hasAuthed = yield select(hasPreviouslyAuthenticated);

    if (!auth && !hasAuthed) {
      yield call(NavigationService.gotoLogin);
    } else if (hasAuthed) {
      const token = yield select(getToken);

      yield call(Api.setToken, token);
      yield put(authAction.confirmUserValidated());
      yield call(navigateToCurrentVoyage);
      yield put(voyageListAction.downloadVoyageListStart());
      yield call(NavigationService.goToHome);
    }
  } catch (error) {
    yield put({ type: AUTH_USER_LOGIN_FAIL, payload: { error: error.message } });
  }
}

export function* navigateOnTokenAuth() {
  while (true) {
    yield take(AUTH_USER_LOGIN_SUCCESS_TOKEN);
    yield call(navigateToCurrentVoyage);
    yield put(voyageListAction.downloadVoyageListStart());
    yield call(NavigationService.goToHome);
  }
}

export function* handleUserLogin() { // eslint-disable-line no-underscore-dangle
  while (true) {
    yield take(AUTH_USER_LOGIN_START);
    const redirectUrl = yield call(AuthSession.getRedirectUrl);
    const { deviceId, installationId, sessionId } = Constants;
    const id = deviceId || installationId || sessionId;
    const result = yield call(AuthSession.startAsync, {
      authUrl: `${getAuthWebViewUrl()}?redirect_uri=${redirectUrl}&device_id=${id}`,
    });
    if (result.type === 'success') {
      const { token, username } = result.params;

      yield call(Api.setToken, token);
      yield put(authAction.loginWithToken(token, username));
    }
  }
}

export function* handleUserLogout() {
  while (true) {
    yield take(AUTH_USER_LOGOUT_START);
    // select item need to be checked before logging out
    const voyageList = yield select(getVoyageList) || [];
    if (voyageList.length !== 0) {
      Alert.alert('You cannot logout when you have incomplete voyages. Please close them out before attempting to logout.');
    } else {
      yield put({ type: AUTH_USER_LOGOUT });
      // gotoLogin will cause app crash
      yield call(NavigationService.navigate, 'Login');
    }
  }
}

export default function* authFlow() {
  yield all([
    checkAuthentication(),
    handleUserLogin(),
    navigateOnTokenAuth(),
    handleUserLogout(),
  ]);
}