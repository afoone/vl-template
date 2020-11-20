import React from "react";
import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import reducer from "./redux/reducer";
import { createStore } from "redux";

import Login from './views/Login/Login';
import { MainView } from './views/MainView/MainView';
import { appMiddleware } from "./redux/middlewares/app";
import { apiMiddleware } from "./redux/middlewares/core";

import { importGenericCss } from './genericCssImports'
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(appMiddleware, apiMiddleware),
  ));

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
