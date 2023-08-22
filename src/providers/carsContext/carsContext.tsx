import { ReactNode, createContext, useEffect, useState } from "react";
import { TCarsContext } from "./@Types";
import { TBrand, TCars } from "../../schemas/cars.schema";
import { kenzieCarsApi } from "../../services/api";

interface CarsProps {
  children: ReactNode;
}

export const carsContext = createContext<TCarsContext>({} as TCarsContext);

export const CarsProvider = ({ children }: CarsProps) => {
  const [cars, setCars] = useState<TCars[]>([]);
  const [brands, setBrands] = useState([""]);

  const getBrands = async () => {
    try {
      const response = await kenzieCarsApi.get<TBrand>("cars");
      const dataKeys = Object.keys(response.data);
      setBrands(dataKeys);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  const getCars = async (brand: string) => {
    try {
      const response = await kenzieCarsApi.get<TCars[]>(`cars?brand=${brand}`);
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <carsContext.Provider value={{ brands, getCars, cars }}>
      {children}
    </carsContext.Provider>
  );
};
