import {
  createStore
} from "redux";
import rootReducer from "../reducer";

const initialState = {
  fav: []
};

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}