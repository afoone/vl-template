import { getUserByUsername } from '../../api/usersApi';

//Acciones
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ERROR = "ERROR"

const commitLogin = user => {

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

export const login = (dispatch, username, password) => {
  getUserByUsername(username).then(
    res => {
      const user = res.data[0];
      dispatch(commitLogin(user))
    }
  ).catch(
    dispatch({
      type: ERROR,
      payload: "no se ha podido conectar con el servidor"
    })
  )
}

export const logout = () => {
  return {
    type: LOGOUT
  };
};