import { Provider } from 'react-redux';
import storeInitializer from 'store/config';
import App from './App';

const store = storeInitializer();

const Main = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;
