import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  IDefaultProviderProps,
  TComment,
  TCommentRequest,
} from "../advertContext/@Types";

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
  const [loading, setLoading] = useState(true);
  const [isAdvertise, setIsAdvertise] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState<TUserResponse | null>(null);
  const [profile, setProfile] = useState<TUserResponse | null>(null);
  const [userData, setUserData] = useState<TUserResponse | null>(null);
  const [data, setData] = useState<TUserResponse | null>(null);
  const [comments, setComment] = useState<TComment[] | null>(null);

  const navigate = useNavigate();

  const autoLoginUser = async () => {
    const token = localStorage.getItem("Motors-Shop-Token");
    if (token) {
      try {
        setLoading(true);
        const response = await api.post("login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("/");
        console.log("logou");
      } catch (error) {
        if (axios.isAxiosError<string>(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
        localStorage.removeItem("Motors-Shop-Token");
        console.log("n logou");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("Motors-Shop-Token");
    if (token) {
      getUserLoged(token);
    }
  }, []);

  useEffect(() => {
    // autoLoginUser();
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

      localStorage.setItem("Motors-Shop-Token", `${response.data.token}`);
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

  const advertsByUser = async (userId: number) => {
    const token = localStorage.getItem("Motors-Shop-Token");
    try {
      const response = await api.get(`users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const userProfile = async () => {
  //   const token = localStorage.getItem("Motors-Shop-Token");
  //   try {
  //     const response = await api.get("profile", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getUser = async (id: number) => {
    try {
      setLoading(true);

      const response = await api.get<TUserResponse>(`users/${id}`);

      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "User not found") {
          toast.error("Usuario não encontrado");
          navigate("/");
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
    localStorage.removeItem("Motors-Shop-Token");
  };

  const userUpdate = async (data: unknown) => {
    try {
      const token = localStorage.getItem("Motors-Shop-Token");
      const id = profile?.id;
      await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Seu Perfil Foi Alterado!");
    } catch (error) {
      console.log(error);
      toast("Não Foi Possível alterar Seu perfil");
    }
  };

  const userDelete = async (id: unknown) => {
    try {
      const token = localStorage.getItem("Motors-Shop-Token");

      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModalEditProfile(false);
      toast("Seu Perfil Foi excluído!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast("Não Foi Possível Ecluir Seu perfil");
    }
  };

  const listComments = async (id: number) => {
    try {
      const response = await api.get<TComment[]>(`/comment`);
      const allComments = response.data.filter(
        (comment) => comment.advert.id == id
      );
      setComment(allComments);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (id: number, data: TCommentRequest) => {
    try {
      const token = localStorage.getItem("Motors-Shop-Token");
      const response = await api.post<TComment>(`/comment/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      comments
        ? setComment([...comments, response.data])
        : setComment([response.data]);
      toast("Obrigado pelo seu comentário!");
    } catch (error) {
      console.log(error);
      toast("Não Foi Possível Comentar");
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUserLoged,
        userRegister,
        user,
        userLogout,
        setUser,
        userMenu,
        setUserMenu,
        userLogin,
        loading,
        setLoading,
        nav,
        setNav,
        getUser,
        autoLoginUser,
        isAdvertise,
        setIsAdvertise,
        profile,
        setProfile,
        setModalEditProfile,
        modalEditProfile,
        userUpdate,
        userDelete,
        advertsByUser,
        // userProfile,
        data,
        setData,
        userData,
        setUserData,
        comments,
        createComment,
        listComments,
        setComment,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
