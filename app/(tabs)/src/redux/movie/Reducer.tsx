import { RECEIVE_MOVIES } from "./ActionTypes";

const initialState = {
  movies: [],
};

const receiveMovies = (state, movies) => ({
  ...state,
  movies,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return receiveMovies(state, action.movies);

    default:
      return state;
  }
};
