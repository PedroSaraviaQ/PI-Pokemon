import axios from "axios";

export function storePokemons() {
  return function (dispatch) {
    dispatch({ type: "LOADING_PAGE" });
    axios.get(`http://localhost:3001/pokemons/`).then((response1) => {
      axios.get(`http://localhost:3001/types/`).then((response2) =>
        dispatch({
          type: "FINISHED_PAGE",
          payload: [response1.data, response2.data],
        })
      );
    });
  };
}

export function showGroup(value) {
  return {
    type: "SHOW_PAGE",
    payload: value,
  };
}

export function asc() {
  return {
    type: "ASC",
  };
}
export function desc() {
  return {
    type: "DESC",
  };
}
export function id() {
  return {
    type: "ID",
  };
}
