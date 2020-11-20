import { LOGIN, LOGOUT, ERROR } from '../actions/auth'

const initialState = {
    user: {},
    token: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload, error: undefined }
        case LOGOUT:
            return { ...state, user: undefined, error: undefined }
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default reducer


// {
//     auth: { 
//         user: {
//             name: "Javi",
//             rol: "admin"
//         },
//         token: "09398402934809"
//      },
//     patient: {nomvbre: 2}
// }