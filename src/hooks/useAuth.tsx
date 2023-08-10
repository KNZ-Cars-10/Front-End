import { useContext } from "react";
import { AuthContext } from "../providers/authContext/authContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
