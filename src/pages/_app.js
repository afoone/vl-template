// import React from 'react';
// import { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Login';
// import { MainView } from '../views/MainView/MainView';
// import { importGenericCss } from '../genericCssImports';
// import HookForm from '../components/hookformdemo/HookForm';

// const App = () => {
//   useEffect(() => {
//     importGenericCss();
//   }, []);

//   return (
//     <div className='app'>
//       <Router>
//         <Switch>
//           <Route path='/patients'>
//             <MainView></MainView>
//           </Route>
//           <Route path='/login'>
//             <Login />
//           </Route>
//           <Route exact path='/'>
//             <MainView></MainView>
//           </Route>
//           <Route path='/demo'>
//             <HookForm />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default App;
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store';
import { fetchAllPatients } from '../redux/actions/patientsActions';
import { PersistGate } from 'redux-persist/integration/react'
import '../i18n';
import '../styles/global.css'
import Notifs from 'redux-notifications'
function MyApp({ Component, pageProps }) {
  store.dispatch(fetchAllPatients());
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={null}>
          <Component {...pageProps} />
          {/* <Notifs /> */}
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
