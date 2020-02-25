import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(createStore(rootReducer, initialState))
  );
}
