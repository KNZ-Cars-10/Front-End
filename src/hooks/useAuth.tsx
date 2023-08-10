import { useContext } from "react";
import { AuthContext } from "../providers/userContext/authContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
