import {
  Box,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
// import { Redirect, useRouteMatch } from 'react-router-dom';
import Title from '../../components/basic/Title';
import PatientList from '../../pages/patients/PatientList';
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import PatientForm from '../../pages/patients/PatientForm';
import { useTranslation } from 'react-i18next';
import AdminPermissionHOC from '../../auth/AdminPermissionHOC';

const PatientsModule = ({ displayAddMessage }) => {

  const [newPatientClicked, setNewPatientClicked] = useState(false);
  // const { path, url } = useRouteMatch();
  const { t } = useTranslation()

  const [paneOpen, setPaneOpen] = useState(false)
  const [viewMode, setViewMode] = useState(false)



  return (
    <>
      {/* {newPatientClicked && <Redirect to={`${path}/new`} />} */}
      <Box display='flex' flexGrow='1' flexDirection='column'>
        <Box display='flex' justifyContent='space-between'>
          <Title title="patients" />
          <Box display="flex" alignItems="right" style={{ padding: "0.5rem", marginLeft: "1rem" }}>
            <AdminPermissionHOC>
              <Button
                onClick={() => setPaneOpen(-1)}
                variant='contained'
                color='primary'
              >
                {t("new_patient", "Neue Patientung")}
              </Button>
            </AdminPermissionHOC>
          </Box>
        </Box>

        <PatientList edit={(id, viewMode) => {
          setPaneOpen(id);
          setViewMode(viewMode)
          // displayAddMessage()
        }
        } />

      </Box>
      <SlidingPane
        closeIcon={<CloseOutlinedIcon />}
        isOpen={!!paneOpen}
        title="Nuevo Paciente"
        width="40%"
        onRequestClose={() => setPaneOpen(false)}
      >

        <PatientForm close={() => setPaneOpen(false)} id={paneOpen} viewMode={viewMode} displayAddMessage={() => displayAddMessage()} />
      </SlidingPane>
    </>
  );
};
export default PatientsModule;
