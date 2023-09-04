import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { PasswordResetPage } from "../pages/sendEmailRecoverPassword/sendEmailRecoverPassword";
import { RegisterPage } from "../pages/register/register";
import { ProfileViewUser } from "../pages/ProfileViewUser";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
import { AdvertViewPage } from "../pages/AdvertView";
import ResetPassword from "../pages/resetPassword/resetPassword";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/recoverPassword" element={<PasswordResetPage />} />
      <Route path="/resetPassword/:token/:id" element={<ResetPassword />} />
      <Route path="/profile" element={<ProfileViewAdmin />} />
      <Route path="/advert/:advertId" element={<AdvertViewPage />} />
      <Route path="/advertiser/:advertiserId" element={<ProfileViewUser />} />
    </Routes>
  );
};
