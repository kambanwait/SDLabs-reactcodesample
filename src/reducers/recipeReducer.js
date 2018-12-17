import { FETCH_RECIPES, NEW_RECIPE, REMOVE_RECIPE } from '../actions/types';

const initialState = {
  recipes: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log(action.payload)
      return { ...state, recipes: action.payload }

    case NEW_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      }

    case REMOVE_RECIPE:
      const firstRecipe = state.indexOf(action.payload)
      return state.filter((item, index) => index != firstRecipe)

    default:
      return state;
  }
}