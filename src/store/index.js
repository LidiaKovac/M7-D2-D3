import {
  createStore, combineReducers, compose, applyMiddleware
} from "redux";
import favReducer from '../reducer/favs'
import jobReducer from '../reducer/jobs'
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  fav: {
    data: []
  },
  jobs: {
    data: []
  }
};

const bigReducer = combineReducers({ fav: favReducer, jobs: jobReducer })

export default function configureStore() {
  return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
}