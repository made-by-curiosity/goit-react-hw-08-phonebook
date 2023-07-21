import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              restrictedTo="/contacts"
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<SignUpPage />}
              restrictedTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} restrictedTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
