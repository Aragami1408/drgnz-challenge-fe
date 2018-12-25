import { all } from 'redux-saga/effects';
import authSagas from './auth';
import stageSagas from './stages';
import levelSagas from './level';

export default function* rootSaga() {
  yield all([
    authSagas(),
    stageSagas(),
    levelSagas(),
  ]);
}
