import { combineReducers } from 'redux'
import authReducer from './authReducer'
import patientReducer from './patientsReducer'

export default combineReducers(
    {
        auth: authReducer,
        patient: patientReducer
    }
)