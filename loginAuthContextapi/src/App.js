import React from "react";
import "./styles.css";
import { Form } from "./components/Form";
import { Status } from "./components/Status";
import Login from "./components/LoginForm";

export default function App() {
  const [isAuth, setIsAuth] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("trying to submit");
  };

  return (
    <div className="App">
      <Login />
      <Status />
    </div>
  );
}
