import { createStore, compose, combineStore, applyMiddleware } from "redux";
import AuthReducer from "./Auth/reducer";
import thunk from "redux-thunk";

export const store = createStore(AuthReducer, applyMiddleware(thunk));

console.log(store.getState());
