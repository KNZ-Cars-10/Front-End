import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/dash/dash";
import { LoginPage } from "../pages/login/login";
import { PasswordResetPage } from "../pages/passwordReset/password-reset";
import { AdvertProvider } from "../providers/advertContext/advertContext";

export const RouterComponent = () => {
  return (
    <AdvertProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/dash" element={<DashPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </AdvertProvider>
  );
};
