import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Router, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Home() {
  return <h1>Home Page</h1>;
}

function Login() {
  return (
    <Container>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="text-center">
          <h1>Regsitration Page</h1>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <form >
            <label>
              Enter your Username:
              <input name="username" type="text"  />
            </label>            
            <label>
              Enter your Password:
              <input name="password" type="Password"  />
            </label>
            <button variant="primary" type="submit">
              Login
            </button>
          </form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

function Register() {
  const [dataSet, setDataSet] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataSet((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const navigate = useNavigate;
    axios
      .post("http://192.168.1.52:8081/registerdb", dataSet)
      .then(function (response) {
        console.log(response.dataSet);
        navigate('/Login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="text-center">
          <h1>Regsitration Page</h1>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your Username:
              <input name="username" type="text" onChange={handleChange} />
            </label>
            <label>
              Enter your Email:
              <input name="email" type="email" onChange={handleChange} />
            </label>
            <label>
              Enter your Password:
              <input name="password" type="Password" onChange={handleChange} />
            </label>
            <button as={Link} to="/Login" variant="primary" type="submit">
              Register
            </button>
          </form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
