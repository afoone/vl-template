import { TextField, MenuItem, Button, Box, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
// import './PatientForm.css'
import { addPatient, updatePatient } from '../../redux/actions/patientsActions'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientById } from '../../api/patientsApi'
import { useForm, useFieldArray } from 'react-hook-form'
import Select from '../../components/hookform/Select'
import { useTranslation } from 'react-i18next'
import AdminPermissionHOC from '../../auth/AdminPermissionHOC'
import { useState } from 'react'


const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography className="tab-panel">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const PatientForm = ({ close, id, viewMode, displayAddMessage }) => {

    const { t } = useTranslation("patient")
    const { register, handleSubmit, errors, reset, control, trigger } = useForm({
        shouldUnregister: false
    });


    const [tabValue, setTabValue] = useState(0)

    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "tratamientos"
        }
    );


    const user = useSelector(state => state.auth.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (id > 0) {
            getPatientById(id).then(({ data }) => reset(data))
        }

    }, [id])

    const handleTabChange = index => {
        trigger().then(
            res => {
                if (res) {
                    setTabValue(index)
                }
            }
        ).catch(console.error)

    }

    const savePatient = patient => {
        console.log(errors)
        const { nombre, apellidos, sip, tratamientos } = errors;
        if (nombre || apellidos || sip) {
            setTabValue(0)
        } else if (tratamientos) {
            setTabValue(1)
        } else {
            if (id > 0) {
                dispatch(updatePatient(patient))
            } else {
                dispatch(addPatient(patient))
            }
            displayAddMessage()
            close()

        }
    }

    // TODO: Merece refactorizar
    const getInputProps = () => {
        return user.role === "admin" && !viewMode ? {} : { readOnly: true }
    }

    return (
        <div className="patient-form">
            <form onSubmit={handleSubmit(savePatient)} >
                <Tabs
                    value={tabValue}
                    onChange={(e, value) => handleTabChange(value)}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label={t("main_data")} />
                    <Tab label={t("treatments")} />
                    <Tab label={t("other")} />
                </Tabs>
                <TabPanel value={tabValue} index={0} >
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
                    <Select label="Sexo" name="sexo" inputRef={register} control={control} defaultValue="">
                        <MenuItem value="Hombre">{t("man")}</MenuItem>
                        <MenuItem value="Mujer">{t("woman")}</MenuItem>
                    </Select>

                </TabPanel>
                <TabPanel value={tabValue} index={1}>

                    <Box className="tratamientos-box">
                        <Button variant="contained" color="primary" onClick={e => append({})} className="tratamientos-button">+</Button>
                        {
                            fields.map(
                                (tratamiento, index) =>
                                    <div className="tratamientos-box" key={index}>
                                        <TextField
                                            label={t("treatment")}
                                            InputProps={getInputProps()}
                                            name={`tratamientos[${index}].value`}
                                            defaultValue={tratamiento.value}
                                            helperText={errors.tratamientos && errors.tratamientos[index]?.type === "required" && "El campo es requerido"}

                                            error={errors.tratamientos && errors.tratamientos[index]}
                                            inputRef={register({ required: true })}
                                        >{t}</TextField>
                                        <Button onClick={() => remove(index)}>-</Button>
                                    </div>
                            )
                        }
                    </Box>
                </TabPanel>

                <TabPanel value={tabValue} index={2} >
                    <TextField label="Otro"
                        InputProps={getInputProps()}
                        name="otro" type="text"
                        inputRef={register} ></TextField>
                </TabPanel>


                <div className="buttons">
                    <AdminPermissionHOC>
                        {!viewMode && <Button type="submit" variant="contained" color="primary"  >Grabar</Button>}
                    </AdminPermissionHOC>
                    <Button variant="contained" color="secondary" onClick={() => {
                        close()
                        displayAddMessage()
                    }}>Cancelar</Button>
                </div>




            </form>
        </div >
    )
}

export default PatientForm
