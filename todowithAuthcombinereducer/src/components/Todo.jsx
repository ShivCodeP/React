import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoError,
  getTodoSuccess
} from "../store/todos/action";
import { TodoList } from "./TodoList";
import { Total } from "./Total";

export const Todo = () => {
  const [text, setText] = React.useState("");
  const { todos, loading, error } = useSelector((state) => ({
    todos: state.app.todos,
    loading: state.app.loading,
    error: state.app.error
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTodoLoading());
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getTodoSuccess(res));
      })
      .catch((err) => dispatch(getTodoError(err)));
  }, []);

  const handleAdd = () => {
    dispatch(addTodoLoading());
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ status: false, title: text })
    })
      .then((d) => d.json())
      .then((res) => {
        // success
        dispatch(addTodoSuccess(res));
      })
      .catch((err) => {
        // error
        console.log(err);
        dispatch(addTodoError(err));
      });
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <Total />
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Something to Add"
      />
      <button onClick={() => handleAdd()}>ADD TODO</button>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>Something went wrong</div>
      ) : (
        todos.map((e) => <TodoList {...e} />)
      )}
    </div>
  );
};
