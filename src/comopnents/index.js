import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppComponent from './App';


import configureStore from '../store';

const { store, persistor } = configureStore();

const AppRoot = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppComponent />
    </PersistGate>
  </Provider>
);

export default AppRoot;
