import {
  ADD_PATIENT,
  ADD_PATIENTS,
  EDIT_PATIENT,
  DELETE_PATIENT,
  ADD_PATIENTS_OVERWRITING,
} from '../actions/patientsActions';

const initialState = {
  patients: [],
};

const reducer = (state = initialState, action) => {
  const { patients } = state;
  const { type, payload } = action;

  switch (type) {
    case ADD_PATIENT:
      return { ...state, patients: [...patients, payload] };
    case ADD_PATIENTS:
      return { ...state, patients: [...patients, ...payload] };
    case ADD_PATIENTS_OVERWRITING:
      return { ...state, patients: [...payload] };
    case EDIT_PATIENT:
      patients.forEach((patient, i) => {
        if (patient.id === payload.id) {
          patients[i] = payload;
        }
      });
      return { ...state };
    case DELETE_PATIENT:
      return {
        ...state,
        patients: patients.filter(p => p.id !== payload),
      };
    default:
      return state;
  }
};
export default reducer;
