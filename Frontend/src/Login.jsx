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
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [dataSet, setDataSet] = useState({
    username: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored credentials on component mount
    const storedUsername = localStorage.getItem("rememberedUsername");
    const storedRemember = localStorage.getItem("remember") === "true";
    
    if (storedUsername && storedRemember) {
      setDataSet((prev) => ({ ...prev, username: storedUsername }));
      setRemember(true);
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataSet((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataSet);

    axios
      .post("http://localhost:8081/logindb", dataSet)
      .then((response) => {
        console.log(response.data);
        if (!response.data.success) {
          console.log("Login failed:", response.data.message);
          return;
        } else {
          if (remember == true) {
            localStorage.setItem("rememberedUsername", dataSet.username);
            localStorage.setItem("remember", "true");
            localStorage.setItem("authToken", "true");
          } else {
            localStorage.removeItem("rememberedUsername");
            localStorage.removeItem("remember");
          }
          navigate("/Profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="container">
      <div class="row text-center">
        <h1>Login Page</h1>
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
            <label class="form-label">Password:</label>
            <input
              class="form-control"
              name="password"
              type="Password"
              onChange={handleChange}
            />
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                name="remember"
                onChange={(e) => setRemember(e.target.checked)}
              />{" "}
              Remember me
            </label>
          </div>
          <button class="btn btn-primary" variant="primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
