import { TodoCreatePayload } from 'api/endpoints/todo';
import TextFieldSend from 'components/commons/inputs/TextFieldSend';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../store/actions';
import texts from './texts';

const TodoCreateForm = (): JSX.Element => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onCreateTodo = () => {
    const todoCreatePayload: TodoCreatePayload = {
      description: input
    };
    dispatch(createTodo.start(todoCreatePayload));
    setInput('');
  };
  return (
    <TextFieldSend
      label={texts.inputLabel}
      value={input}
      onChange={onChangeInput}
      onSubmit={onCreateTodo}
    />
  );
};

export default TodoCreateForm;
