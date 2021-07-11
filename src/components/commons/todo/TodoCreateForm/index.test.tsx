import TodoCreateForm from './index';
import { render } from '@testing-library/react';
import storeInitializer from 'store/config';
import { Provider } from 'react-redux';
import texts from './texts';
const store = storeInitializer();

test('renders todo list item', () => {
  const component = render(
    <Provider store={store}>
      <TodoCreateForm />
    </Provider>
  );
  const textFiel = component.getByLabelText(texts.inputLabel);
  expect(textFiel).toBeDefined();
});
