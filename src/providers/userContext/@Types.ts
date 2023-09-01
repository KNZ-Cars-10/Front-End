import { z } from "zod";
import {
  userSchemaUpdate,
  userSchema,
  userSchemaRegister,
  userSchemaRequest,
  userSchemaResponse,
  recoverPasswordUserSchema,
} from "../../schemas/users.schemas";

import {
  responseLoginSchema,
  requestLoginSchema,
} from "../../schemas/login.schemas";
import { TComment, TCommentRequest } from "../advertContext/@Types";

export type TUser = z.infer<typeof userSchema>;

export type TUserRegister = z.infer<typeof userSchemaRegister>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TUserUpdate = z.infer<typeof userSchemaUpdate>;

export type TLoginRequest = z.infer<typeof requestLoginSchema>;

export type TLoginResponse = z.infer<typeof responseLoginSchema>;

export type TRecoverPassword = z.infer<typeof recoverPasswordUserSchema>;

export type TUserContext = {
  user: TUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  userRegister: (FormData: TUserRegister) => Promise<void>;
  getUser: (id: number) => Promise<void>;
  getUserLoged: (token: string) => Promise<void>;
  userLogout: () => void;
  autoLoginUser: () => Promise<void>;
  userLogin: (formData: TLoginRequest) => Promise<void>;
  isAdvertise: boolean;
  setIsAdvertise: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditProfile: boolean;
  setModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  profile: TUserResponse | null;
  setProfile: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  userMenu: boolean;
  setUserMenu: React.Dispatch<React.SetStateAction<boolean>>;
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  userUpdate: (data: unknown) => Promise<void>;
  userDelete: (data: unknown) => Promise<void>;
  advertsByUser: (userId: number) => Promise<void>;
  userData: TUserResponse | null;
  setUserData: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  // userProfile: () => Promise<void>;
  data: TUserResponse | null;
  setData: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  listComments: (id: number) => Promise<void>;
  createComment: (id: number, data: TCommentRequest) => Promise<void>;
  comments: TComment[] | null;
  setComment: React.Dispatch<React.SetStateAction<TComment[] | null>>;
};
