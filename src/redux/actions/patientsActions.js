export const ADD_PATIENT='ADD_PATIENT'
export const EDIT_PATIENT='EDIT_PATIENT'
export const DELETE_PATIENT='REMOVE_PATIENT'
export const ADD_PATIENTS='ADD_PATIENTS'

const genericPatientActionCreator = payload => type => ({type:type, payload:payload})   

// export const addPatient = patient => ({type:ADD_PATIENT,payload:patient})
// export const editPatient = (patient) => ({type:EDIT_PATIENT,payload:patient})
// export const removePatient = (patient) => ({type:REMOVE_PATIENT,payload:patient})

//TODO Testear si esta bien, igual me he venido arriba y hay que descomentar lo de arriba
export const addPatient = patient => genericPatientActionCreator(patient)(ADD_PATIENT)
export const addPatients = patients =>  genericPatientActionCreator(patients)(ADD_PATIENTS)
export const editPatient = patient => genericPatientActionCreator(patient)(EDIT_PATIENT)
export const deletePatient = id => genericPatientActionCreator(id)(DELETE_PATIENT)
// export const getPatients = () => ({type:GET_PATIENTS})