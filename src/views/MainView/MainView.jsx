import MainHeader from '../../components/MainHeader/MainHeader';
import PatientsModule from '../PatientsModule/PatientsModule';
import './MainView.css';
import { Box } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NewPatientView from '../NewPatientView';

export const MainView = () => {
  //   const [view, setView] = useState(PATIENTS_VIEW);

  //   const changeView = useCallback(view => {
  //     setView(view);
  //   }, []);

  const { path, url } = useRouteMatch();
    console.log(path);

  return (
    <div className='main-view'>
      <div className='main-view__main-header'>
        <MainHeader></MainHeader>
        {/* <MainHeader changeView={changeView}></MainHeader> */}
      </div>
      <Box display='flex' className='main-view__main-content'>
        <Switch>
          <Route path = {`${path}/new`}>
              <NewPatientView/>
          </Route>
          <Route exact path={path}>
            <PatientsModule />
          </Route>
        </Switch>
        {/* {view === PATIENTS_VIEW && <PatientsModule />} */}
        {/* {view === CONTROL_AGUAS_VIEW && <ControlAguasModule />} */}
      </Box>
    </div>
  );
};
