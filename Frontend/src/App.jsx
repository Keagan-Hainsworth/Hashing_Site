import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import About from "./About.jsx";
import ContactUs from "./ContactUs.jsx";
import Profile from "./Profile.jsx";

function Home() {
  return (
    <div class="container">
      <div class="row text-center">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Profile">
              Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Register">
              Register
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Contact Us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact Us" element={<ContactUs />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
