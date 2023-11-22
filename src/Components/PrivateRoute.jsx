import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (!user)
    return <Navigate to="/login" state={{ pathname }} replace={true} />;

  return children;
};
