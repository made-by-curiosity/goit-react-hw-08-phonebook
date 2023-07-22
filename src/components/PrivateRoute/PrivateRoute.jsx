import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, restrictedTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={restrictedTo} /> : component;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  restrictedTo: PropTypes.string.isRequired,
};
