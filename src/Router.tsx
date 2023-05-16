import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "routes/PrivateRoute";
import { PublicRoute } from "routes/PublicRoute";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainRoute />} /> */}
      <Route path="/" element={<></>} />
      <Route element={<PublicRoute />}>
        <Route path="/" element={<></>} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<></>} />
      </Route>
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default Router;