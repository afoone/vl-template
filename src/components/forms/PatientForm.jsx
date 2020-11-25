import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

const PatientForm = () => {


    // recupera id de la ruta 

    // si tengo id => recupero el paciente

    // asigno los datos del paciente a los datos del formulario

    const [nombre, setNombre] = useState("")



    // grabar : si tenía el id (que lo he3 sacado de la ruta), hago un put, sino  lo tenía hago un post

    // const patient = useSelector(state => state.patient.patient)

    return (
        <div className="patient-form">
            <TextField value={nombre} onChange={e => setNombre(e.target.value)}></TextField>
        </div>
    )
}

export default PatientForm
