/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const PublicRoutes = ({ children }: any) => {
  // const authToken = useSelector((state: any) => state.token);
  const authToken = useAppSelector((state: any) => state.auth.user);

  if (authToken !== null) {
    return <Navigate to="/dashboard" replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoutes;
