import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRefreshUser } from 'redux/auth/authOperations';
import { selectIsLogin } from 'redux/auth/authSelector';

export const App = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRefreshUser());
  }, [dispatch]);

  return isLogin ? <HomePage /> : <AuthPage />;
};
