import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_LOADING,
  POST_DATA_SUCCESS
} from "./actionTypes";

const getDataLoading = () => ({
  type: GET_DATA_LOADING
});

const getDataError = (err) => ({
  type: GET_DATA_ERROR,
  payload: err
});

const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data
});

const getData = (data) => (dispatch) => {
  dispatch(getDataLoading());
  fetch("http://localhost:3000/jobs")
    .then((res) => res.json())
    .then((res) => dispatch(getDataSuccess(res)))
    .catch((err) => dispatch(getDataError(err)));
};

export { getData, getDataError, getDataLoading, getDataSuccess };
