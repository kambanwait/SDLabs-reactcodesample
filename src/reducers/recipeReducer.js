import { FETCH_RECIPES, NEW_RECIPE, REMOVE_RECIPE } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, items: action.payload }

    case NEW_RECIPE:
      return { ...state, item: action.payload }

    case REMOVE_RECIPE:
      const firstRecipe = state.indexOf(action.payload)
      return state.filter((item, index) => index != firstRecipe)

    default:
      return state;
  }
}