import { TodoCreatePayload, TodoUpdatePayload } from 'api/endpoints/todo';
import { Todo } from 'api/entities/todo';
import { createAction } from 'store';

const ROOT = 'components/screens/public/home';

export const getTodos = createAction<undefined, undefined>(ROOT, 'getTodos');
export const createTodo = createAction<TodoCreatePayload, Todo>(ROOT, 'createTodo');
export const deleteTodo = createAction<number, number>(ROOT, 'deleteTodo');
export const updateTodo = createAction<TodoUpdatePayload, Todo>(ROOT, 'updateTodo');
