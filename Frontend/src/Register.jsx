import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

function Register() {
  const [dataSet, setDataSet] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataSet((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/registerdb", dataSet)
      .then(function (response) {
        console.log(response.dataSet);
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="container"> 
      <div class="row text-center">
        <h1>Registration Page</h1>
      </div>
      <div class="row">
        <form class="col-4 offset-4" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="form-label">Username:</label>
            <input
              class="form-control"
              name="username"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email:</label>
            <input
              class="form-control"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password:</label>
            <input
              class="form-control"
              name="password"
              type="Password"
              onChange={handleChange}
            />
          </div>
          <button
            class="btn btn-primary"
            as={Link}
            to="/Login"
            variant="primary"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
