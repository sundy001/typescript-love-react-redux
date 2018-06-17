import * as React from 'react';
import { TodoItem } from '../reducers';

const Todo: React.SFC<Props> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }}
  >
    {text}
  </li>
);

type Props = Readonly<{
  onClick: React.MouseEventHandler<HTMLLIElement>;
}> & TodoItem;

export default Todo;
