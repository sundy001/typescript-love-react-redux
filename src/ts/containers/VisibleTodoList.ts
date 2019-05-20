import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList, { Props as TodoListProps } from "../components/TodoList";
import { VisibilityFilters, State } from "../reducers";

const getVisibleTodos = (todos: State["todos"], filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps: MapStateToProps<
  { todos: TodoListProps["todos"] },
  {},
  State
> = (state, a) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps: MapDispatchToProps<
  { toggleTodo: TodoListProps["toggleTodo"] },
  {}
> = dispatch => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
