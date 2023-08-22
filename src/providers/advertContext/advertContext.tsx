import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  TAdvertContext,
  TAdvertResponseFull,
} from "./@Types";
import { api } from "../../services/api";
import axios from "axios";
import { AdvertDataAxios, AdvertResponse } from "../../schemas/adverts.schemas";

export const AdvertContext = createContext({} as TAdvertContext);

export const AdvertProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);

  const [mock, setMock] = useState<TAdvertResponseFull | undefined>();

  const [data, setData] = useState<TAdvertResponseFull | undefined>();

  const [filter, setFilter] = useState(false);

  const [brand, setBrand] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [fuel, setFuel] = useState<string | null>(null);
  const [mileage, setMileage] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [newAdvert, setNewAdvert] = useState<AdvertDataAxios | null>(null);


  const createAdvert = async (advert: AdvertDataAxios) => {
    const token = localStorage.getItem("token");
    
    try {
      const response = await api.post<AdvertResponse>("adverts", advert, {
        headers: {Authorization: `Bearer ${token}`},
      })
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  async function getAdverts() {
    try {
      setLoading(true);

      const response = await api.get<TAdvertResponseFull>("adverts");

      setMock(response.data);
      setData(response.data);
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

  return (
    <AdvertContext.Provider
      value={{
        loading,
        createAdvert,
        newAdvert,
        setNewAdvert,
        setLoading,
        mock,
        setMock,
        getAdverts,
        data,
        setData,
        filter,
        setFilter,
        brand,
        setBrand,
        model,
        setModel,
        color,
        setColor,
        year,
        setYear,
        fuel,
        setFuel,
        mileage,
        setMileage,
        price,
        setPrice,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};
