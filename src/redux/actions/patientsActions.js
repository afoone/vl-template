import { getAllPatients, createPatient, editPatient } from "../../api/patientsApi"

export const ADD_PATIENT = 'ADD_PATIENT';
export const EDIT_PATIENT = 'EDIT_PATIENT';
export const DELETE_PATIENT = 'REMOVE_PATIENT';
export const ADD_PATIENTS = 'ADD_PATIENTS';
export const ADD_PATIENTS_OVERWRITING = 'ADD_PATIENTS_OVERWRITING';

const genericPatientActionCreator = payload => type => ({ type: type, payload: payload });

export const addPatientCommit = patient => genericPatientActionCreator(patient)(ADD_PATIENT);
export const editPatientCommit = patient => genericPatientActionCreator(patient)(EDIT_PATIENT);
export const deletePatient = id => genericPatientActionCreator(id)(DELETE_PATIENT);
export const addPatients = patients => genericPatientActionCreator(patients)(ADD_PATIENTS);
export const addPatientsOverwriting = patients => genericPatientActionCreator(patients)(ADD_PATIENTS_OVERWRITING);
export const fetchAllPatients = () => {
    return (dispatch) => getAllPatients()
        .then(({ data }) => dispatch(addPatientsOverwriting(data)))
        .catch(console.error);
};

export const addPatient = patient => {
    return (dispatch) => {
        createPatient(patient).then(
            ({ data }) => dispatch(addPatientCommit(data))
        )

    }
}

export const updatePatient = patient => {
    return (dispatch) => {
        editPatient(patient).then(
            ({ data }) => dispatch(editPatientCommit(data))
        )
    }
}