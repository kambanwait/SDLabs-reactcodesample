// check local storage for data
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('recipes');
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
}

// save current state to localstorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('recipes', serializedState);
  } catch (err) {
    console.warn(`err on save to local storage, ${err}`);
  }
}