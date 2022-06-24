import React from "react";
import axios from "axios";

export default class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3001/pokemons/?name=${this.props.match.params.name}`
      )
      .then((response) => response.data)
      .then((response) => this.setState(() => ({ pokemon: response })));
  }

  render() {
    let { name, image, id, attack, defense, height, hp, speed, types, weight } =
      this.state.pokemon;
    console.log(this.state.pokemon);
    return (
      <div>
        <h1>{name}</h1>
        <h1>{id}</h1>
        <img src={image} alt="" />
        <div>attack: {attack}</div>
        <div>defense: {defense}</div>
        <div>height: {height}</div>
        <div>hp: {hp}</div>
        <div>speed: {speed}</div>
        {types ? (
          <div>
            types: {types[0]}
            {types[1] ? <span>, {types[1]}</span> : null}
          </div>
        ) : null}
        <div>weight: {weight}</div>
      </div>
    );
  }
}
