import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export const Navbars = () => {
  const { isAuth, registered } = useSelector((state) => ({
    registered: state.AuthState.regsitered,
    isAuth: state.AuthState.isAuth
  }));

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>git.io</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link
            className="mx-3"
            style={{ textDecoration: "none", color: "#9D9D9D" }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-3"
            style={{ textDecoration: "none", color: "#9D9D9D" }}
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="mx-3"
            style={{ textDecoration: "none", color: "#9D9D9D" }}
            to="/login"
          >
            Login
          </Link>
          <Link
            className="mx-3"
            style={{ textDecoration: "none", color: "#9D9D9D" }}
            to="/register"
          >
            Register
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
