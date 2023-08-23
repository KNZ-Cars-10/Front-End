import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps } from "../advertContext/@Types";

import {
  TLoginRequest,
  TLoginResponse,
  TUserContext,
  TUserRegister,
  TUserResponse,
} from "./@Types";
import { toast } from "react-toastify";
import { AdvertContext } from "../advertContext/advertContext";
import axios from "axios";

type responseError = {
  message: string;
};

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const { setLoading } = useContext(AdvertContext);
  const [isAdvertise, setIsAdvertise] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [user, setUser] = useState<TUserResponse | null>(null);
  const [profile, setProfile] = useState<TUserResponse | null>(null);

  const navigate = useNavigate();

  const autoLoginUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        setLoading(true);
        const response = await api.post("login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError<string>(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    autoLoginUser();
  }, []);

  const userRegister = async (formData: TUserRegister) => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);

      toast.success(`Usuario ${response.data.name} cadastrado com sucesso `);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "Phone number already exists") {
          toast.error("Numero de telefone já esta cadastrado em sua conta");
          console.log(error);
        } else if (error.response?.data.message == "Email already exists") {
          toast.error("Email já cadastrado em sua conta");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const getUserLoged = async (token: string) => {
    try {
      setLoading(true);
      const response = await api.get<TUserResponse>("profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfile(response.data);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (
          error.response?.data.message == "jwt expired" ||
          error.response?.data.message == "Not Found"
        ) {
          toast.error(
            "Token de autenticação expirado, por favor faça login novamente"
          );
          navigate("/login");
          userLogout();
        }
        console.log(error);
        userLogout();
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: TLoginRequest) => {
    try {
      setLoading(true);
      const response = await api.post<TLoginResponse>("login", formData);

      localStorage.setItem("token", `${response.data.token}`);
      toast.success(`Bem-vindo de volta !!`);
      getUserLoged(response.data.token);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        if (error.response?.status == 401) {
          toast.error("Credenciais incorretas");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setProfile(null);
    setUser(null);
    navigate("/login");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        user,
        userLogout,
        setUser,
        userMenu,
        setUserMenu,
        userLogin,
        autoLoginUser,
        isAdvertise,
        setIsAdvertise,
        profile,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
