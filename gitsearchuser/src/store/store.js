import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import AuthReducer from "./Auth/reducer";
import GitReducer from "./Content/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  gitState: GitReducer,
  AuthState: AuthReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState());
