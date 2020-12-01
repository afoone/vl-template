import {
  Box,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import Title from '../../components/basic/Title';
import PatientList from '../../components/patients/PatientList';
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import PatientForm from '../../components/patients/PatientForm'



const PatientsModule = () => {
  const [newPatientClicked, setNewPatientClicked] = useState(false);
  const { path, url } = useRouteMatch();

  const [paneOpen, setPaneOpen] = useState(false)

  return (
    <>
      {newPatientClicked && <Redirect to={`${path}/new`} />}
      <Box display='flex' flexGrow='1' flexDirection='column'>
        <Box display='flex' justifyContent='space-between'>
          <Title title="Pacientes" />
          <Box display="flex" alignItems="right" style={{ padding: "0.5rem", marginLeft: "1rem" }}>

            <Button
              onClick={() => setPaneOpen(-1)}
              variant='contained'
              color='primary'
            >
              Nuevo paciente
            </Button>
          </Box>
        </Box>

        <PatientList edit={setPaneOpen} />

      </Box>
      <SlidingPane
        closeIcon={<CloseOutlinedIcon />}
        isOpen={paneOpen}
        title="Nuevo Paciente"
        width="40%"
        onRequestClose={() => setPaneOpen(false)}
      >
        <PatientForm close={() => setPaneOpen(false)} id={paneOpen} />
      </SlidingPane>
    </>
  );
};
export default PatientsModule;
