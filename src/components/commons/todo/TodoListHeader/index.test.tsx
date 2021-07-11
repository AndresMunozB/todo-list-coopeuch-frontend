import TodoListHeader from './index';
import { render } from '@testing-library/react';
import texts from './texts';

test('renders todo list header', () => {
  const total = 10;
  const pending = 5;

  const component = render(<TodoListHeader total={total} pending={pending} />);
  expect(component.container).toHaveTextContent(texts.total)
  expect(component.container).toHaveTextContent(texts.pending)
});
