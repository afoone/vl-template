import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Popover,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { DataGrid } from '@material-ui/data-grid';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPatient,
  addPatients,
  chargePatients,
} from '../../redux/actions/patientsActions';
import { getAllPatients } from '../../api/patientsApi';
import { Redirect, useRouteMatch } from 'react-router-dom';

const columns = [
  { field: 'apellidos', headerName: 'Apellidos', width: 150 },
  { field: 'nombre', headerName: 'Nombre', width: 150 },
  { field: 'nreg', headerName: 'N.Reg', width: 150 },
  { field: 'nss', headerName: 'NSS', width: 150 },
  { field: 'sip', headerName: 'SIP', width: 150 },
  { field: 'nhist', headerName: 'N.Hist', width: 150 },
  { field: 'fnac', headerName: 'F.Nacim.', width: 150 },
  { field: 'turno', headerName: 'Turno', width: 150 },
  { field: 'sexo', headerName: 'Sexo', width: 150 },
];

const PatientsModule = () => {
  const [rowsSelecteds, setRowsSelecteds] = useState([]);
  const patients = useSelector(state => state.patient.patients);
  const dispatch = useDispatch();
  const [newPatientClicked, setNewPatientClicked] = useState(false);
  const { path, url } = useRouteMatch();

  const savePatient = patient => dispatch(addPatient(patient));

  const addRowToSelecteds = rowData => {
    setRowsSelecteds(rowsSelecteds.concat(rowData));
  };
  const deleteRowFromSelecteds = rowData => {
    // setRowsSelecteds(rowsSelecteds.concat(rowData))
  };

  return (
    <>
      {newPatientClicked && <Redirect to={`${path}/new`} />}
      <Box display='flex' flexGrow='1' flexDirection='column'>
        <Box display='flex' justifyContent='space-between'>
          <Box display='flex' alignItems='center'>
            <PeopleAltIcon></PeopleAltIcon>
            <Typography variant='h5' color='textPrimary'>
              Pacientes
            </Typography>
          </Box>
          <Box>
            <FormControl variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Buscador generico
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                endAdornment={
                  <InputAdornment position='end'>
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <Button
              onClick={() => {
                setNewPatientClicked(true);
              }}
              variant='contained'
              color='primary'
            >
              Nuevo paciente
            </Button>
          </Box>
        </Box>
        <DataGrid
          onRowSelected={({ data, isSelected }) => {
            isSelected ? addRowToSelecteds(data) : deleteRowFromSelecteds(data);
          }}
          rows={patients}
          columns={columns}
          checkboxSelection
        ></DataGrid>
        <Popover
          open={false}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          The content of the Popover.
        </Popover>
      </Box>
    </>
  );
};
export default PatientsModule;
