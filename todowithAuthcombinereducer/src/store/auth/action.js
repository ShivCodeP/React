import { LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes";

const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAIL,
    payload: err
  };
};

export { loginFailure, loginSuccess };
