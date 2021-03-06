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
      return { ...state, patients: [...state.patients.filter(i => i.id !== payload.id), payload] };
    case DELETE_PATIENT:
      return {
        ...state,
        patients: patients.filter(p => p.id !== payload),
      };
    // case SHOW_IS_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case HIDE_IS_LOADING:
    //   return {
    //     ...state,
    //     isLoading: false
    //   };
    default:
      return state;
  }
};
export default reducer;
