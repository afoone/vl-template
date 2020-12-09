import { TextField, MenuItem, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import './PatientForm.css'
import { addPatient, updatePatient } from '../../redux/actions/patientsActions'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientById } from '../../api/patientsApi'
import { useForm } from 'react-hook-form'
import Select from '../hookform/Select'
import { useTranslation } from 'react-i18next'
import AdminPermissionHOC from '../../auth/AdminPermissionHOC'


const PatientForm = ({ close, id, viewMode }) => {

    const { t } = useTranslation("patient")
    const { register, handleSubmit, watch, errors, reset, control } = useForm();

    const user = useSelector(state => state.auth.user)

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

    // TODO: Merece refactorizar
    const getInputProps = () => {
        return user.role === "admin" && !viewMode ? {} : { readOnly: true }
    }

    return (
        <div className="patient-form">
            <form onSubmit={handleSubmit(savePatient)} >
                <TextField
                    name="nombre" inputRef={register({ required: true })}
                    InputProps={getInputProps()}
                    error={!!errors.nombre} helperText={errors.nombre && "El nombre es requerido"}
                    label={t("name")}>
                </TextField>

                <TextField name="apellidos"
                    InputProps={getInputProps()}
                    inputRef={register({ required: true })}
                    error={!!errors.apellidos} helperText={errors.apellidos && "El apellido es requerido"}
                    label={t("family_name")} />

                <TextField label="Número de registro"
                    InputProps={getInputProps()} name="nreg" inputRef={register} ></TextField>
                <TextField label="Número de Seguridad Social"
                    InputProps={getInputProps()} name="nss" inputRef={register}  ></TextField>
                <TextField label="SIP"
                    InputProps={getInputProps()}
                    name="sip" inputRef={register({ minLength: 7, maxLength: 10, required: true })}
                    helperText={errors.sip?.type === "required" ? "El campo es requerido" : (errors.sip && "Ha de tener entre 7 y 10 cifras")}
                    error={!!errors.sip}
                ></TextField>
                <TextField label="NHC"
                    InputProps={getInputProps()}
                    name="nhist" inputRef={register} ></TextField>
                <TextField label="Fecha de nacimiento"
                    InputProps={getInputProps()}
                    name="fnac" type="date" inputRef={register} InputLabelProps={{ shrink: true }}></TextField>
                <TextField label="Turno"
                    InputProps={getInputProps()}
                    name="turno" type="number" inputRef={register} ></TextField>
                <Select label="Sexo" name="sexo" inputRef={register} control={control}>
                    <MenuItem value="Hombre">{t("man")}</MenuItem>
                    <MenuItem value="Mujer">{t("woman")}</MenuItem>
                </Select>
                <div className="buttons">
                    <AdminPermissionHOC>
                        {!viewMode && <Button type="submit" variant="contained" color="primary"  >Grabar</Button>}
                    </AdminPermissionHOC>
                    <Button variant="contained" color="secondary" onClick={close}>Cancelar</Button>
                </div>
            </form>
        </div >
    )
}

export default PatientForm
