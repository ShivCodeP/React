import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS
} from "./actionTypes";

const loginLoading = () => ({
  type: LOGIN_LOADING
});

const loginError = (err) => ({
  type: LOGIN_ERROR,
  payload: err
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
});

const registerLoading = () => ({
  type: REGISTER_LOADING
});

const registerError = (err) => ({
  type: REGISTER_ERROR,
  payload: err
});

const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

const loginUser = (data) => (dispatch) => {
  console.log("entered", data);
  dispatch(loginLoading());
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(loginSuccess(res.token));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginError(err));
    });
};

export {
  loginLoading,
  loginError,
  loginSuccess,
  registerError,
  registerLoading,
  registerSuccess,
  logoutSuccess,
  loginUser
};
