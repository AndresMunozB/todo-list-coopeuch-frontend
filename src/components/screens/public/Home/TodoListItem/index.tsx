import { Box, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Todo } from 'api/entities/todo';
import useStyles from './styles';
import clsx from 'clsx';
type Props = {
  item: Todo;
  onClickDelete(item: Todo): void;
  onClickUpdate(item: Todo): void;
  onClickChangeState(item: Todo, state: boolean): void;
};

const TodoListItem = (props: Props): JSX.Element => {
  const classes = useStyles();
  // const createdDate = new Date(props.item.createdTimestamp);
  const updatedDate = new Date(props.item.updatedTimestamp);
  return (
    <Box
      borderRadius={3}
      boxShadow={1}
      marginTop={2}
      marginBottom={2}
      width="490px"
      className={clsx(classes.inline, classes.justifySpaceBetween, classes.alignCenter)}
    >
      {props.item.done ? (
        <IconButton onClick={() => props.onClickChangeState(props.item, false)}>
          <CheckCircleIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => props.onClickChangeState(props.item, true)}>
          <RadioButtonUncheckedIcon />
        </IconButton>
      )}

      <Box width="340px">
        <Box
          overflow="hidden"
          fontSize="18px"
          whiteSpace="normal"
          textOverflow="ellipsis"
        >{`${props.item.description}`}</Box>
        <Box fontSize="12px">{`Última actualizacion: ${updatedDate.toLocaleString()}`}</Box>
      </Box>
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
