import React from "react";
import Card from "./Card.jsx";
import "../styles/Cards.css";
import { connect } from "react-redux";
import { showGroup, storePokemons } from "../redux/actions";

class Cards extends React.Component {
  componentDidMount() {
    this.props.storePokemons();
  }
  render() {
    let { group, loading } = this.props;
    return (
      <div className="cards">
        {loading ? <h1>loading...</h1> : null}
        {group &&
          group.map((p, i) => (
            <Card name={p.name} image={p.image} types={p.types} key={i} />
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    group: state.group,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    storePokemons: () => dispatch(storePokemons()),
    showGroup: (value) => dispatch(showGroup(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
