import React from "react";
import {
  getSingleTodo,
  updateTodoLoading,
  updateTodoError,
  updateTodoSuccess
} from "../store/todos/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// import action

export const Todoitem = () => {
  const navigate = useNavigate();
  const { single, todos, loading, error } = useSelector((state) => ({
    single: state.app.single,
    todos: state.app.todos,
    loading: state.app.loading,
    error: state.app.error
  }));
  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getSingleTodo(Number(id)));
  }, []);

  const handleUpdate = () => {
    dispatch(updateTodoLoading());
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: single[0].title,
        status: !single[0].status
      }),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => dispatch(updateTodoSuccess(res)))
      .catch((err) => dispatch(updateTodoError(err)));
  };

  return single.length === 0 ? (
    <div>loading...</div>
  ) : loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>Something went Wrong</div>
  ) : (
    <div key={single[0].id}>
      <h1>{single[0].title}</h1>
      <h3>{single[0].status ? "Completed" : "Not Completed"}</h3>
      <button onClick={() => handleUpdate(id)}>Toggle Status</button>
      <button onClick={() => navigate("edit")}>Edit</button>
    </div>
  );
};
