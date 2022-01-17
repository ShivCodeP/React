import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS
} from "./actionTypes";

import { loadData, saveData } from "../../utils/localStorage";

let initState = {
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || "",
  registered: false,
  loading: false,
  error: false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case LOGIN_SUCCESS:
      saveData("isAuth", true);
      saveData("token", payload);
      return {
        ...state,
        loading: false,
        isAuth: true,
        registered: true,
        token: payload,
        error: false
      };

    case REGISTER_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGOUT_SUCCESS:
      saveData("isAuth", false);
      saveData("token", "");
      return {
        ...state,
        isAuth: false,
        token: ""
      };

    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        registered: true
      };

    default:
      return state;
  }
};

export default reducer;
