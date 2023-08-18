import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps } from "../advertContext/@Types";
import {
  TUser,
  TUserContext,
  TUserLoginFormValues,
  TUserRegister,
} from "./@Types";
import { toast } from "react-toastify";

export const UserContext = createContext({} as TUserContext);

export const UserContextProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const autoLoginUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await api.post("login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("dash");
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
  };
  useEffect(() => {
    autoLoginUser();
  }, []);

  const userRegister = async (formData: TUserRegister) => {
    try {
      const response = await api.post("users", formData);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.accessToken);
      toast.success("Cadastro realizado com sucesso!");
      navigate("dash");
    } catch (error) {
      toast.error("Usuário já existente");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const userLogin = async (formData: TUserLoginFormValues) => {
    try {
      const response = await api.post("login", formData);

      localStorage.setItem("token", `${response.data.token}`);

      navigate("dash");

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      setPasswordError(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        user,
        userLogout,
        setUser,
        userLogin,
        passwordError,
        autoLoginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
