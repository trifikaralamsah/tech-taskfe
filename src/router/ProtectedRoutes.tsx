/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: any) => {
  //   const authToken = useSelector((state: any) => state.token);
  const authToken = useAppSelector((state: any) => state.auth.user);
  if (authToken === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
