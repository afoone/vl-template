import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';

//TODO Extraer a un file
const SEXO_HOMBRE = 1;
const SEXO_MUJER = 0;

//TODO Extraer a un file
const TURNO_MANYANAS = 0;
const TURNO_TARDES = 1;
const TURNO_NOCHES = 2;

const useStylesForm = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const initialFormState = {
  nombre: '',
  apellidos: '',
  nHistoria: '',
  nss: '',
  sip: '',
  sexo: '',
  fechaNac: '',
  codPostal: '',
  peso: '',
  turno: '',
  correo: '',
};

const NewPatientView = () => {
  const [formState, setFormState] = useState(initialFormState);

  const {
    nombre,
    apellidos,
    nHistoria,
    nss,
    sip,
    sexo,
    fechaNac,
    codPostal,
    peso,
    turno,
    correo,
  } = formState;

  const formsClasses = useStylesForm();

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Box minWidth='100%' p={2}>
      <Box display='flex' alignItems='center' mb={1}>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography variant='h5'> Nuevo paciente </Typography>
      </Box>
      <Paper>
        <form>
          <Box p={3}>
            <TextField
              variant='outlined'
              value={nombre}
              name='nombre'
              onChange={handleInputChange}
              label='Nombre'
            />
            <TextField
              label='Apellidos'
              name='apellidos'
              onChange={handleInputChange}
              variant='outlined'
              value={apellidos}
            />
            <TextField
              label='Correo'
              name='correo'
              onChange={handleInputChange}
              variant='outlined'
              value={correo}
            />
            <TextField
              label='N.Historia'
              name='nHistoria'
              onChange={handleInputChange}
              type='number'
              variant='outlined'
              value={nHistoria}
            />
            <TextField
              label='NSS'
              name='nss'
              onChange={handleInputChange}
              type='number'
              variant='outlined'
              value={nss}
            />
            <TextField
              label='SIP'
              name='sip'
              onChange={handleInputChange}
              type='number'
              variant='outlined'
              value={sip}
            />
            <TextField
              label='Codigo postal'
              name='codPostal'
              onChange={handleInputChange}
              type='number'
              variant='outlined'
              value={codPostal}
            />
            <TextField
              label='Peso'
              name='peso'
              onChange={handleInputChange}
              type='number'
              variant='outlined'
              value={peso}
            />
            <FormControl className={formsClasses.formControl}>
              <InputLabel>Sexo</InputLabel>
              <Select
                displayEmpty
                onChange={handleInputChange}
                name='sexo'
                value={sexo}
              >
                <MenuItem value={SEXO_HOMBRE}> {'Hombre'} </MenuItem>;
                <MenuItem value={SEXO_MUJER}> {'Mujer'} </MenuItem>;
              </Select>
            </FormControl>
            <FormControl className={formsClasses.formControl}>
              <InputLabel>Turnos</InputLabel>
              <Select
                displayEmpty
                onChange={handleInputChange}
                name='turno'
                value={turno}
              >
                <MenuItem value={TURNO_MANYANAS}> {'Manyanas'} </MenuItem>;
                <MenuItem value={TURNO_TARDES}> {'Tardes'} </MenuItem>;
                <MenuItem value={TURNO_NOCHES}> {'Noches'} </MenuItem>;
              </Select>
            </FormControl>
            <TextField
              defaultValue='1970-01-01'
              InputLabelProps={{
                shrink: true,
              }}
              label='Fecha de nacimiento'
              name="fechaNac"
              onChange={handleInputChange}
              type='date'
              value={fechaNac}
            />
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default NewPatientView;
