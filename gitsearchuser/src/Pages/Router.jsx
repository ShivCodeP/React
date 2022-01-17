import { Home as Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};
