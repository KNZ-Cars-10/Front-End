import { Route, Routes } from "react-router-dom";
import { DashPage } from "../pages/dash/dash";
import { LoginPage } from "../pages/login/login";
import { AdvertProvider } from "../providers/advertContext/advertContext";
import { ProfileViewUser } from "../pages/ProfileViewUser";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
// import { AdvertProvider } from "../providers/advertContext/advertContext";

export const RouterComponent = () => {
  return (
    <AdvertProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/dash" element={<DashPage />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/profile" element={<ProfileViewAdmin />} />
        <Route path="/users/:userId" element={<ProfileViewUser /> } />
      </Routes>
    </AdvertProvider>
  );
};
