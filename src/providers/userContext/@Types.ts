import { z } from "zod";
import {
  userSchemaUpdate,
  userSchema,
  userSchemaRegister,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../../schemas/users.schemas";
import {
  responseLoginSchema,
  requestLoginSchema,
} from "../../schemas/login.schemas";
import {
  emailSchema,
  resetPasswordSchema,
} from "../../schemas/resetPassword.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TUser = z.infer<typeof userSchema>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserRegister = z.infer<typeof userSchemaRegister>;

export type TUserUpdateRequest = z.infer<typeof userSchemaUpdate>;

export type TUsersResponse = z.infer<typeof usersSchemaResponse>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TLoginRequest = z.infer<typeof requestLoginSchema>;

export type TLoginResponse = z.infer<typeof responseLoginSchema>;

export type TEmailRequest = z.infer<typeof emailSchema>;

export type TResetPasswordRequest = z.infer<typeof resetPasswordSchema>;

export type IUserContext = {
  user: TUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  profile: TUserResponse | null;
  setProfile: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;

  updateProfile: boolean;
  setUpdateProfile: React.Dispatch<React.SetStateAction<boolean>>;
  updateAddress: boolean;
  setUpdateAddress: React.Dispatch<React.SetStateAction<boolean>>;
  deleteProfile: boolean;
  setDeleteProfile: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userMenu: boolean;
  setUserMenu: React.Dispatch<React.SetStateAction<boolean>>;
  login: (formData: TLoginRequest) => Promise<void>;
  logout: () => void;

  registerUser: (formData: TUserRegister) => Promise<void>;
  updateUser(
    formData: TUserUpdateRequest,
    deleteImage: boolean,
    newProfileImage?: File
  ): Promise<void>;
  deleteUser: (id: number | undefined) => Promise<void>;
  getUserLoged: (token: string) => Promise<void>;
  getUser(id: number): Promise<void>;
  sendEmailPassword(email: TEmailRequest): Promise<void>;
  resetPassword(token: string, data: TResetPasswordRequest): Promise<void>;
};
