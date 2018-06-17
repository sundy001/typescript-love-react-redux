export type State = Readonly<{
  todos: ReadonlyArray<TodoItem>;
  visibilityFilter: VisibilityFilters;
}>;

export type TodoItem = Readonly<{
  id: number;
  text: string;
  completed: boolean;
}>;

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
};
  