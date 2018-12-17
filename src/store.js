import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { saveState } from './localStorage';

const initialState = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : {}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

store.subscribe(() => {
  saveState({
    recipes: store.getState().recipes
  });
})

export default store;