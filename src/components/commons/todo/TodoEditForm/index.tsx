import { Box, Button, TextField } from '@material-ui/core';
import { Todo } from 'api/entities/todo';
import DialogComponent from 'components/commons/helpers/DialogComponent';
import { useEffect } from 'react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../store/actions';
import texts from './texts';

type Props = {
  todo: Todo;
  showDialog?: boolean;
  setShowDialog?(value: boolean): void;
};

const TodoEditForm = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const [editedTodo, setEditedTodo] = useState(props.todo);

  const setShowDialog = (value: boolean) => {
    if (props.setShowDialog) {
      props.setShowDialog(value);
    }
  };
  useEffect(() => {
    setEditedTodo(props.todo);
  }, [props.todo]);

  const onPressEnterEditForm = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter' && editedTodo.description !== '') {
      onUpdateTodo();
    }
  };
  const onUpdateTodo = () => {
    dispatch(updateTodo.start(editedTodo));
    setShowDialog(false);
  };

  const onChangeEditedTodoDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedTodo({ ...editedTodo, description: event.target.value });
  };

  return (
    <DialogComponent
      maxWidth="xs"
      open={props.showDialog ?? false}
      onClose={() => setShowDialog(false)}
      titleComponent={<>{texts.title}</>}
      contentComponent={
        <Box>
          <TextField
            fullWidth
            autoFocus
            value={editedTodo.description}
            onChange={onChangeEditedTodoDescription}
            onKeyPress={onPressEnterEditForm}
          ></TextField>
        </Box>
      }
      actionsComponent={
        <Button color="primary" onClick={() => onUpdateTodo()}>
          {texts.button}
        </Button>
      }
    />
  );
};
export default TodoEditForm;
