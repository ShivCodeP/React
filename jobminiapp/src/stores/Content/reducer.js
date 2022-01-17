import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_LOADING,
  POST_DATA_SUCCESS
} from "./actionTypes";

import { loadData, saveData } from "../../utils/localStorage";

let initState = {
  jobs: [],
  loading: false,
  error: false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: payload,
        error: false
      };

    default:
      return state;
  }
};

export default reducer;
