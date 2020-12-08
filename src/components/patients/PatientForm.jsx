import { TextField, MenuItem, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import './PatientForm.css'
import { addPatient, updatePatient } from '../../redux/actions/patientsActions'
import { useDispatch } from 'react-redux'
import { getPatientById } from '../../api/patientsApi'
import { useForm } from 'react-hook-form'
import Select from '../hookform/Select'


const PatientForm = ({ close, id }) => {

    const { register, handleSubmit, watch, errors, reset, control } = useForm();

    const dispatch = useDispatch()

    useEffect(() => {
        if (id > 0) {
            getPatientById(id).then(({ data }) => reset(data))
        }
    }, [id])



    const savePatient = patient => {
        console.log(patient)
        if (id > 0) {
            dispatch(updatePatient(patient))
        } else {
            dispatch(addPatient(patient))
        }
        close()
    }

    return (
        <div className="patient-form">
            <form onSubmit={handleSubmit(savePatient)} >
                <TextField
                    name="nombre" inputRef={register({ required: true })}
                    error={!!errors.nombre} helperText={errors.nombre && "El nombre es requerido"}
                    label={"Nombre"}>
                </TextField>

                <TextField name="apellidos"
                    inputRef={register({ required: true })}
                    error={!!errors.apellidos} helperText={errors.apellidos && "El apellido es requerido"}
                    label={"Apellidos"} />

                <TextField label="Número de registro" name="nreg" inputRef={register} ></TextField>
                <TextField label="Número de Seguridad Social" name="nss" inputRef={register}  ></TextField>
                <TextField label="SIP" name="sip" inputRef={register({ minLength: 7, maxLength: 10, required: true })}
                    helperText={errors.sip?.type === "required" ? "El campo es requerido" : (errors.sip && "Ha de tener entre 7 y 10 cifras")}
                    error={!!errors.sip}
                ></TextField>
                <TextField label="NHC" name="nhist" inputRef={register} ></TextField>
                <TextField label="Fecha de nacimiento" name="fnac" type="date" inputRef={register} InputLabelProps={{ shrink: true }}></TextField>
                <TextField label="Turno" name="turno" type="number" inputRef={register} ></TextField>
                <Select label="Sexo" name="sexo" inputRef={register} control={control}>
                    <MenuItem value="Hombre">Hombre</MenuItem>
                    <MenuItem value="Mujer">Mujer</MenuItem>
                </Select>
                <div className="buttons">
                    <Button type="submit" variant="contained" color="primary"  >Grabar</Button>
                    <Button variant="contained" color="secondary" onClick={close}>Cancelar</Button>
                </div>
            </form>
        </div >
    )
}

export default PatientForm
