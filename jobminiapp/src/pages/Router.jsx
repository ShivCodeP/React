import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Apply } from "../components/Apply";
import { Login } from "../components/Login";
import { PostJob } from "../components/PostJob";
import { Register } from "../components/Register";
import { PrivateRoutes } from "./PrivateRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/apply"
        element={
          <PrivateRoutes>
            <Apply />
          </PrivateRoutes>
        }
      ></Route>
      <Route
        path="/postjob"
        element={
          <PrivateRoutes>
            <PostJob />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};
