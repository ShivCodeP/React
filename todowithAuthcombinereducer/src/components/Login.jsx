import React from "react";
import { Navigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../store/auth/action";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [form, setForm] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loginSuccess(res.token));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure(err));
      });
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
        alignItems: "center"
      }}
    >
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <input type="submit" value="Login" style={{ width: "80px" }} />
      </form>
    </div>
  );
};
