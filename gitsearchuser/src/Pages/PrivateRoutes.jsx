import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthState.isAuth);

  return isAuth ? children : <Navigate to={"/login"} />;
};

export { PrivateRoutes };
