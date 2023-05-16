import { useCheckLoggedIn } from "hooks/auth/useCheckLoggedIn";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = (): React.ReactElement => {
  const { isLoggedIn } = useCheckLoggedIn();
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};