import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRefreshUser } from 'redux/auth/authOperations';
import { selectIsFetching, selectIsLogin } from 'redux/auth/authSelector';
import { fetchingOff, fetchingOn } from 'redux/auth/authSlice';
import Layout from './Layout';

export const App = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(fetchingOn());
    dispatch(authRefreshUser());
    setTimeout(() => {
      dispatch(fetchingOff());
    }, 0);
  }, [dispatch]);

  const PrivateRoute = ({ component }) => {
    return isLogin ? component : <Navigate to="/auth" />;
  };

  const PublicRoute = ({ component, restricted }) => {
    return isLogin && restricted ? <Navigate to="/home" /> : component;
  };

  return isFetching ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={isLogin ? '/home' : '/auth'} />} />
        <Route
          path="home"
          element={<PrivateRoute component={<HomePage />} />}
        />
        <Route
          path="auth"
          element={<PublicRoute component={<AuthPage />} restricted />}
        />
        <Route
          path="profile"
          element={<PrivateRoute component={<ProfilePage />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
