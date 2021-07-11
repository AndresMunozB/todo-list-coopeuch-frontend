import TodoListItem from './index';
import { render } from '@testing-library/react';
import texts from './texts';
import { Todo } from 'api/entities/todo';

test('renders todo list item', () => {
  const todo: Todo = {
    id: 1,
    description: 'Nueva tarea',
    createdTimestamp: new Date().toString(),
    updatedTimestamp: new Date().toString(),
    deleted: false,
    done: false
  };

  const component = render(<TodoListItem item={todo} />);
  expect(component.container).toHaveTextContent(texts.lastUpdated);
  expect(component.container).toHaveTextContent(todo.description);
});
