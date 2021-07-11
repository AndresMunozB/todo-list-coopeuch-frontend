import { Box } from '@material-ui/core';
import { TodoUpdatePayload } from 'api/endpoints/todo';
import { Todo } from 'api/entities/todo';
import {
  clearConfirmDialog,
  showConfirmDialog
} from 'components/commons/helpers/ConfirmDialog/store/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/actions';
import TodoEditForm from '../TodoEditForm';
import TodoListHeader from '../TodoListHeader';
import TodoListItem from '../TodoListItem';

type Props = {
  todos: Array<Todo>;
};

const TodoList = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>({
    id: 0,
    description: '',
    createdTimestamp: '',
    updatedTimestamp: '',
    done: false,
    deleted: false
  });

  const onUpdateTodo = (todo: Todo) => {
    setSelectedTodo(todo);
    setShowEditDialog(true);
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
  return (
    <Box overflow="hidden" height="100%" width="100%">
      <TodoListHeader
        total={props.todos.length}
        pending={props.todos.filter((todo) => todo.done === false).length}
      />
      <TodoEditForm
        todo={selectedTodo}
        setShowDialog={setShowEditDialog}
        showDialog={showEditDialog}
      />

      <Box overflow="auto" height="100%">
        {props.todos.length > 0 &&
          props.todos.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              onClickDelete={onDeleteTodo}
              onClickUpdate={onUpdateTodo}
              onClickChangeState={onChangeStateTodo}
            />
          ))}
      </Box>
    </Box>
  );
};

export default TodoList;
