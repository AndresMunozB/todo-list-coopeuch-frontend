import { request } from 'api';
import { TodoCreatePayload, TODOS, TodoUpdatePayload } from 'api/endpoints/todo';
import { isTodo, isTodoArray } from 'api/entities/todo';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionPayload } from 'store';
import { createTodo, deleteTodo, getTodos, updateTodo } from './actions';

function* getTodosSagas(): IterableIterator<unknown> {
  try {
    const response = (yield call(request, {
      method: 'GET',
      url: TODOS
    })) as unknown as AxiosResponse;

    if (response.status === 200 && response.data && isTodoArray(response.data)) {
      yield put(getTodos.success(response.data));
    } else {
      yield put(getTodos.failure(new Error('GetTodos response no cumple definición')));
    }
  } catch (error) {
    yield put(getTodos.failure(error));
  }
}

function* createTodoSagas(action: ActionPayload<TodoCreatePayload>): IterableIterator<unknown> {
  try {
    const todoPayload = action.payload;
    const response = (yield call(request, {
      method: 'POST',
      url: TODOS,
      data: todoPayload
    })) as unknown as AxiosResponse;
    if (response.status === 200 && response.data && isTodo(response.data)) {
      yield put(createTodo.success(response.data));
    } else {
      yield put(createTodo.failure(new Error('UsersResponse no cumple definición')));
    }
  } catch (error) {
    yield put(createTodo.failure(error));
  }
}

function* deleteTodoSagas(action: ActionPayload<number>): IterableIterator<unknown> {
  try {
    const response = (yield call(request, {
      method: 'DELETE',
      url: `${TODOS}/${action.payload}`
    })) as unknown as AxiosResponse;
    if (response.status === 200) {
      yield put(deleteTodo.success(action.payload));
    } else {
      yield put(deleteTodo.failure(new Error('UsersResponse no cumple definición')));
    }
  } catch (error) {
    yield put(deleteTodo.failure(error));
  }
}

function* updateTodoSagas(action: ActionPayload<TodoUpdatePayload>): IterableIterator<unknown> {
  try {
    const response = (yield call(request, {
      method: 'PUT',
      url: `${TODOS}/${action.payload.id}`,
      data: action.payload
    })) as unknown as AxiosResponse;
    if (response.status === 200 && response.data && isTodo(response.data)) {
      yield put(updateTodo.success(response.data));
    } else {
      yield put(updateTodo.failure(new Error('UsersResponse no cumple definición')));
    }
  } catch (error) {
    yield put(updateTodo.failure(error));
  }
}

const sagas = [
  takeLatest(getTodos.START, getTodosSagas),
  takeLatest(createTodo.START, createTodoSagas),
  takeLatest(deleteTodo.START, deleteTodoSagas),
  takeLatest(updateTodo.START, updateTodoSagas)
];

export default sagas;
