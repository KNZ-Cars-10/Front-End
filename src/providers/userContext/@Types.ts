import { z } from "zod";
import {
  updateUserSchema,
  userSchema,
  userSchemaRegister,
  userSchemaRequest,
  userSchemaResponse,
} from "../../schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;

export type TUserRegister = z.infer<typeof userSchemaRegister>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserRespose = z.infer<typeof userSchemaResponse>;

export type TUserUpdate = z.infer<typeof updateUserSchema>;

export type TUserContext = {
  user: TUser | null;
  userRegister: (FormData: TUserRegister) => Promise<void>;
  userLogout: () => void;
  autoLoginUser: () => Promise<void>;
  userLogin: (formData: TUserLoginFormValues) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
  isAdvertise: boolean,
  setIsAdvertise: React.Dispatch<React.SetStateAction<boolean>>
};

export type TUserLoginFormValues = {
  email: string;
  password: string;
};
