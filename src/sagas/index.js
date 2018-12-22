import { all, take } from 'redux-saga/effects';
import { REHYDRATION_COMPLETE, SET_TOP_HISTORY_COMPLETE } from '../reducers';
import authSagas from './auth';

export default function* rootSaga() {
  yield all([
    take(REHYDRATION_COMPLETE),
    take(SET_TOP_HISTORY_COMPLETE),
  ]);

  yield all([
    authSagas(),
  ]);
}
