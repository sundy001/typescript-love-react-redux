import * as React from 'react';

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
  completed: boolean;
  text: string;
}>;

export default Todo;
