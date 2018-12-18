import { FETCH_RECIPES, NEW_RECIPE, REMOVE_RECIPE, EDIT_RECIPE, UPDATE_RECIPE, GET_SINGLE_RECIPE } from '../actions/types';

const initialState = {
  recipes: [],
  editing: {},
  singleRecipe: {}
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


    case EDIT_RECIPE:
      const recipeToEdit = state.recipes[action.payload];
      return {
        ...state,
        editing: recipeToEdit
      }

    case UPDATE_RECIPE:
      // iterate through state.recipes and match ID's
      const updatedItems = state.recipes.map(recipe => {
        if (recipe.id === action.payload.id) {
          return { ...recipe, ...action.payload }
        }
        return recipe
      })

      return {
        ...state,
        recipes: updatedItems
      }

    case GET_SINGLE_RECIPE:

      let recipeIDToShow = action.payload;
      let singleRecipe = state.recipes.filter(function (recipe) {
        return recipe.id == recipeIDToShow
      });
      return {
        ...state,
        singleRecipe: singleRecipe[0]
      }

    // NO MORE CASE
    default:
      return state;
  }
}