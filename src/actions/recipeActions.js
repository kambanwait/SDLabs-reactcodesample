import { FETCH_RECIPES, NEW_RECIPE } from './types';

export function fetchRecipes() {
  return function (dispatch) {
    fetch('./recipes.json')
      .then(response => response.json())
      .then(recipes => dispatch({
        type: FETCH_RECIPES,
        payload: recipes
      }));
  }
}

export function createRecipe(state) {
  return {
    type: NEW_RECIPE,
    payload: state
  };
}