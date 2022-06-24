import Cards from "./Cards.jsx";
import { connect } from "react-redux";
import { showGroup, asc, desc, id } from "../redux/actions";

function Home({ showGroup, desc, asc, id, types }) {
  return (
    <div>
      <h1>Henry Pokemon</h1>
      <button onClick={() => id()}>ID</button>
      <button onClick={() => asc()}>ASC</button>
      <button onClick={() => desc()}>DESC</button>
      {types.length ? types.map((t, i) => <div key={i}>{t.type}</div>) : null}
      <button onClick={(e) => showGroup(e.target.innerText)}>1</button>
      <button onClick={(e) => showGroup(e.target.innerText)}>2</button>
      <button onClick={(e) => showGroup(e.target.innerText)}>3</button>
      <button onClick={(e) => showGroup(e.target.innerText)}>4</button>
      <Cards />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    types: state.types,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showGroup: (value) => dispatch(showGroup(value)),
    asc: () => dispatch(asc()),
    desc: () => dispatch(desc()),
    id: () => dispatch(id()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
