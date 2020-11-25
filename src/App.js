import React from "react";
import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import reducer from "./redux/reducers/";
import { createStore } from "redux";
import thunk from 'redux-thunk';

import Login from './views/Login/Login';
import { MainView } from './views/MainView/MainView';

import { importGenericCss } from './genericCssImports'
import PatientForm from "./components/forms/PatientForm";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)));

function App() {
  useEffect(() => {
    importGenericCss();
  }, [])

  return (
    <div className='app'>
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/home" render={MainView} /> */}
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/patient/new">
              <PatientForm></PatientForm>
            </Route>
            <Route exact path="/">
              <MainView></MainView>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
