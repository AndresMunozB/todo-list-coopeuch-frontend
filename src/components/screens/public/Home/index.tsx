import { Box } from '@material-ui/core';
import clsx from 'clsx';
import Image from 'material-ui-image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../../commons/todo/store/actions';
import { todosNonDeletedSelector } from '../../../commons/todo/store/selectors';
import useStyles from './styles';
import TodoCreateForm from 'components/commons/todo/TodoCreateForm';
import TodoList from 'components/commons/todo/TodoList';

const Home = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const todos = useSelector(todosNonDeletedSelector);

  useEffect(() => {
    dispatch(getTodos.start());
  }, [dispatch]);

  return (
    <Box className={clsx(classes.backgroundContainer)}>
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
            <TodoCreateForm />
          </Box>
        </Box>
        <Box
          boxShadow={10}
          borderRadius={50}
          paddingTop={2}
          paddingBottom={4}
          height="600px"
          width="500px"
        >
          <TodoList todos={todos} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
