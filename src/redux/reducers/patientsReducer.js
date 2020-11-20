import {
    ADD_PATIENT,
    EDIT_PATIENT,
    DELETE_PATIENT
    // GET_PATIENTS
} from '../actions/patientsActions'

const reducer = (state = {}, action) => {
    const {patients} = state
    const {type, payload} = action

    switch (type) {
        // case GET_PATIENTS:
        //     return patients;
        case ADD_PATIENT:
            return { ...state, patients: [...patients, payload]}
        case EDIT_PATIENT:
            patients.forEach((patient,i)=> {
                if (patient.id === payload.id) {
                    patients[i] = payload
                }
            });
            return { ...state, }
        case DELETE_PATIENT:
            return { 
                ...state,
                 patients: patients.filter(p => p.id !== payload) 
            }
        default:
            return state;
    }
}

export default reducer