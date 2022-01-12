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

const initState = {
  loading: false,
  todos: [],
  error: false,
  single: []
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
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
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
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload.id ? payload : item
        ),
        single: [payload],
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
      return {
        ...state,
        single: state.todos.filter((item) => {
          if (item.id === payload) {
            return true;
          } else {
            return false;
          }
        })
      };
    default:
      return state;
  }
};
