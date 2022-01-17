import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS
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

const getData = (username, page) => (dispatch) => {
  dispatch(getDataLoading());
  fetch(
    `https://api.github.com/search/users?q=${username}&page=${page}&per_page={5}`
  )
    .then((res) => res.json())
    .then((res) => dispatch(getDataSuccess(res)))
    .catch((err) => dispatch(getDataError(err)));
};

export { getData };
