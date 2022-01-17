import React from "react";
import { loginUser } from "../stores/Auth/action";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = React.useState({});

  const { isAuth, loading, error } = useSelector((state) => ({
    isAuth: state.isAuth,
    loading: state.loading,
    error: state.error
  }));

  const handleLogin = ({ target: { name, value } }) => {
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
    <Navigate to="/apply" />
  ) : loading ? (
    <div>Loading...</div>
  ) : (
    <Form
      style={{
        marginTop: "100px",
        width: "50%",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "4px",
        margin: "auto"
      }}
      onSubmit={handleSubmit}
    >
      <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleLogin}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        {error ? (
          <Form.text className="text-muted" style={{ color: "red" }}>
            Invalid Email and password
          </Form.text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleLogin}
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
