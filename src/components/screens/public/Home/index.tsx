import { Box, Button, TextField } from '@material-ui/core';
import { TodoCreatePayload, TodoUpdatePayload } from 'api/endpoints/todo';
import { Todo } from 'api/entities/todo';
import clsx from 'clsx';
import {
  clearConfirmDialog,
  showConfirmDialog
} from 'components/commons/helpers/ConfirmDialog/store/actions';
import DialogComponent from 'components/commons/helpers/DialogComponent';
import TextFieldSend from 'components/commons/inputs/TextFieldSend';
import Image from 'material-ui-image';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, getTodos, updateTodo } from './store/actions';
import { todosNonDeletedSelector } from './store/selectors';
import useStyles from './styles';
import TodoListItem from './TodoListItem';

const Home = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const todos = useSelector(todosNonDeletedSelector);
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    dispatch(getTodos.start());
  }, [dispatch]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const onChangeEditInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEditInput(event.target.value);
  };

  const onCreateTodo = () => {
    const todoCreatePayload: TodoCreatePayload = {
      description: input
    };
    dispatch(createTodo.start(todoCreatePayload));
    setInput('');
  };

  const onDeleteTodo = (todo: Todo) => {
    dispatch(
      showConfirmDialog.start({
        title: 'Eliminar tarea',
        content: (
          <Box
            fontSize={16}
          >{`¿Está seguro que desea eliminar la tarea "${todo.description}"?`}</Box>
        ),
        confirmButton: {
          text: 'Eliminar',
          action: () => {
            dispatch(deleteTodo.start(todo.id));
            dispatch(clearConfirmDialog.start());
          }
        }
      })
    );
  };

  const onChangeStateTodo = (todo: Todo, state: boolean) => {
    const todoUpdatePayload: TodoUpdatePayload = {
      id: todo.id,
      description: todo.description,
      done: state
    };
    dispatch(updateTodo.start(todoUpdatePayload));
  };

  const onUpdateTodo = () => {
    const todoUpdatePayload: TodoUpdatePayload = {
      id: Number(selectedTodo?.id),
      description: editInput,
      done: Boolean(selectedTodo?.done)
    };
    dispatch(updateTodo.start(todoUpdatePayload));
    setShowDialog(false);
  };

  const onClickUpdateTodo = (todo: Todo) => {
    setSelectedTodo(todo);
    setEditInput(todo.description);
    setShowDialog(true);
  };

  const onPressEnterEditForm = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter' && editInput !== '') {
      onUpdateTodo();
    }
  };

  return (
    <Box className={clsx(classes.backgroundContainer)}>
      <DialogComponent
        maxWidth="xs"
        open={showDialog}
        onClose={() => setShowDialog(false)}
        titleComponent={<>Editar tarea</>}
        contentComponent={
          <Box>
            <TextField
              fullWidth
              autoFocus
              value={editInput}
              onChange={onChangeEditInput}
              onKeyPress={onPressEnterEditForm}
            ></TextField>
          </Box>
        }
        actionsComponent={
          <Button color="primary" onClick={() => onUpdateTodo()}>
            Editar
          </Button>
        }
      />
      <Box className={clsx(classes.container)}>
        <Box width="500px">
          <Image
            color="transparent"
            src="https://cdn.prestamosfrescos.com/cl/assets/design/coopeuch-logo.png"
            aspectRatio={3.32}
          />
        </Box>

        <Box boxShadow={10} borderRadius={50} marginBottom={5} width="500px">
          <Box className={clsx(classes.inputTextField)}>
            <TextFieldSend
              label="Ingrese una tarea..."
              value={input}
              onChange={onChangeInput}
              onSubmit={onCreateTodo}
            />
          </Box>
        </Box>

        <Box
          boxShadow={10}
          borderRadius={50}
          paddingTop={4}
          paddingBottom={4}
          height="600px"
          width="500px"
          overflow="hidden"
        >
          <Box overflow="auto" height="100%">
            {todos.length > 0 &&
              todos.map((item) => (
                <TodoListItem
                  key={item.id}
                  item={item}
                  onClickDelete={onDeleteTodo}
                  onClickUpdate={onClickUpdateTodo}
                  onClickChangeState={onChangeStateTodo}
                />
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
