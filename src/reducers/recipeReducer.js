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
      const filteredRecipes = state.recipes.filter((recipe) => recipe.id != recipeToRemove);
      return {
        ...state,
        recipes: filteredRecipes
      }

    default:
      return state;
  }
}