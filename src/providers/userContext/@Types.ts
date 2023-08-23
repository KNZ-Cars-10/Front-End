import { z } from "zod";
import {
  userSchemaUpdate,
  userSchema,
  userSchemaRegister,
  userSchemaRequest,
  userSchemaResponse,
} from "../../schemas/users.schemas";

import {
  responseLoginSchema,
  requestLoginSchema,
} from "../../schemas/login.schemas";

export type TUser = z.infer<typeof userSchema>;

export type TUserRegister = z.infer<typeof userSchemaRegister>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TUserUpdate = z.infer<typeof userSchemaUpdate>;

// export type TUserSend = z.infer<typeof userSchemaRegister>;

export type TLoginRequest = z.infer<typeof requestLoginSchema>;

export type TLoginResponse = z.infer<typeof responseLoginSchema>;

export type TUserContext = {
  user: TUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  userRegister: (FormData: TUserRegister) => Promise<void>;
  userLogout: () => void;
  autoLoginUser: () => Promise<void>;
  userLogin: (formData: TUserLoginFormValues) => Promise<void>;
  isAdvertise: boolean;
  setIsAdvertise: React.Dispatch<React.SetStateAction<boolean>>;
  profile: TUserResponse | null;
  setProfile: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  userMenu: boolean;
  setUserMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TUserLoginFormValues = {
  email: string;
  password: string;
};
