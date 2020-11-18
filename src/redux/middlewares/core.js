import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../actions/api";
import { setLoader } from "../actions/ui";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    dispatch(setLoader(true));
    const { url, method, data } = action.meta;
    axios({
      method,
      url,
      data
    })
      .then(({ data }) => dispatch(apiSuccess({ response: data })))
      .catch(error => {
        console.log(error);
        dispatch(apiError({ error: error.response.data }));
      });
  }
};