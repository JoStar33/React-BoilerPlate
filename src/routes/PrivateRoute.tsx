import { useCheckLoggedIn } from "hooks/auth/useCheckLoggedIn";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = (): React.ReactElement => {
  const { isLoggedIn } = useCheckLoggedIn();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};