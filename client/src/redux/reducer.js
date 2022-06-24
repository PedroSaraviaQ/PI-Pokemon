const initialState = {
  pokemons: [],
  group: [],
  types: [],
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_PAGE":
      let i = action.payload;
      return {
        ...state,
        group: state.pokemons.slice(12 * (i - 1), 12 * i),
      };
    case "LOADING_PAGE":
      return {
        ...state,
        loading: true,
      };
    case "FINISHED_PAGE":
      return {
        ...state,
        loading: false,
        pokemons: action.payload[0],
        group: action.payload[0].slice(0, 12),
        types: action.payload[1],
      };
    case "ASC":
      state.pokemons = state.pokemons.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      return {
        ...state,
        group: state.pokemons.slice(0, 12),
      };
    case "DESC":
      state.pokemons = state.pokemons.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      return {
        ...state,
        group: state.pokemons.slice(0, 12),
      };
    case "ID":
      state.pokemons = state.pokemons.sort((a, b) => a.id - b.id);
      return {
        ...state,
        group: state.pokemons.slice(0, 12),
      };
    default:
      return state;
  }
}
