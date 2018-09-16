export type ActionCreator<T extends string> = () => { type: T };

export function createAction<T extends string>(type: T): ActionCreator<T>;
export function createAction<
    T extends string,
    PP extends any[],
    P
    >(type: T, payloadCreator: (...args: PP) => P): (...args: PP) => {
    type: T;
    payload: P;
};

export function createAction<
    T extends string,
    PP extends any[],
    P
    >(type: T, payloadCreator?: (...args: PP) => P) {
    return payloadCreator === undefined
        ? () => { type }
        : (...args: PP) => ({
            type,
            payload: payloadCreator(...args)
        });
}
