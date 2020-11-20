import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Popover, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { DataGrid } from '@material-ui/data-grid';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient } from '../../redux/actions/patientsActions';


const PatientsModule = () => {
    // const [patients, setPatients] = useState([]);
    const [rowsSelecteds, setRowsSelecteds] = useState([]);
    const patients = useSelector(state => state.patients)
    const dispatch = useDispatch()

    const savePatient = patient => dispatch(addPatient(patient))

    const rows = [
        {
            id: 1, 
            apellidos: 'Garcia M',
            nombre: 'Javi', 
            nreg: 123124,
            nss: 4345,
            sip: 123141324235,
            nhist: 123412,
            fnac: '09/09/1993',
            turno: 1,
            sexo: 'Hombre'
        }
    ]

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
    ]

    const addRowToSelecteds = (rowData) => {
        setRowsSelecteds(rowsSelecteds.concat(rowData))
    }
    const deleteRowFromSelecteds = (rowData) => {
        // setRowsSelecteds(rowsSelecteds.concat(rowData))
    }

    return (
        <Box display='flex' flexGrow='1' flexDirection='column'>
            <Box display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <PeopleAltIcon></PeopleAltIcon>
                    <Typography variant='h5' color='textPrimary'>Pacientes</Typography>
                </Box>
                <Box>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Buscador generico</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon></SearchIcon>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <Button onClick = {savePatient} variant='contained' color='primary'>Nuevo paciente</Button>
                </Box>
            </Box>
            <DataGrid 
                onRowSelected={({data, isSelected}) => {
                    isSelected ? addRowToSelecteds(data) 
                    : deleteRowFromSelecteds(data)
                }} 
                rows={rows} 
                columns={columns} 
                checkboxSelection 
            ></DataGrid>
            <Popover
                open = {false}
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
    )
}
export default PatientsModule