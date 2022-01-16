import { Form, Button } from "react-bootstrap";
import React from "react";
import { loginUser } from "../store/Auth/action";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { isAuth, loading, error } = useSelector((state) => ({
    loading: state.AuthState.loading,
    error: state.AuthState.error,
    isAuth: state.AuthState.isAuth
  }));
  const [login, setLogin] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    dispatch(loginUser(login));
  };

  return isAuth ? (
    <Navigate to="/dashboard" />
  ) : (
    <Form
      onSubmit={handleSubmit}
      className="mt-5 mx-auto border border-secondary rounded p-2 border"
      style={{ width: "50%" }}
    >
      <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        {error ? (
          <Form.Text style={{ color: "red" }}>invalid credentials</Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
