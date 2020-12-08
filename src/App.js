import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login/Login';
import { MainView } from './views/MainView/MainView';
import { importGenericCss } from './genericCssImports';
import HookForm from './components/hookformdemo/HookForm';

const App = () => {
  useEffect(() => {
    importGenericCss();
  }, []);

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/patients'>
            <MainView></MainView>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <MainView></MainView>
          </Route>
          <Route path='/demo'>
            <HookForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
