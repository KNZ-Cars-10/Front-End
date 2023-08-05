import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/dash/dash";
// import { AdvertProvider } from "../providers/advertContext/advertContext";

export const RouterComponent = () => {
  return (
    // <AdvertProvider>
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="/dash" element={<DashPage />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
    // </AdvertProvider>
  );
};
