import { Box } from '@material-ui/core';
import { ReactChild } from 'react';

type Props = {
  /** Componente hijo que se mostrará */
  children?: ReactChild;
  /** Índice de la tab */
  index: number;
  /** Booleano para verificar si es la tab activa */
  active: boolean;
};

/**
 * Componente para mostrar contenido de una tab
 */
const TabPanel = (props: Props): JSX.Element => {
  const { children, active, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={!active}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-panel-${index}`}
      {...other}
    >
      {active && (
        <Box p={2} paddingX={3} height="100%">
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
