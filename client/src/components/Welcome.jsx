import React from "react";
import { NavLink } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Bienvenidos!</h1>
      <NavLink to="/home">Home</NavLink>
    </div>
  );
}
