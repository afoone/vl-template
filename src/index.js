import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { persistor } from './redux/store';
import { fetchAllPatients } from './redux/actions/patientsActions';
import { PersistGate } from 'redux-persist/integration/react'
import './i18n';


store.dispatch(fetchAllPatients());


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
