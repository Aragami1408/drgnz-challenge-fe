// configureStore.js

import { createStore } from 'redux';
import { createMigrate, persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import migration from './migration';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
  blacklist: [],
  migrate: createMigrate(migration, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

// just in case, remove the comment below
// localStorage.clear();
