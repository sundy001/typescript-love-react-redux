import * as React from 'react';
import Todo from './Todo';
import { State } from '../reducers';

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
  todos: State['todos'],
  toggleTodo: (id: number) => void;
}>;

export default TodoList;
