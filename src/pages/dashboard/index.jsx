
import PatientsModule from '../../views/PatientsModule/PatientsModule';
import { Box } from '@material-ui/core';
import Layout from '../../components/Layout/Layout'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
// import { useRef } from "react"
import { store } from 'react-notifications-component';
// import NewPatientView from '../../views/NewPatientView';







const MainView = () => {
  // let notif = useRef();
  //   const [view, setView] = useState(PATIENTS_VIEW);

  //   const changeView = useCallback(view => {
  //     setView(view);
  //   }, []);

  // const { path, url } = useRouteMatch();
  // console.log(path);

  const displayAddMessage = () => {
    store.addNotification({
      title: "Edited!",
      message: "List Successfully Edited",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  const displayDeleteMessage = () => {
    store.addNotification({
      title: "Delete Old Todo",
      message: "Shift to next task",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  return (
    // <div className='main-view'>
    //   <div className='main-view__main-header'>
    //     <MainHeader></MainHeader>
    //     {/* <MainHeader changeView={changeView}></MainHeader> */}
    //   </div>
    //   <Box display='flex' className='main-view__main-content'>
    //     <Switch>
    //       <Route path = {`${path}/new`}>
    //           <NewPatientView/>
    //       </Route>
    //       <Route exact path={path}>
    //         <PatientsModule />
    //       </Route>
    //     </Switch>
    //     {/* {view === PATIENTS_VIEW && <PatientsModule />} */}
    //     {/* {view === CONTROL_AGUAS_VIEW && <ControlAguasModule />} */}
    //   </Box>
    // </div>
    <Layout>
      <Box display='flex' className='main-view__main-content'>
        <ReactNotification />
        <PatientsModule displayAddMessage={displayAddMessage} />
      </Box>
    </Layout>
  );
}
export default MainView;
