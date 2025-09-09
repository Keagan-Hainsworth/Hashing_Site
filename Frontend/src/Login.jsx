import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
          <form>
            <label>
              Enter your Username:
              <input name="username" type="text" />
            </label>
            <label>
              Enter your Password:
              <input name="password" type="Password" />
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

export default Login;