import React from "react";
import {
  getSingleTodo,
  updateTodoLoading,
  updateTodoError,
  updateTodoSuccess
} from "../store/action";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

export const EditTodo = () => {
  const navigate = useNavigate();
  const { single, todos, loading, error } = useSelector((state) => ({
    single: state.single,
    todos: state.todos,
    loading: state.loading,
    error: state.error
  }));
  const { id } = useParams();
  console.log(id);
  const [form, setForm] = React.useState({});

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodoLoading());
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: form,
        status: !single[0].status
      }),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(updateTodoSuccess(res));
        setSuccess(true);
      })
      .catch((err) => dispatch(updateTodoError(err)));
  };

  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter New Title"
          onChange={(e) => setForm(e.target.value)}
        />
        <input type="submit" value="Edit" />
      </form>
      {single.length === 0 ? (
        <div>Loading...</div>
      ) : loading ? (
        <div>Wait..</div>
      ) : error ? (
        <div>Something Went Wrong</div>
      ) : (
        <div>
          {success ? <h3>Successfully Updated</h3> : null}
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      )}
    </>
  );
};
