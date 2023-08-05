import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/dash/dash";

export const RouterComponent = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="/dash" element={<DashPage />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};
