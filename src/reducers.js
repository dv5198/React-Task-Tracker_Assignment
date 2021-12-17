import { ADD_TASK } from "./actions";

const initialState = {
  tasks: ["walk dog", "buy milk", "Food Festival Visit"]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
};
