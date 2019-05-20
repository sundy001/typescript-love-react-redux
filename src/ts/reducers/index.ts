import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export * from "./type";

// TODO: fix
export default (combineReducers as any)({
  todos,
  visibilityFilter
});
