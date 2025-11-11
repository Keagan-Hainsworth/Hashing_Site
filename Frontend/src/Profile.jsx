import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";

function Profile() {
  const displayName = localStorage.getItem("rememberedUsername");

  return (
    <div class="container">
      <div class="row text-center">
        <h1>
          Welcome <span>{displayName}</span>
        </h1>
      </div>
    </div>
  );
}

export default Profile;
