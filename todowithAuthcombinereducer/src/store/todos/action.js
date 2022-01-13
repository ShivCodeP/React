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

const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING
  };
};

const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err
  };
};

const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data
  };
};

const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING
  };
};

const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err
  };
};

const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data
  };
};

const updateTodoLoading = () => {
  return {
    type: UPDATE_TODO_LOADING
  };
};

const updateTodoError = (err) => {
  return {
    type: UPDATE_TODO_ERROR,
    payload: err
  };
};

const updateTodoSuccess = (data) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: data
  };
};

const deleteTodoError = (err) => {
  return {
    type: DELETE_TODO_ERROR,
    payload: err
  };
};

const deleteTodoLoading = () => {
  return {
    type: DELETE_TODO_LOADING
  };
};

const deleteTodoSuccess = (id) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id
  };
};

const getSingleTodo = (id) => {
  return {
    type: GET_SINGLE_TODO,
    payload: id
  };
};

export {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  updateTodoError,
  updateTodoLoading,
  updateTodoSuccess,
  deleteTodoError,
  deleteTodoLoading,
  deleteTodoSuccess,
  getSingleTodo
};
