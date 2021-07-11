import { Box, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Todo } from 'api/entities/todo';
import useStyles from './styles';
import clsx from 'clsx';
import texts from './texts';

type Props = {
  item: Todo;
  onClickDelete?(item: Todo): void;
  onClickUpdate?(item: Todo): void;
  onClickChangeState?(item: Todo, state: boolean): void;
};

const TodoListItem = (props: Props): JSX.Element => {
  const classes = useStyles();
  const updatedDate = new Date(props.item.updatedTimestamp);

  const onClickDelete = (todo: Todo) => {
    if (props.onClickDelete) {
      props.onClickDelete(todo);
    }
  };

  const onClickUpdate = (todo: Todo) => {
    if (props.onClickUpdate) {
      props.onClickUpdate(todo);
    }
  };

  const onClickChangeState = (todo: Todo, state: boolean) => {
    if (props.onClickChangeState) {
      props.onClickChangeState(todo, state);
    }
  };

  return (
    <Box
      borderRadius={3}
      boxShadow={1}
      marginTop={2}
      marginBottom={2}
      width="490px"
      className={clsx(classes.inline, classes.justifySpaceBetween, classes.alignCenter)}
    >
      <Box className={classes.inline}>
        {props.item.done ? (
          <IconButton onClick={() => onClickChangeState(props.item, false)}>
            <CheckCircleIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => onClickChangeState(props.item, true)}>
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}

        <Box maxWidth="340px">
          <Box
            overflow="hidden"
            fontSize="18px"
            whiteSpace="normal"
            textOverflow="ellipsis"
          >{`${props.item.description}`}</Box>
          <Box fontSize="12px">{`${texts.lastUpdated}${updatedDate.toLocaleString()}`}</Box>
        </Box>
      </Box>

      <IconButton onClick={() => onClickUpdate(props.item)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onClickDelete(props.item)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default TodoListItem;
