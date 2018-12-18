import { FETCH_RECIPES, NEW_RECIPE, REMOVE_RECIPE } from '../actions/types';

const initialState = {
  recipes: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload }

    case NEW_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      }

    case REMOVE_RECIPE:
      const recipeToRemove = action.payload.id;
      const recipesUpdated = state.recipes.filter((recipe) => recipe.id != recipeToRemove);
      return {
        ...state,
        recipes: recipesUpdated
      }

    default:
      return state;
  }
}