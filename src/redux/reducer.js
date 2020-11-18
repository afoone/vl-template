import { API_SUCCESS, API_ERROR } from "./actions/api";
import { SET_LOADER } from "./actions/ui";
import { LOGOUT } from "./actions/auth";

const initialState = {
    isAuthUser: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    isLoading: false,
    error: null
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case API_SUCCESS:
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        return { ...state, isAuthUser: true, user: action.payload.user };

      case API_ERROR:
        return { ...state, error: action.payload };

      case SET_LOADER:
        return { ...state, isLoading: action.payload };

      case LOGOUT:
        localStorage.removeItem("user");
        return { ...state, isAuthUser: false, user: {} };

      default:
        return state;
    }
  };
  
  export default reducer;