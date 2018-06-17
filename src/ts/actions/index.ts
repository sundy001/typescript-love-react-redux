import { VisibilityFilters } from '../reducers';
import { createAction } from '../type';

let nextTodoId = 0;

export const addTodo = (text: string) =>
  createAction(
    'ADD_TODO',
    {
      id: nextTodoId++,
      text,
    }
  )
;

export const setVisibilityFilter = (filter: VisibilityFilters) =>
  createAction(
    'SET_VISIBILITY_FILTER',
    {
      filter,
    }
  )
;

export const toggleTodo = (id: number) =>
  createAction(
    'TOGGLE_TODO',
    {
      id,
    }
  )
;
