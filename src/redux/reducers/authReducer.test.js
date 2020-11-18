import { LOGIN, LOGOUT } from '../actions/auth'
import authReducer from './authReducer'

test(
    "si no le pasamos una acción nos deberia devolver el mismo estado",
    () => {
        const state = authReducer({}, { type: undefined })
        expect(state).toStrictEqual({})
    }
)

test(
    "login incluye el usuario en el estado",
    () => {
        const state = authReducer({}, { type: LOGIN, payload: { name: "Javi" } })
        expect(state).toStrictEqual({
            user: {
                name: "Javi"
            }
        })
    }
)

test(
    "login sustituye el usuario en el estado",
    () => {
        const initialState = {
            user: {
                name: "Javi"
            }
        }
        const state = authReducer(initialState, { type: LOGIN, payload: { name: "Alfonso" } })
        expect(state).toStrictEqual({
            user: {
                name: "Alfonso"
            }
        })
    }
)

test(
    "logout",
    () => {
        const initialState = {
            user: {
                name: "Javi"
            }
        }
        const state = authReducer(initialState, { type: LOGOUT })
        expect(state.user).toBeFalsy()

    }
)

//     *.test.js
//     *.spec.js
// __test__
// testing library / enzyme