import { z } from "zod";
import {
  AdvertDataAxios,
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
  // loading: boolean;
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // mock: TAdvertResponseFull | undefined;
  // setMock: React.Dispatch<
  //   React.SetStateAction<TAdvertResponseFull | undefined>
  // >;
  // data: TAdvertResponseFull | undefined;
  // setData: React.Dispatch<
  //   React.SetStateAction<TAdvertResponseFull | undefined>
  // >;
  // filter: boolean;
  // setFilter: React.Dispatch<React.SetStateAction<boolean>>;

  // brand: string | null;
  // setBrand: React.Dispatch<React.SetStateAction<string | null>>;
  // model: string | null;
  // setModel: React.Dispatch<React.SetStateAction<string | null>>;
  // color: string | null;
  // setColor: React.Dispatch<React.SetStateAction<string | null>>;
  // year: number | null;
  // setYear: React.Dispatch<React.SetStateAction<number | null>>;
  // fuel: string | null;
  // setFuel: React.Dispatch<React.SetStateAction<string | null>>;
  // mileage: number | null;
  // setMileage: React.Dispatch<React.SetStateAction<number | null>>;
  // price: number | null;
  // setPrice: React.Dispatch<React.SetStateAction<number | null>>;

  setAdverts: React.Dispatch<React.SetStateAction<TAdvertResponse[] | null>>
  adverts: TAdvertResponse[] | null
  setNewAdvert: React.Dispatch<React.SetStateAction<AdvertDataAxios | null>>
  newAdvert: AdvertDataAxios | null

  // getAdverts(): Promise<void>;
  createAdvert: (advert: AdvertDataAxios) => void;
  updateAdvert: (id: number, updatedAdvert: TAdvertUpdate) => void;
  deleteAdvert: (id: number) => void;
};
