import TodoList from './index';
import { render } from '@testing-library/react';
import { Todo } from 'api/entities/todo';
import storeInitializer from 'store/config';
import { Provider } from 'react-redux';

const store = storeInitializer();

test('renders todo list item', () => {
  const todos: Array<Todo> = [
    {
      id: 1,
      description: 'Nueva tarea',
      createdTimestamp: new Date().toString(),
      updatedTimestamp: new Date().toString(),
      deleted: false,
      done: false
    },
    {
      id: 2,
      description: 'Nueva tarea 2',
      createdTimestamp: new Date().toString(),
      updatedTimestamp: new Date().toString(),
      deleted: false,
      done: false
    }
  ];

  const component = render(
    <Provider store={store}>
      <TodoList todos={todos} />
    </Provider>
  );
  expect(component.container).toHaveTextContent(todos[0].description);
  expect(component.container).toHaveTextContent(todos[1].description);
});
