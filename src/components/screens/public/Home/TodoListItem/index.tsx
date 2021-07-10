import { Box, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Todo } from 'api/entities/todo';
type Props = {
  item: Todo;
  onClickDelete(item: Todo): void;
  onClickUpdate(item: Todo): void;
  onClickChangeState(item: Todo, state: boolean): void;
};

const TodoListItem = (props: Props): JSX.Element => {
  return (
    <Box fontSize="20px">
      {props.item.done ? (
        <IconButton onClick={() => props.onClickChangeState(props.item, false)}>
          <CheckCircleIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => props.onClickChangeState(props.item, true)}>
          <RadioButtonUncheckedIcon />
        </IconButton>
      )}

      {`${props.item.description} ${new Date(props.item.createdTimestamp).toLocaleTimeString()}`}
      <IconButton onClick={() => props.onClickUpdate(props.item)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => props.onClickDelete(props.item)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TodoListItem;
