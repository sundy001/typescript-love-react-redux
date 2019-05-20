import * as React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Dispatch } from "redux";
import { ActionsUnion } from "../type";

const AddTodo: React.SFC<Props> = ({ dispatch }) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node: HTMLInputElement) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export type Props = Readonly<{
  dispatch: Dispatch<ActionsUnion>;
}>;

export default connect()(AddTodo);
