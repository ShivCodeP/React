import { Link } from "react-router-dom";
import { Navbar, Button, Container, Nav } from "react-bootstrap";

export const Navb = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              ShivJob<span style={{ color: "green" }}>.</span>com
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link
              style={{
                marginLeft: "1.4rem",
                textDecoration: "none",
                color: "gray"
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                marginLeft: "1.4rem",
                textDecoration: "none",
                color: "gray"
              }}
              to="/apply"
            >
              Apply Now
            </Link>
            <Link
              style={{
                marginLeft: "1.4rem",
                textDecoration: "none",
                color: "gray"
              }}
              to="/postjob"
            >
              Post Job
            </Link>
            <Link
              style={{
                marginLeft: "1.4rem",
                textDecoration: "none",
                color: "gray"
              }}
              to="/login"
            >
              Login
            </Link>
            <Link
              style={{
                marginLeft: "1.4rem",
                textDecoration: "none",
                color: "gray"
              }}
              to="/register"
            >
              Register
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
