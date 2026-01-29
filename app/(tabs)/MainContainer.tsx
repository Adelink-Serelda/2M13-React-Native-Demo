import { connect } from "react-redux";
import Main from "./Main";
import { fetchMovies, receiveMovies } from "./src/redux/movie/Actions";

const mapStateToProps = (state) => ({
  movies: state.movie.movies || [],
});

const mapDispatchToProps = (dispatch) => ({
  onFetchMovies: (term) => dispatch(fetchMovies(term)),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
