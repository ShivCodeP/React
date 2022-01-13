import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Total = () => {
  const todos = useSelector((state) => state.todos);

  const total = todos.filter((item) => !item.status).length;

  return (
    <div>
      <h1>Total Task Left To Complete:{total}</h1>
    </div>
  );
};
