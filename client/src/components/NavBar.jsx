import React from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/home">Home</NavLink>
      </div>
    );
  }
}
