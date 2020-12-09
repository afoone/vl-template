import { LOGIN, LOGOUT, ERROR , UPDATE} from '../actions/auth'

const initialState = {
    user: {},
    token: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload, error: undefined }
        case UPDATE:
            return { ...state, user: action.payload, error: undefined }
        case LOGOUT:
            return { ...state, user: {}, error: undefined }
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default reducer