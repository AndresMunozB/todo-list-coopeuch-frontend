import { fireEvent, render } from '@testing-library/react';
import { Todo } from 'api/entities/todo';
import { Provider } from 'react-redux';
import storeInitializer from 'store/config';
import TodoEditForm from './index';
import texts from './texts';

const todo: Todo = {
  id: 0,
  description: 'Nueva tarea',
  createdTimestamp: new Date().toString(),
  updatedTimestamp: new Date().toString(),
  deleted: false,
  done: false
};
const store = storeInitializer();

/**Ignorar los console.log de redux */
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
  jest.spyOn(console, 'group').mockImplementation(() => jest.fn());
});

test('render todo edit form', () => {
  const mockHandler = jest.fn();
  const component = render(
    <Provider store={store}>
      <TodoEditForm todo={todo} showDialog={true} setShowDialog={mockHandler} />
    </Provider>
  );
  const button = component.getByText(texts.button);
  fireEvent.click(button);
  expect(mockHandler.mock.calls).toHaveLength(1);
});
