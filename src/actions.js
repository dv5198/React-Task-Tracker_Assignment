// action types
export const ADD_TASK = "ADD_TASK";

// action creators
export const addTask = data => ({
  type: ADD_TASK,
  payload: data
});
