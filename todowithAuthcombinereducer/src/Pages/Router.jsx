import { Todo } from "../components/Todo";
import { Todoitem } from "../components/Todoitem";
import { EditTodo } from "../components/EditTodo";
import { Login } from "../components/Login";
import { PrivateRoute } from "./PrivateRoutes";

import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/todo/:id"
          element={
            <PrivateRoute>
              <Todoitem />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/todo/:id/edit"
          element={
            <PrivateRoute>
              <EditTodo />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
