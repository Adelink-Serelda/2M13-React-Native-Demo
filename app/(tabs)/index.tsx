import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import MovieReducer from "./src/redux/movie/Reducer";
import MainContainer from "./MainContainer";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./src/redux/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    movie: MovieReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
