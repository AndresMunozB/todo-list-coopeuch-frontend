import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from 'assets/themes';
// import useCache from './UseCache';
import Router from 'components/Main/App/Router';
import useErrorHandler from './UseErrorHandler';

const App = (): JSX.Element => {
  useErrorHandler();
  // useCache();
  return (
    <ThemeProvider theme={getTheme('theme') /* para extender y customizar por cliente */}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
