import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodoError,
  deleteTodoLoading,
  deleteTodoSuccess
} from "../store/todos/action";

export const TodoList = ({ id, title, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoLoading());
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => dispatch(deleteTodoSuccess(id)))
      .catch((err) => dispatch(deleteTodoError(err)));
  };

  return (
    <div
      key={id}
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h3>{title}</h3>
      <button style={{ height: "30px" }} onClick={handleDelete}>
        Delete
      </button>
      <button
        style={{ height: "30px" }}
        onClick={() => navigate(`/todo/${id}`)}
      >
        Show
      </button>
    </div>
  );
};
