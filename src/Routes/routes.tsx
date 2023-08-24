import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { PasswordResetPage } from "../pages/passwordReset/password-reset";
import { RegisterPage } from "../pages/register/register";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />
    </Routes>
  );
};
