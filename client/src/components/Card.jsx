import React from "react";
import "../styles/Card.css";

export default function Card({ name, image, types }) {
  return (
    <div className="card-border">
      <h4>{name.toUpperCase()}</h4>
      <img className="card-image" src={image} alt="not" />
      <div className="types">
        <h5>{types[0]}</h5>
        {types[1] ? <h5>{types[1]}</h5> : null}
      </div>
    </div>
  );
}
