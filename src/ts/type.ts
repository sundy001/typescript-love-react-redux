import *  as actions from './actions';

export type Reducer<S> = (state: S, action: ActionsUnion) => S;

export type ActionHash = typeof actions;
export type ActionsUnion = ReturnType<ActionHash[keyof  ActionHash]>;

export interface Action<T extends string> {
    type: T;
}

export interface ActionWithPayload<T extends string, P> {
    type: T;
    payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}
