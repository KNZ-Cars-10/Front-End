import { z } from "zod";
import {
  advertSchema,
  advertSchemaRequest,
  advertSchemaResponse,
  advertsSchema,
  updateAdvertSchema,
} from "../../schemas/adverts.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TAdvertResponseFull = {
  prevPage: string | null;
  nextPage: string | null;
  page: number;
  pages: number;
  count: number;
  data: TAdverts;
};

export type TAdvert = z.infer<typeof advertSchema>;

export type TAdvertRequest = z.infer<typeof advertSchemaRequest>;

export type TAdvertResponse = z.infer<typeof advertSchemaResponse>;

export type TAdverts = z.infer<typeof advertsSchema>;

export type TAdvertUpdate = z.infer<typeof updateAdvertSchema>;

export type TAdvertContext = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
