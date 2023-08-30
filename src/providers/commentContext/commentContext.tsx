import { createContext, useContext, useState } from "react";
import {
  IDefaultProviderProps,
  TComment,
  TCommentContext,
  TCommentRequest,
  TCommentupdate,
} from "./@Types";
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "../../services/api";
import { AdvertContext } from "../advertContext/advertContext";
import { UserContext } from "../userContext/userContext";

type responseError = {
  message: string;
};

export const CommentContext = createContext({} as TCommentContext);

export const CommentProvider = ({ children }: IDefaultProviderProps) => {
  const [deleteCommentModal, setDeleteCommentModal] = useState(false);

  const { setLoading } = useContext(UserContext);

  const { getSpeceficAdvert } = useContext(AdvertContext);

  let token = localStorage.getItem("Motors-Shop-Token");

  async function registerComment(formData: TCommentRequest, id: number) {
    try {
      setLoading(true);
      const response = await api.post<TComment>(`comment/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Comentario postado com sucesso `);
      getSpeceficAdvert(id);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "Advert not found") {
          toast.error("Anúncio não encontrado");
          console.log(error);
        } else if (error.response?.data.message == "Missing bearer token") {
          toast.error("Token não informado");
          console.log(error);
        } else if (error.response?.data.message == "Insufficient permission") {
          toast.error("Permissão insuficiente");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateComment(
    formData: TCommentupdate,
    commentid: number,
    advertId: number
  ) {
    try {
      setLoading(true);
      const response = await api.patch<TComment>(
        `comment/${commentid}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getSpeceficAdvert(advertId);
      toast.success(`Comentario atualizado com sucesso `);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteComment(commentid: number, advertId: number) {
    try {
      setLoading(true);
      const response = await api.delete(`comment/${commentid}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Comentario deletado com sucesso`);
      setDeleteCommentModal(false);
      getSpeceficAdvert(advertId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CommentContext.Provider
      value={{
        registerComment,
        updateComment,
        deleteCommentModal,
        setDeleteCommentModal,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
