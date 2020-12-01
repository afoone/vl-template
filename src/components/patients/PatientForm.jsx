import { TextField, Select, MenuItem, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './PatientForm.css'
import { addPatient, updatePatient } from '../../redux/actions/patientsActions'
import { useDispatch } from 'react-redux'
import { getPatientById } from '../../api/patientsApi'


const PatientForm = ({ close, id }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (id > 0) {
            getPatientById(id).then(
                ({ data }) => {
                    setNombre(data.nombre)
                    setApellidos(data.apellidos)
                    setNreg(data.nreg)
                    setNss(data.nss)
                    setSip(data.sip)
                    setNhist(data.nhist)
                    setFnac(data.fnac)
                    setTurno(data.turno)
                    setSexo(data.sexo)
                }
            )
        }
    }, [id])

    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [nreg, setNreg] = useState("")
    const [nss, setNss] = useState("")
    const [sip, setSip] = useState("")
    const [nhist, setNhist] = useState("")
    const [fnac, setFnac] = useState("")
    const [turno, setTurno] = useState("")
    const [sexo, setSexo] = useState("Hombre")



    const savePatient = () => {
        if (id > 0) {
            dispatch(updatePatient({
                id, nombre, apellidos, nreg, nss, sip, nhist, fnac, turno, sexo
            }))
        } else {
            dispatch(addPatient({
                nombre, apellidos, nreg, nss, sip, nhist, fnac, turno, sexo
            }))
        }
        close()
    }

    return (
        <div className="patient-form">
            <TextField label="Nombre" value={nombre} onChange={e => setNombre(e.target.value)}></TextField>
            <TextField label="Apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)}></TextField>
            <TextField label="Número de registro" value={nreg} onChange={e => setNreg(e.target.value)}></TextField>
            <TextField label="Número de Seguridad Social" value={nss} onChange={e => setNss(e.target.value)}></TextField>
            <TextField label="SIP" value={sip} onChange={e => setSip(e.target.value)}></TextField>
            <TextField label="NHC" value={nhist} onChange={e => setNhist(e.target.value)}></TextField>
            <TextField label="Fecha de nacimiento" value={fnac} type="date" onChange={e => setFnac(e.target.value)} InputLabelProps={{ shrink: true }}></TextField>
            <TextField label="Turno" value={turno} type="number" onChange={e => setTurno(e.target.value)} ></TextField>
            <Select label="Sexo" value={sexo} onChange={e => setSexo(e.target.value)} InputLabelProps={{ shrink: true }}>
                <MenuItem value="Hombre">Hombre</MenuItem>
                <MenuItem value="Mujer">Mujer</MenuItem>
            </Select>

            <div className="buttons">
                <Button variant="contained" color="primary" onClick={savePatient} >Grabar</Button>
                <Button variant="contained" color="secondary" onClick={close}>Cancelar</Button>
            </div>


        </div >
    )
}

export default PatientForm
