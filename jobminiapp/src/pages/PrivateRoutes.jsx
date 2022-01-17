import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();

  return !isAuth ? <Navigate to="/login" /> : children;
};
