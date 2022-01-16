import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";

const initState = {
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || "",
  registered: false,
  loading: false,
  error: false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        registered: true
      };
    default:
      return state;
  }
};

export default reducer;
