import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem("authToken") === "true"; // Or check for authToken

  return isLoggedIn ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default PrivateRoute;