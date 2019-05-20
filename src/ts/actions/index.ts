import { VisibilityFilters } from "../reducers";
import { createAction } from "../createAction";

let nextTodoId = 0;

export const addTodo = createAction("ADD_TODO", (text: string) => ({
  id: nextTodoId++,
  text
}));

export const setVisibilityFilter = createAction(
  "SET_VISIBILITY_FILTER",
  (filter: VisibilityFilters) => ({
    filter
  })
);

export const toggleTodo = createAction("TOGGLE_TODO", (id: number) => ({
  id
}));
