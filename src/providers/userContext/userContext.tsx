import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps } from "../advertContext/@Types";
import {
  TUser,
  TUserContext,
  TUserLoginFormValues,
  TUserRegister,
  TUserRespose,
} from "./@Types";
import { toast } from "react-toastify";

export const UserContext = createContext({} as TUserContext);

export const UserContextProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [userData, setUserData] = useState<TUserRespose | null>(null)
  const [data, setData] = useState<TUserRespose | null>(null)
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
    /* autoLoginUser() */;
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
      console.log(response)
    } catch (error) {
      toast.error("Usuário ou senha inválidos");
    }
  };

  const advertsByUser = async (userId: number) => {
    const token = localStorage.getItem("token")
    try {
      const response = await api.get(`users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const userProfile = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await api.get("profile", {
        
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        userRegister,
        user,
        userLogout,
        setUser,
        userLogin,
        autoLoginUser,
        advertsByUser,
        userData,
        setUserData,
        userProfile,
        data,
        setData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
