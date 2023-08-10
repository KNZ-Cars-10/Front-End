import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  TAdvert,
  TAdvertContext,
  TAdvertUpdate,
} from "./@Types";

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
  const [adverts, setAdverts] = useState<TAdvert[]>([]);

  const createAdvert = (advert: TAdvert) => {
    setAdverts([...adverts, advert]);
  };

  const updateAdvert = (id: number, updatedAdvert: TAdvertUpdate) => {
    const updatedAdverts = adverts.map((advert) =>
      advert.id === id ? updatedAdvert : advert
    );
    setAdverts(updatedAdverts);
  };

  const deleteAdvert = (id: number) => {
    const updatedAdvert = adverts.filter((advert) => advert.id !== id);
    setAdverts(updatedAdvert);
  };
  return (
    <AdvertContext.
      value={{ createAdvert, updateAdvert, deleteAdvert }}
    >
      {children}
    </AdvertContext.Provider>
  );
};
