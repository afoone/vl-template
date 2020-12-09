import { getUserByUsername , updateUser} from '../../api/usersApi';
import i18n from '../../i18n'

//Acciones
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ERROR = "ERROR"
export const UPDATE = "UPDATE"

export const commitLogin = user => {

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

export const commitUpdate= user => {
  return {
    type: UPDATE,
    payload: user
  };
};

export const loginAsync = (username, password) => {
  return function (dispatch) {
    console.log("login async", username)
    return getUserByUsername(username).then(
      res => {
        const user = res.data[0]
        if (user.language) {
          i18n.changeLanguage(user.language)
        }
        return dispatch(commitLogin(user))
      }
    )
  }
}

export const update = (user) => {
  return dispatch => {
    return updateUser(user).then(
      ({data}) => dispatch(commitUpdate(data))
    )
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  };
};