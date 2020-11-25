import { combineReducers } from 'redux'
import authReducer from './authReducer'
import patientReducer from './patientsReducer'

const rootReducer = combineReducers(
    {
        auth: authReducer,
        patient: patientReducer
    }
)

export default rootReducer