// configureStore.js

import { createStore, applyMiddleware } from 'redux';
import { createMigrate, persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import rootSaga from '../sagas';
import rootReducer, { REHYDRATION_COMPLETE } from '../reducers';
import migration from './migration';

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
  blacklist: ['system', 'level', 'stage', 'submission', 'admin', 'user', 'stages'],
  migrate: createMigrate(migration, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(
      sagaMiddleware,
    )),
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store, null, () => store.dispatch({ type: REHYDRATION_COMPLETE }));
  return { store, persistor };
};

// just in case
// when there is an unknown and mystery error
// remove the comment below
// localStorage.clear();
