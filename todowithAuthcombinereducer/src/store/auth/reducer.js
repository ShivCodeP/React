import { LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";

const initState = {
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || ""
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      saveData("token", payload);
      saveData("isAuth", true);
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case LOGIN_FAIL:
      saveData("token", "");
      saveData("isAuth", false);

      return {
        ...state,
        isAuth: false,
        token: ""
      };

    default:
      return state;
  }
};

export { authReducer };
