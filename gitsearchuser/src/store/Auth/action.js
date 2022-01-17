import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from "./actionTypes";

const registerLoading = () => ({
  type: REGISTER_LOADING
});

const registerError = (err) => ({
  type: REGISTER_ERROR,
  payload: err
});

const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS
});

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

const loginUser = (data) => (dispatch) => {
  dispatch(loginLoading());
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => dispatch(loginSuccess(res.token)))
    .catch((err) => dispatch(loginError(err)));
};

const registerUser = (data) => (dispatch) => {
  dispatch(registerLoading());
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(registerSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(registerError(err));
    });
};

export { loginUser, registerUser };
