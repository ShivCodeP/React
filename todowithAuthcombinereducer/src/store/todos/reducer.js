import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_LOADING,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  GET_SINGLE_TODO
} from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage";

const initState = {
  loading: false,
  todos: loadData("todos") || [],
  error: false,
  single: loadData("single") || []
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TODO_SUCCESS:
      saveData("todos", payload);
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case DELETE_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case DELETE_TODO_SUCCESS:
      const update = state.todos.filter((item) => item.id !== payload);
      saveData("todos", update);

      return {
        ...state,
        todos: update,
        loading: false
      };
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_TODO_SUCCESS:
      const update_data = state.todos.map((item) =>
        item.id === payload.id ? payload : item
      );
      const single_up = [payload];
      saveData("todos", update_data);
      saveData("single", single_up);

      return {
        ...state,
        todos: update_data,
        single: single_up,
        loading: false
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, payload]
      };
    case GET_SINGLE_TODO:
      const single = state.todos.filter((item) => {
        if (item.id === payload) {
          return true;
        } else {
          return false;
        }
      });
      saveData("single", single);
      return {
        ...state,
        single
      };
    default:
      return state;
  }
};
