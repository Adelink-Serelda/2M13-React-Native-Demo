import { FETCH_MOVIES, RECEIVE_MOVIES } from "./ActionTypes";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const fetchMovies = (searchTerm) => ({
  type: FETCH_MOVIES,
  searchTerm,
});
