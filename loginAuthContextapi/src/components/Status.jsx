import React, { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

const Status = () => {
  const value = useContext(AuthContext);
  // return (
  //   <div>
  //     Status:
  //     <AuthContext.Consumer>
  //       {(value) => {
  //         return <div>{value.token}</div>;
  //       }}
  //     </AuthContext.Consumer>
  //   </div>
  // );
  return value.isAuth ? (
    <>
      <div>Status:Logged In</div>
      <div>Token: {value.token}</div>
    </>
  ) : (
    <div>Status: Not logged In</div>
  );
};

export { Status };
