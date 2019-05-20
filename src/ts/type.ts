import * as actions from "./actions";

export type Reducer<S> = (state: S | undefined, action: ActionsUnion) => S;

export type ActionHash = typeof actions;
export type ActionsUnion = ReturnType<ActionHash[keyof ActionHash]>;
