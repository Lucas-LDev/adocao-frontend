import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ProtectedRoute = () => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return (
      <div className="grid place-items-center min-h-40">
        <span>Carregando</span>
        <FontAwesomeIcon icon={faSpinner} className="text-6xl animate-spin duration-300" />
      </div>
    )
  };

  if (!isAuthenticated) {
    return <Navigate to={'/login-admin'} replace/>;
  };

  return <Outlet/>;
};

export default ProtectedRoute;