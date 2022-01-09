import React from "react";
import { Form } from "./Form";
import { AuthContext } from "../contexts/Auth";

export default function Login() {
  const { setToken, setIsAuth, handleLogin } = React.useContext(AuthContext);
  const [form, setForm] = React.useState({});

  const onSubmit = (e) => {
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
        res.token === undefined ? setIsAuth(false) : handleLogin(res.token);
      })
      .catch((err) => {
        setIsAuth(false);
        console.log(err);
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <Form title="LOGIN" onSubmit={onSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
    </Form>
  );
}
