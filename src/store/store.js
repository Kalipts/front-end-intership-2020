import { createStore,applyMiddleware } from 'redux';

import rootReducer from '../reducers/index';

const ReduxThunk = require('redux-thunk').default

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

export default store;
