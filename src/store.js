import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

// Check localstate for existing recipes. If none, we set initial state to empty & load in from json
const initialState = loadState() ? loadState() : {}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState({
    recipes: store.getState().recipes
  });
})

export default store;