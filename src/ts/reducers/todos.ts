import { State, TodoItem } from "./type";
import { Reducer } from "../type";

const todos: Reducer<State["todos"]> = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];

    case "TOGGLE_TODO":
      return state.map<TodoItem>(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todos;
