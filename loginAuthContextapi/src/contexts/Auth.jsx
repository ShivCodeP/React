import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("abdjkfd");
  const handleLogin = (token) => {
    setToken(token);
    setIsAuth(true);
  };

  const value = {
    isAuth,
    setIsAuth,
    token,
    setToken,
    handleLogin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
