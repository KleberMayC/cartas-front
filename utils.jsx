import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const isUserLoggedIn = () => {
  return !!localStorage.getItem("authToken");
};

export const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!isUserLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
