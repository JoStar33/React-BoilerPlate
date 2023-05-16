import { useCheckLoggedIn } from "hooks/auth/useCheckLoggedIn";
import { Navigate } from "react-router-dom";


//로그인해야만 접근할 수 있는 메인라우트.
export const MainRoute = (): React.ReactElement => {
  const { isLoggedIn } = useCheckLoggedIn();
  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/login" />
  );
};