import { createContext, useContext, useEffect, useState } from "react";
import {
  IDefaultProviderProps,
  IUserContext,
  TEmailRequest,
  TLoginRequest,
  TLoginResponse,
  TResetPasswordRequest,
  TUserRegister,
  TUserResponse,
  TUserUpdateRequest,
} from "./@Types";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import axios from "axios";

type responseError = {
  message: string;
};

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);

  const [userMenu, setUserMenu] = useState(false);

  const [updateProfile, setUpdateProfile] = useState(false);

  const [updateAddress, setUpdateAddress] = useState(false);

  const [deleteProfile, setDeleteProfile] = useState(false);

  const [user, setUser] = useState<TUserResponse | null>(null);

  const [nav, setNav] = useState(false);

  const [profile, setProfile] = useState<TUserResponse | null>(null);

  const navigate = useNavigate();

  let token = localStorage.getItem("Motors-Shop-Token");

  useEffect(() => {
    if (token) {
      getUserLoged(token);
    }
  }, []);

  async function login(formData: TLoginRequest) {
    try {
      setLoading(true);
      const response = await api.post<TLoginResponse>("login", formData);

      localStorage.setItem("Motors-Shop-Token", response.data.token);
      getUserLoged(response.data.token);
      toast.success(`Bem-vindo de volta !!`);

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
  }

  async function registerUser(formData: TUserRegister) {
    try {
      setLoading(true);
      const response = await api.post<TUserResponse>("users", formData);
      toast.success(`Usuário ${response.data.name} cadastrado com sucesso `);
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
  }

  async function updateUser(
    formData: TUserUpdateRequest,
    deleteImage: boolean,
    newProfileImage?: File
  ) {
    if (newProfileImage) {
      const newImage = { image: newProfileImage };

      try {
        setLoading(true);

        const response = await api.post("adverts/cover", newImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        formData.avatar = response.data.secure_url;
      } catch (error) {
        if (axios.isAxiosError<string>(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }

    if (deleteImage) {
      formData.avatar = null;
    }
    try {
      setLoading(true);
      const response = await api.patch<TUserResponse>("profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Usuário ${response.data.name} atualizado com sucesso `);
      getUserLoged(token!);
      setUpdateProfile(false);
      setUpdateAddress(false);
      setProfile(response.data);
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
  }

  async function deleteUser(id: number | undefined) {
    try {
      setLoading(true);
      const response = await api.delete(`users/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Usuário ${profile?.name} deletado com sucesso`);
      setDeleteProfile(false);
      logout();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUserLoged(token: string) {
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
        if (error.response?.data.message == "jwt expired") {
          toast.error(
            "Token de autenticação expirado, por favor faça login novamente"
          );
          navigate("/login");
          logout();
        } else if (error.response?.data.message == "User not found") {
          toast.error("Usuário não encontrado, por favor faça login novamente");
          console.log(error);
          logout();
        }
        console.log(error);
        logout();
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function getUser(id: number) {
    try {
      setLoading(true);

      const response = await api.get<TUserResponse>(`users/${id}`);

      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "User not found") {
          toast.error("Usuário não encontrado");
          navigate("/");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  async function sendEmailPassword(email: TEmailRequest) {
    try {
      setLoading(true);

      const response = await api.post(
        "recover-password/forgot-password",
        email
      );
      toast.success("Email enviado com sucesso");
      navigate("/");
    } catch (error) {
      console.log("123");

      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "User not found") {
          toast.error("Usuário não encontrado");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function resetPassword(token: string, data: TResetPasswordRequest) {
    try {
      setLoading(true);

      const response = await api.post(`recover-password/${token}`, data);
      toast.success("Senha atualizada com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("Motors-Shop-Token");

    setProfile(null);
    setUser(null);
    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{
        profile,
        setProfile,
        deleteProfile,
        setDeleteProfile,
        userMenu,
        setUserMenu,
        updateProfile,
        setUpdateProfile,
        updateAddress,
        setUpdateAddress,
        nav,
        setNav,
        user,
        setUser,
        loading,
        setLoading,
        login,
        registerUser,
        updateUser,
        deleteUser,
        getUserLoged,
        getUser,
        sendEmailPassword,
        resetPassword,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
