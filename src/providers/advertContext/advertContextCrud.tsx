import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  TAdvertContext,
  TAdvertResponse,
  TAdvertUpdate,
} from "./@Types";
import { api } from "../../services/api";
import {AdvertDataAxios, AdvertResponse } from "../../schemas/adverts.schemas";

// import { createContext, useState } from "react";
// import { IDefaultProviderProps, TAdvertContext } from "./@Types";

// export const AdvertContext = createContext({});

// export const AdvertProvider = ({ children }: IDefaultProviderProps) => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <AdvertContext.Provider
//       value={{
//         loading,
//         setLoading,
//       }}
//     >
//       {children}
//     </AdvertContext.Provider>
//   );
// };

export const AdvertContext = createContext({} as TAdvertContext);

export const AdvertContextProvider = ({ children }: IDefaultProviderProps) => {
  const [adverts, setAdverts] = useState<TAdvertResponse[] | null>([]);
  
  const updateAdvert = (id: number, updatedAdvert: TAdvertUpdate) => {
    const updatedAdverts = adverts!.map((advert) =>
      advert.id === id ? updatedAdvert : advert
    );
    setAdverts(updatedAdverts);
  };

  const deleteAdvert = (id: number) => {
    const updatedAdvert = adverts!.filter((advert) => advert.id !== id);
    setAdverts(updatedAdvert);
  };
  return (
    <AdvertContext.Provider
      value={{  updateAdvert, deleteAdvert, setAdverts, adverts }}
    >
      {children}
    </AdvertContext.Provider>
  );
};
