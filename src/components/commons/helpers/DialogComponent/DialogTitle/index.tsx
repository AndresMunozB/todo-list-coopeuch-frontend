import { Box } from '@material-ui/core';
import { ReactChild } from 'react';

type Props = {
  /** Título */
  title: string;
  /** Componente Subtítulo */
  children?: ReactChild;
};
/**
 * Componente para título de Diálogo
 */
const DialogTitle = (props: Props): JSX.Element => {
  const { title, children } = props;
  return (
    <>
      <Box fontSize="1.4em">{title}</Box>
      {children}
    </>
  );
};

export default DialogTitle;
