import { ERROR, LOGIN, LOGOUT, UPDATE } from '../actions/auth'
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
        expect(state.user).toStrictEqual({
            name: "Javi"
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
        expect(state.user).toStrictEqual({
            name: "Alfonso"
        })
    }
)

test(
    "UPDATE sustituye el usuario en el estado",
    () => {
        const initialState = {
            user: {
                name: "Javi"
            }
        }
        const state = authReducer(initialState, { type: UPDATE, payload: { name: "Alfonso" } })
        expect(state.user).toStrictEqual({
            name: "Alfonso"
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
        expect(state.user.name).toBeFalsy()
    }
)

test(
    "error",
    () => {
        const initialState = {

        }
        const state = authReducer(initialState, { type: ERROR, payload: "los campos están vacíos" })
        expect(state).toStrictEqual(
            {
                error: "los campos están vacíos"
            }
        )
    }
)

test(
    "no hay error si hacemos login",
    () => {
        const initialState = {
            error: "hola"
        }
        const state = authReducer(initialState, { type: LOGIN, payload: {} })
        expect(state.error).toBeFalsy()
    }
)

test(
    "no hay error si hacemos logout",
    () => {
        const initialState = {
            error: "hola"
        }
        const state = authReducer(initialState, { type: LOGOUT, payload: {} })
        expect(state.error).toBeFalsy()
    }
)

//     *.test.js
//     *.spec.js
// __test__
// testing library / enzyme

