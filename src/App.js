import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login/Login';
import { MainView } from './views/MainView/MainView';
import { importGenericCss } from './genericCssImports';
import PatientForm from './components/forms/PatientForm';

const App = () => {
  useEffect(() => {
    importGenericCss();
  }, []);

  return (
    <div className='app' style={{backgroundColor:"#edecec"}}>
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
          {/* <Route path='/patient/new'>
            <PatientForm></PatientForm>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
