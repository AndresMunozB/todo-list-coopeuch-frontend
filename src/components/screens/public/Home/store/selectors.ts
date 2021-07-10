import { Todo } from 'api/entities/todo';
import { createSelector } from 'reselect';
import { State } from './reducers';

type BaseState = {
  todosReducer: State;
};

export const todosSeletor = (state: BaseState): Array<Todo> => state.todosReducer.todos;

export const getTodosStatusSelector = (state: BaseState): number =>
  state.todosReducer.getTodosStatus;

export const todosNonDeletedSelector = createSelector(todosSeletor, (todos) =>
  todos.filter((todo) => todo.deleted !== true)
);
