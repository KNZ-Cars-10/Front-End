import { createContext, useContext, useEffect, useState } from "react";
import {
  IDefaultProviderProps,
  TAdvert,
  TAdvertContext,
  TAdvertRequest,
  TAdvertResponse,
  TAdvertResponseFull,
  TAdvertUpdate,
  TAdverts,
  TExternalCar,
  TExternalCars,
} from "./@Types";
import { api } from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../userContext/userContext";

type responseError = {
  message: string;
};

export const AdvertContext = createContext({} as TAdvertContext);

export const AdvertProvider = ({ children }: IDefaultProviderProps) => {
  const { setLoading, profile } = useContext(UserContext);

  const [advertProfile, setAdvertProfile] = useState<TAdvert | null>(null);
  const [advertFull, setAdvertFull] = useState<TAdvertResponse | null>(null);
  const [returnRequest, setReturnRequest] = useState<
    TAdvertResponseFull | undefined
  >();

  const [updateAdvertModal, setUpdateAdvertModal] = useState(false);
  const [deleteAdvertModal, setDeleteAdvertModal] = useState(false);

  const [updatePage, setUpdatePage] = useState(true);

  const [data, setData] = useState<TAdverts | undefined>();
  const [filter, setFilter] = useState(false);
  const [createAdvertModal, setCreateAdvertModal] = useState(false);
  const [selects, setSelects] = useState<any>(null);
  const [externalBrands, setExternalBrands] = useState<string[] | null>(null);
  const [externalModels, setExternalModels] = useState<string[] | null>(null);
  const [externalBrand, setExternalBrand] = useState<string | null>(null);
  const [currentCar, setCurrentCar] = useState<any | []>([]);
  const [externalModel, setExternalModel] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [fuel, setFuel] = useState<string | null>(null);
  const [mileage, setMileage] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [externalCars, setExternalCars] = useState<TExternalCars | null>(null);

  const [brands, setBrands] = useState<string[] | null>(null);
  const [models, setModels] = useState<string[] | null>(null);
  const [colors, setColors] = useState<string[] | null>(null);
  const [years, setYears] = useState<string[] | null>(null);
  const [fuels, setFuels] = useState<string[] | null>(null);
  const [maxMileage, setMaxMileage] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<string | null>(null);

  useEffect(() => {
    foundBrands();
    foundModels();
    foundColor();
    foundYears();
    foundFuel();
    foundMaxMileage();
    foundExtremePrices();
  }, [returnRequest]);

  useEffect(() => {
    getExternalCars();
  }, []);

  useEffect(() => {
    let models: string[] = [];

    if (externalBrand) {
      selects[externalBrand!].map((brand: any) => {
        models.push(brand.name);
      });
      setExternalModels(models);
    }
  }, [externalBrand]);

  useEffect(() => {
    if (externalModels) {
      if (externalModels?.length > 1) {
        setExternalModel(externalModels![0]);
      }
    }
  }, [externalModels]);

  useEffect(() => {
    if (externalModel != null && externalCars?.length! > 1) {
      const aux = externalCars?.filter(
        (car) => car.brand == externalBrand && car.name == externalModel
      );

      setCurrentCar(aux![0]);
    }
  }, [externalCars, externalModel]);

  function foundBrands() {
    let aux: string[] = [];

    returnRequest?.data.map((advert) => {
      if (!aux?.includes(advert.brand)) {
        aux.push(advert.brand);
      }
    });

    setBrands(aux);
  }

  function foundModels() {
    let aux: string[] = [];

    returnRequest?.data.map((advert) => {
      if (!aux?.includes(advert.model)) {
        aux.push(advert.model);
      }
    });

    setModels(aux);
  }

  function foundFuel() {
    let aux: string[] = [];

    returnRequest?.data.map((advert) => {
      if (!aux?.includes(advert.fuel)) {
        aux.push(advert.fuel);
      }
    });

    setFuels(aux);
  }

  function foundColor() {
    let aux: string[] = [];

    returnRequest?.data.map((advert) => {
      if (!aux?.includes(advert.color)) {
        aux.push(advert.color);
      }
    });

    setColors(aux);
  }

  function foundYears() {
    let aux: string[] = [];

    returnRequest?.data.map((advert) => {
      if (!aux?.includes(advert.year)) {
        aux.push(advert.year);
      }
    });

    setYears(aux);
  }

  function foundMaxMileage() {
    let aux: string = "0";

    returnRequest?.data.map((advert) => {
      if (advert.mileage > aux) {
        aux = advert.mileage;
      }
    });
    setMaxMileage(aux);
    setMileage(aux);
  }

  function foundExtremePrices() {
    let auxMax: string = "0";

    returnRequest?.data.map((advert) => {
      if (advert.price > auxMax) {
        auxMax = advert.price;
      }
    });
    setMaxPrice(auxMax);

    let auxMin: string = auxMax;

    returnRequest?.data.map((advert) => {
      if (advert.price < auxMin) {
        auxMin = advert.price;
      }
    });

    setMinPrice(auxMin);
    setPrice(auxMin);
  }

  let token = localStorage.getItem("Motors-Shop-Token");

  const getAdverts = async () => {
    try {
      setLoading(true);

      const response = await api.get<TAdvertResponseFull>("adverts");

      setReturnRequest(response.data);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const createAdvert = async (formData: TAdvertRequest, image: File) => {
    const newImage = { image: image };

    try {
      setLoading(true);

      const response = await api.post("adverts/cover", newImage, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      formData.cover_image = response.data.secure_url;
      
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
    console.log(formData);
    
    try {
      setLoading(true);

      const response = await api.post<TAdvertResponse>(`adverts`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUpdatePage(!updatePage);
      toast.success(`Anuncio ${response.data.model} cadastrado com sucesso `);
      setCreateAdvertModal(false);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getFilteredAdverts = async () => {
    let params = {
      brand: brand,
      model: model,
      year: year,
      fuel: fuel,
      color: color,
      price: price,
      mileage: mileage,
    };

    try {
      setLoading(true);

      const response = await api.get<TAdvertResponseFull>("adverts", {
        params: params,
      });

      setData(response.data.data);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const updateAdvert = async (
    formData: TAdvertUpdate,
    id: number,
    image?: File,
    neCoverImage?: File
  ) => {
    if (image) {
      const newImage = { image: image };

      try {
        setLoading(true);

        const response = await api.post("adverts/cover", newImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        formData.other_images?.push(response.data.secure_url);
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

    if (neCoverImage) {
      const newImage = { image: neCoverImage };

      try {
        setLoading(true);

        const response = await api.post("adverts/cover", newImage, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        formData.cover_image = response.data.secure_url;
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

    try {
      setLoading(true);
      const response = await api.patch<TAdvertResponse>(
        `adverts/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(`Anúncio ${response.data.model} atualizado com sucesso `);
      setUpdatePage(!updatePage);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "Advert not found") {
          toast.error("Anúncio não encontrado");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
      setUpdateAdvertModal(false);
    }
  };

  const getSpeceficAdvert = async (id: number) => {
    try {
      setLoading(true);

      const response = await api.get<TAdvertResponse>(`adverts/${id}`);

      setAdvertFull(response.data);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getExternalCars = async () => {
    let aux: TExternalCars = [];

    try {
      setLoading(true);

      const response = await api.get<TExternalCar>(
        "https://kenzie-kars.herokuapp.com/cars"
      );

      setSelects(response.data);

      const brands = Object.keys(response.data);

      setExternalBrand(brands[0]);

      setExternalBrands(brands);

      brands.map(async (brand) => {
        const response = await api.get<TExternalCars>(
          "https://kenzie-kars.herokuapp.com/cars",
          {
            params: {
              brand: brand,
            },
          }
        );

        response.data.map((car) => {
          aux.push(car);
        });
      });

      setExternalCars(aux);
    } catch (error) {
      if (axios.isAxiosError<string>(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteAdvert = async (id: number) => {
    try {
      setLoading(true);
      const response = api.delete(`adverts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`Anúncio ${advertProfile?.model} Deletado com sucesso `);
      setUpdatePage(!updatePage);
      setDeleteAdvertModal(false);
    } catch (error) {
      if (axios.isAxiosError<responseError>(error)) {
        if (error.response?.data.message == "Advert not found") {
          toast.error("Anúncio não encontrado");
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdvertContext.Provider
      value={{
        getFilteredAdverts,
        returnRequest,
        setReturnRequest,
        getAdverts,
        getSpeceficAdvert,
        advertProfile,
        getExternalCars,
        setAdvertProfile,
        updatePage,
        setUpdatePage,
        deleteAdvert,
        advertFull,
        setAdvertFull,
        updateAdvertModal,
        setUpdateAdvertModal,
        deleteAdvertModal,
        setDeleteAdvertModal,
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
        brands,
        setBrands,
        models,
        setModels,
        colors,
        setColors,
        years,
        setYears,
        fuels,
        setFuels,
        maxMileage,
        setMaxMileage,
        minPrice,
        createAdvertModal,
        setCreateAdvertModal,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        externalCars,
        setExternalCars,
        createAdvert,
        externalBrands,
        setExternalBrands,
        externalModels,
        setExternalModels,
        externalBrand,
        setExternalBrand,
        externalModel,
        setExternalModel,
        currentCar,
        updateAdvert,
        setCurrentCar,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};
