import React from "react";
import { Form, Button } from "react-bootstrap";
import { registerUser } from "../store/Auth/action";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const { registered, loading, error } = useSelector((state) => ({
    registered: state.AuthState.registered,
    loading: state.AuthState.loading,
    error: state.AuthState.error
  }));
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
    console.log(form);
    dispatch(registerUser(form));
  };

  return registered ? (
    <Navigate to="/login" />
  ) : loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>Something went Wrong </div>
  ) : (
    <Form
      className="mt-5 mx-auto border border-secondary rounded p-2 border"
      style={{ width: "50%" }}
      onSubmit={handleSubmit}
    >
      <h1>Register Now</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          name="mobile"
          placeholder="Enter Your Mobile Number"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="description"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
