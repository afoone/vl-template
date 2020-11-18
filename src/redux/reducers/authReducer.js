import { LOGIN, LOGOUT } from '../actions/auth'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload }
        case LOGOUT:
            return { ...state, user: undefined }
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