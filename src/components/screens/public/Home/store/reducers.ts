import { Todo } from 'api/entities/todo';
import { ActionPayload, ActionStatus, createReducer } from 'store';
import { createTodo, deleteTodo, getTodos, updateTodo } from './actions';

export type State = {
  createTodoStatus: number;
  deleteTodoStatus: number;
  updateTodoStatus: number;
  getTodosStatus: number;
  todos: Array<Todo>;
};

const initialState: State = {
  createTodoStatus: ActionStatus.DEFAULT,
  deleteTodoStatus: ActionStatus.DEFAULT,
  updateTodoStatus: ActionStatus.DEFAULT,
  getTodosStatus: ActionStatus.DEFAULT,
  todos: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTodos.DEFAULT, (state) => {
      state.getTodosStatus = ActionStatus.DEFAULT;
    })
    .addCase(getTodos.START, (state) => {
      state.getTodosStatus = ActionStatus.START;
    })
    .addCase(getTodos.SUCCESS, (state, action: ActionPayload<Array<Todo>>) => {
      state.getTodosStatus = ActionStatus.SUCCESS;
      state.todos = action.payload;
    })
    .addCase(getTodos.FAILURE, (state) => {
      state.getTodosStatus = ActionStatus.FAILURE;
    })
    .addCase(createTodo.DEFAULT, (state) => {
      state.createTodoStatus = ActionStatus.DEFAULT;
    })
    .addCase(createTodo.START, (state) => {
      state.createTodoStatus = ActionStatus.START;
    })
    .addCase(createTodo.SUCCESS, (state, action: ActionPayload<Todo>) => {
      state.createTodoStatus = ActionStatus.SUCCESS;
      state.todos = ([] as Array<Todo>).concat(action.payload, state.todos);
    })
    .addCase(createTodo.FAILURE, (state) => {
      state.createTodoStatus = ActionStatus.FAILURE;
    })
    .addCase(deleteTodo.DEFAULT, (state) => {
      state.deleteTodoStatus = ActionStatus.DEFAULT;
    })
    .addCase(deleteTodo.START, (state) => {
      state.deleteTodoStatus = ActionStatus.START;
    })
    .addCase(deleteTodo.SUCCESS, (state, action: ActionPayload<number>) => {
      state.deleteTodoStatus = ActionStatus.SUCCESS;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, deleted: true } : todo
      );
    })
    .addCase(deleteTodo.FAILURE, (state) => {
      state.deleteTodoStatus = ActionStatus.FAILURE;
    })
    .addCase(updateTodo.DEFAULT, (state) => {
      state.updateTodoStatus = ActionStatus.DEFAULT;
    })
    .addCase(updateTodo.START, (state) => {
      state.updateTodoStatus = ActionStatus.START;
    })
    .addCase(updateTodo.SUCCESS, (state, action: ActionPayload<Todo>) => {
      state.updateTodoStatus = ActionStatus.SUCCESS;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    })
    .addCase(updateTodo.FAILURE, (state) => {
      state.updateTodoStatus = ActionStatus.FAILURE;
    });
});

export default reducer;
