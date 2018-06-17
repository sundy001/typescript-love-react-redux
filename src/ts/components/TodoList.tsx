import * as React from 'react';
import Todo from './Todo';

const TodoList: React.SFC<Props> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
);

export type Props = Readonly<{
  todos: ReadonlyArray<
    Readonly<{
      id: number;
      completed: boolean;
      text: string;
    }>
  >;
  toggleTodo: (id: number) => void;
}>;

export default TodoList;
