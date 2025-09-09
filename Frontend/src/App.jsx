import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/Register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/Register">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Register">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<Register />} />
        <Route path="/Contact Us" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
