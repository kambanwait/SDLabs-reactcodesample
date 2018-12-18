import { FETCH_RECIPES, NEW_RECIPE, REMOVE_RECIPE, EDIT_RECIPE, UPDATE_RECIPE, GET_SINGLE_RECIPE } from './types';

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
  return function (dispatch) {
    dispatch({
      type: NEW_RECIPE,
      payload: state
    });
  }
}

export function removeRecipe(state) {
  return function (dispatch) {
    dispatch({
      type: REMOVE_RECIPE,
      payload: state
    });
  }
}

export function editRecipe(state) {
  return function (dispatch) {
    dispatch({
      type: EDIT_RECIPE,
      payload: state
    });
  }
}

export function updateRecipe(state) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_RECIPE,
      payload: state
    });
  }
}

export function getSingleRecipe(state) {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_RECIPE,
      payload: state
    });
  }
}