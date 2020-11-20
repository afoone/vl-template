import reducer from './patientsReducer';
import {
    addPatient,
    editPatient,
    deletePatient,
    addPatients
} from '../actions/patientsActions';


test('Dado un paciente y un estado vacio deberia dar como resultado un estado como unico elemento el recibido', () => {
    const initialState = {
        user: {
            name: "Alfonso"
        },
        patients: []
    }
    const patient = { id: 1, nombre: 'Javi' }
    const expectedResult = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Javi'
            }
        ]
    }
    const result = reducer(initialState, addPatient(patient))
    expect(result).toStrictEqual(expectedResult)
})

test('Dado un paciente y un estado con un paciente deberia dar como resultado un estado con dos pacientes', () => {
    const initialState = {
        user: {
            name: "Alfonso"
        },
        patients: [{ id: 1, nombre: 'Pepe' }]
    }
    const patient = { id: 2, nombre: 'Javi' }
    const expectedResult = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
            {
                id: 2,
                nombre: 'Javi'
            }
        ]
    }
    const result = reducer(initialState, addPatient(patient))
    expect(result).toStrictEqual(expectedResult)
})
test('Dado un paciente y un estado con un array de pacientes que incluyen el paciente deberia dar como resultado el mismo estado pero con el apciente que ya estaba incluido actualizado con los valores del paciente de entrada', () => {
    const initialState = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
            {
                id: 2,
                nombre: 'Javi'
            }
        ]
    }
    const patient = { id: 2, nombre: 'JaviEvolucionado' }
    const expectedResult = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
            {
                id: 2,
                nombre: 'JaviEvolucionado'
            }
        ]
    }
    const result = reducer(initialState, editPatient(patient))
    expect(result).toStrictEqual(expectedResult)
})
test('Dado un paciente y un estado con un array de pacientes que incluyen el paciente deberia dar como resultado el mismo estado pero habiendo eliminado al paciente de entrada', () => {
    const initialState = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
            {
                id: 2,
                nombre: 'Javi'
            }
        ]
    }
    const expectedResult = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
        ]
    }
    const result = reducer(initialState, deletePatient(2))
    expect(result).toStrictEqual(expectedResult)
})
test('Anyadir multiples pacientes', () => {
    const initialState = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
            {
                id: 2,
                nombre: 'Javi'
            }
        ]
    }
    const patientToAdd = [{
        id: 3,
        nombre: 'Pedro'
    },
    {
        id: 4,
        nombre: 'Pablo'
    }]

    const expectedResult = {
        user: {
            name: "Alfonso"
        },
        patients: [
            {
                id: 1,
                nombre: 'Pepe'
            },
            {
                id: 2,
                nombre: 'Javi'
            },
            ...patientToAdd
        ]
    }
    const result = reducer(initialState, addPatients(patientToAdd))
    expect(result).toStrictEqual(expectedResult)
})