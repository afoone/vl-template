import React from "react";
import { useEffect } from 'react';

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import reducer from "./redux/reducer";
import { createStore } from "redux";

import Login from './views/Login/Login';
import { MainView } from './views/MainView/MainView';
import AuthRoute from "./components/AuthRoute";
import { appMiddleware } from "./redux/middlewares/app";
import { apiMiddleware } from "./redux/middlewares/core";

import { importGenericCss } from './genericCssImports'
import { composeWithDevTools } from "redux-devtools-extension";

// const createStoreWithMiddleware = applyMiddleware(
//   appMiddleware,
//   apiMiddleware
// )(createStore);

// const store = createStoreWithMiddleware(reducer);

const store = createStore(
  reducer, 
  composeWithDevTools(
  applyMiddleware(appMiddleware,apiMiddleware),
));

function App() {
  useEffect(() => {
    importGenericCss();
  }, [])

  return (
    <div className='app'>
      <Provider store={store}>
        <Router exact path='/'>
          <Switch>
            <AuthRoute path="/home" render={MainView} type="private" />
            <AuthRoute path="/login" type="guest">
              <Login />
            </AuthRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
