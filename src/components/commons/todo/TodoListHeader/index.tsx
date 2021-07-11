import { Box } from '@material-ui/core';
import texts from './texts';
type Props = {
  total: number;
  pending: number;
};
const TodoListHeader = (props: Props): JSX.Element => {
  return (
    <Box>
      <Box fontSize="20px" textAlign="center">
        {`${texts.total}${props.total}`}
      </Box>
      <Box textAlign="center">{`${texts.pending}${props.pending}`}</Box>
    </Box>
  );
};

export default TodoListHeader;
