import { Todo } from "../components/Todo";
import { Todoitem } from "../components/Todoitem";
import { EditTodo } from "../components/EditTodo";

import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<Todoitem />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
      </Routes>
    </>
  );
};
