import { PropTypes } from "prop-types";
import { useContext } from "react";
import { Context } from "../routeControles/ContextServer";
import { Navigate, useLocation } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const { user } = useContext(Context);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} replace />;
  }

  return user ? <>{children}</> : null;
}
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
