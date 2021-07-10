import { Theme } from '@material-ui/core/styles';
import baseTheme from './base';

/**
 * Para seleccionar un tema customizado de Material-UI.
 *
 * @param theme El nombre asignado al tema.
 * @returns El tema de Material-UI.
 */
const getTheme = (theme: string): Theme => {
  switch (theme) {
    default:
      return baseTheme;
  }
};

export default getTheme;
