import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/dash/dash";
import { LoginPage } from "../pages/login/login";
import { PasswordResetPage } from "../pages/passwordReset/password-reset";
import { AdvertProvider } from "../providers/advertContext/advertContext";
import { RegisterPage } from "../pages/register/register";
import { CarsProvider } from "../providers/carsContext/carsContext";

// import { AdvertProvider } from "../providers/advertContext/advertContext";

export const RouterComponent = () => {
  return (
    <AdvertProvider>
      <CarsProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<DashPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
        </Routes>
      </CarsProvider>
    </AdvertProvider>
  );
};
