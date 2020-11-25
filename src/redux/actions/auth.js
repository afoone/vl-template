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

export const loginAsync = (username, password) => {
  return function(dispatch){
    return getUserByUsername(username).then(
      (res) => dispatch(commitLogin(res.data.user))
    )
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  };
};