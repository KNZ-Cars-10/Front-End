import { z } from "zod";
import {
  advertSchema,
  advertSchemaRequest,
  advertSchemaResponse,
  advertsSchema,
  externalCar,
  externalCars,
  updateAdvertSchema,
} from "../../schemas/adverts.schemas";
import {
  commentSchema,
  commentSchemaRquest,
  commentsSchema,
  commentsSchemaUpdate,
} from "../../schemas/comments.schemas";

export type IDefaultProviderProps = {
  children: React.ReactNode;
};

export type TAdvertResponseFull = {
  count: number;
  data: TAdverts;
};

export type TAdvert = z.infer<typeof advertSchema>;

export type TAdvertRequest = z.infer<typeof advertSchemaRequest>;

export type TAdvertResponse = z.infer<typeof advertSchemaResponse>;

export type TAdverts = z.infer<typeof advertsSchema>;

export type TAdvertUpdate = z.infer<typeof updateAdvertSchema>;

export type TExternalCar = z.infer<typeof externalCar>;

export type TExternalCars = z.infer<typeof externalCars>;

export type TComment = z.infer<typeof commentSchema>;

export type TCommentRequest = z.infer<typeof commentSchemaRquest>;

export type TCommentupdate = z.infer<typeof commentsSchemaUpdate>;

export type TComments = z.infer<typeof commentsSchema>;

export type TAdvertContext = {
  returnRequest: TAdvertResponseFull | undefined;
  setReturnRequest: React.Dispatch<
    React.SetStateAction<TAdvertResponseFull | undefined>
  >;
  updateAdvertModal: boolean;
  setUpdateAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: TAdverts | undefined;
  setData: React.Dispatch<React.SetStateAction<TAdverts | undefined>>;

  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  createAdvertModal: boolean;
  setCreateAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;
  brand: string | null;
  setBrand: React.Dispatch<React.SetStateAction<string | null>>;
  model: string | null;
  setModel: React.Dispatch<React.SetStateAction<string | null>>;
  color: string | null;
  setColor: React.Dispatch<React.SetStateAction<string | null>>;
  year: string | null;
  setYear: React.Dispatch<React.SetStateAction<string | null>>;
  fuel: string | null;
  setFuel: React.Dispatch<React.SetStateAction<string | null>>;
  mileage: string | null;
  setMileage: React.Dispatch<React.SetStateAction<string | null>>;
  price: string | null;
  setPrice: React.Dispatch<React.SetStateAction<string | null>>;
  externalBrands: string[] | null;
  setExternalBrands: React.Dispatch<React.SetStateAction<string[] | null>>;
  externalModels: string[] | null;
  setExternalModels: React.Dispatch<React.SetStateAction<string[] | null>>;
  updatePage: boolean;
  setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAdvertModal: boolean;
  setDeleteAdvertModal: React.Dispatch<React.SetStateAction<boolean>>;

  brands: string[] | null;
  setBrands: React.Dispatch<React.SetStateAction<string[] | null>>;
  models: string[] | null;
  setModels: React.Dispatch<React.SetStateAction<string[] | null>>;
  colors: string[] | null;
  setColors: React.Dispatch<React.SetStateAction<string[] | null>>;
  years: string[] | null;
  setYears: React.Dispatch<React.SetStateAction<string[] | null>>;
  fuels: string[] | null;
  setFuels: React.Dispatch<React.SetStateAction<string[] | null>>;
  maxMileage: string | null;
  setMaxMileage: React.Dispatch<React.SetStateAction<string | null>>;
  minPrice: string | null;
  setMinPrice: React.Dispatch<React.SetStateAction<string | null>>;
  maxPrice: string | null;
  setMaxPrice: React.Dispatch<React.SetStateAction<string | null>>;
  advertProfile: TAdvert | null;
  setAdvertProfile: React.Dispatch<React.SetStateAction<TAdvert | null>>;
  advertFull: TAdvertResponse | null;
  setAdvertFull: React.Dispatch<React.SetStateAction<TAdvertResponse | null>>;
  externalCars: TExternalCars | null;
  setExternalCars: React.Dispatch<React.SetStateAction<TExternalCars | null>>;
  externalBrand: string | null;
  setExternalBrand: React.Dispatch<React.SetStateAction<string | null>>;
  externalModel: string | null;
  setExternalModel: React.Dispatch<React.SetStateAction<string | null>>;
  currentCar: any | null;
  setCurrentCar: React.Dispatch<React.SetStateAction<any | null>>;

  getSpeceficAdvert(id: number): Promise<void>;
  getAdverts(): Promise<void>;
  getFilteredAdverts(): Promise<void>;
  createAdvert(formData: TAdvertRequest, image: File): Promise<void>;
  updateAdvert(
    formData: TAdvertUpdate,
    id: number,
    image?: File,
    neCoverImage?: File
  ): Promise<void>;
  deleteAdvert(id: number): Promise<void>;
  getExternalCars(): Promise<void>;
};
