import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppComponent from '../containers/App';


import configureStore from '../store';

const { store, persistor } = configureStore();

const AppRoot = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppComponent />
      <ToastContainer
        position="top-right"
        autoClose={1750}
        hideProgressBar
        pauseOnHover
        bodyClassName="center-toast-body"
      />
    </PersistGate>
  </Provider>
);

export default AppRoot;
