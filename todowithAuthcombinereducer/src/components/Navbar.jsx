import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        width: "50%",
        margin: "auto"
      }}
    >
      <Link to="/">Todo</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
