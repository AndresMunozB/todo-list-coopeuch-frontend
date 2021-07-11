import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#00988a',
      main: '#000000',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff662f',
      contrastText: '#fff'
    },
    error: {
      main: red[600]
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiTableRow: {
      root: {
        '&:last-child td': {
          borderBottom: 0
        }
      }
    }
    // MuiCssBaseline: {
    //   '@global': {
    //     '*': {
    //       'scrollbar-width': 'thin',
    //     },
    //     '*::-webkit-scrollbar': {
    //       width: '10px',
    //       height: '10px',
    //     }
    //   }
    // }
  }
});

export default theme;
