import { getUserByUsername } from '../../api/usersApi';

//Acciones
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ERROR = "ERROR"

export const commitLogin = user => {

  console.log("commit login", user)

  if (!user || user.name === "" || user.password === "") {
    return {
      type: ERROR,
      payload: "Fields are required"
    }
  }

  localStorage.setItem("user", JSON.stringify({ name: user.name }))
  return {
    type: LOGIN,
    payload: user
  };
};

// export const login = (dispatch, username, password) => {
//   getUserByUsername(username).then(
//     ({ data }) => {
//       const user = data[0];
//       dispatch(commitLogin(user))
//     }
//   ).catch(
//     dispatch({
//       type: ERROR,
//       payload: "No se ha podido conectar con el servidor"
//     })
//   )
// }
export const loginAsync = (username, password) => {
  return function (dispatch) {
    console.log("login async", username)
    return getUserByUsername(username).then(
      res => dispatch(commitLogin(res.data[0]))
    )
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  };
};