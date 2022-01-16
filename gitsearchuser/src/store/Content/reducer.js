import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS
} from "./actionTypes";
import { saveData, loadData } from "../../utils/localStorage";

const initState = {
  loading: false,
  data: loadData("git") || [],
  error: false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case GET_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
