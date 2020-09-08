import { ADD_TODO } from "../actions";

const initialState = {
  name: "Brett",
  todos: ["Take dog for a walk", "Go to the park", "Coffee meeting at 10", "Get Money"]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};