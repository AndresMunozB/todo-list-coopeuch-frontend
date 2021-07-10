import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCaches } from '../store/actions';

const UseCache = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCaches.start());
  }, [dispatch]);
};

export default UseCache;
