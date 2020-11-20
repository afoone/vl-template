import {
    ADD_PATIENT,
    addPatient,
    DELETE_PATIENT,
    deletePatient,
    EDIT_PATIENT,
    editPatient,
    getPatients,
    GET_PATIENTS,
    ADD_PATIENTS,
    addPatients
} from './patientsActions'

test(
    "Si le pasamos un paciente nos deberia devolver una accion con type ADD_PATIENT y payload el paciente",
    () => {
        const patient= {nombre:'Javi'}
        const action = addPatient(patient)
        expect(action).toStrictEqual({type:ADD_PATIENT,payload:patient})
    }
)
test(
    "Deberia retornar una accion de tipo ADD_PATIENTS con el payload que le pasamos como entrada",
    () => {
        const patients= [{id:'1',name:'Pepe'},{id:'2',name:'Pedro'}]
        const action = addPatients(patients)
        expect(action).toStrictEqual({type:ADD_PATIENTS,payload:[...patients]})
    }
)
test(
    "Si le pasamos un paciente nos deberia devolver una accion con type EDIT_PATIENT y payload el paciente",
    () => {
        const patient= {nombre:'Javi'}
        const action = editPatient(patient)
        expect(action).toStrictEqual({type:EDIT_PATIENT,payload:patient})
    }
)
test(
    "Si le pasamos un paciente nos deberia devolver una accion con type DELETE_PATIENT y payload el paciente",
    () => {
        const patient= {id:'1'}
        const action = deletePatient(patient)
        expect(action).toStrictEqual({type:DELETE_PATIENT,payload:patient})
    }
)

// test(
//     "Retorna una accion de type 'GET_PATIENTS' y sin payload definido",
//     () => {
//         expect(getPatients()).toStrictEqual({type:GET_PATIENTS})
//     }
// )