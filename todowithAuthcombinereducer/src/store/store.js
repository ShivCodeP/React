import { combineReducers, createStore } from "redux";

import { reducer } from "./todos/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
