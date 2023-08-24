import { useContext, useEffect, useState } from "react";
import { StyledHome } from "./style";
import {
  TAdvertResponseFull,
  TAdverts,
} from "../../providers/advertContext/@Types";
import { AdvertCard } from "../../components/advertCard/advertCrad";
import { Filters } from "../../components/filters/filters";
import { AdvertContext } from "../../providers/advertContext/advertContext";

import { AiOutlineCheck } from "react-icons/ai";
import { UserContext } from "../../providers/userContext/userContext";

export const HomePage = () => {
  const {
    getFilteredAdverts,
    getExternalCars,
    loading,
    returnRequest,
    getAdverts,
    filter,
    setFilter,
    data,
    setData,
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
    brands,
    models,
    colors,
    years,
    fuels,
    maxMileage,
    mileage,
    setMileage,
    minPrice,
    maxPrice,
    price,
    setPrice,
  } = useContext(AdvertContext);

  const { setUserMenu } = useContext(UserContext);

  useEffect(() => {
    getAdverts();
    getExternalCars();
    setUserMenu(false);
  }, []);

  useEffect(() => {
    setData(returnRequest?.data);
  }, [returnRequest]);

  const [page, setPage] = useState<number>(1);
  const [aux, setAux] = useState<number>(0);
  const [newArray, setNewArray] = useState<TAdverts | undefined>([]);
  const [perPage, setPerPage] = useState<number>(5);
  const [maxPage, setMaxPage] = useState<number>(1);

  let prevPage: boolean = true;
  let nextPage: boolean = true;
  let array: any = [];

  if (page <= 1) {
    prevPage = false;
  }

  if (page >= maxPage) {
    nextPage = false;
  }

  useEffect(() => {
    if (data?.length != undefined && data?.length != 0) {
      setMaxPage(Math.ceil(data!.length / perPage));

      for (let i = aux * perPage; i < data!.length; i++) {
        const element = data![i];
        if (array.length < 5) {
          array.push(element);
        }
      }
    }

    setNewArray(array);
  }, [data, aux]);

  function handleBrandFilter(newBrand: string) {
    if (brand == newBrand) {
      setBrand(null);
    } else {
      setBrand(newBrand);
    }
  }

  function handleModelFilter(newModel: string) {
    if (model == newModel) {
      setModel(null);
    } else {
      setModel(newModel);
    }
  }

  function handleColorFilter(newColor: string) {
    if (color == newColor) {
      setColor(null);
    } else {
      setColor(newColor);
    }
  }

  function handleYearFilter(newYear: string) {
    if (year == newYear) {
      setYear(null);
    } else {
      setYear(newYear);
    }
  }

  function handleFuelFilter(newFuel: string) {
    if (fuel == newFuel) {
      setFuel(null);
    } else {
      setFuel(newFuel);
    }
  }

  function handleMileage(value: string) {
    setMileage(value);
  }

  function handlePrice(value: string) {
    setPrice(value);
  }

  function handleNextPage() {
    setAux(aux + 1);
    setPage(page + 1);
  }

  function handlePrevPage() {
    setAux(aux - 1);
    setPage(page - 1);
  }

  return (
    <>
      {loading ? (
        <div className="modal">
          <div className="loading">
            {" "}
            <h2>Carregando</h2>
          </div>
        </div>
      ) : (
        <StyledHome>
          <section className="banner">
            <div className="linearGradient">
              <h2>Motors Shop</h2>
              <p>A melhor plataforma de anúncios de carros do páis</p>
            </div>
          </section>

          <main>
            <div className="filters">
              <section>
                <h2>Marca</h2>

                {brands?.map((newBrand) => (
                  <div key={newBrand}>
                    <span onClick={() => handleBrandFilter(newBrand)}>
                      {newBrand}
                    </span>
                    {brand == newBrand ? <AiOutlineCheck /> : null}
                  </div>
                ))}
              </section>

              <section>
                <h2>Modelo</h2>

                {models?.map((newModel) => (
                  <div key={newModel}>
                    <span onClick={() => handleModelFilter(newModel)}>
                      {newModel}
                    </span>
                    {model == newModel ? <AiOutlineCheck /> : null}
                  </div>
                ))}
              </section>

              <section>
                <h2>Cor</h2>

                {colors?.map((newColor) => (
                  <div key={newColor}>
                    <span onClick={() => handleColorFilter(newColor)}>
                      {newColor}
                    </span>
                    {color == newColor ? <AiOutlineCheck /> : null}
                  </div>
                ))}
              </section>

              <section>
                <h2>Ano</h2>

                {years?.map((newYear) => (
                  <div key={newYear}>
                    <span onClick={() => handleYearFilter(newYear)}>
                      {newYear}
                    </span>
                    {year == newYear ? <AiOutlineCheck /> : null}
                  </div>
                ))}
              </section>

              <section>
                <h2>Combustível</h2>

                {fuels?.map((newFuel) => (
                  <div key={newFuel}>
                    <span onClick={() => handleFuelFilter(newFuel)}>
                      {newFuel}
                    </span>
                    {fuel == newFuel ? <AiOutlineCheck /> : null}
                  </div>
                ))}
              </section>

              <section>
                <h2>KM</h2>
                <div>
                  <span>{mileage} Mil km</span>
                </div>
                <input
                  min={0}
                  max={maxMileage!}
                  defaultValue={maxMileage!}
                  onChange={(event) => handleMileage(event.target.value)}
                  type="range"
                />
              </section>

              <section>
                <h2>Preço</h2>
                <div>
                  <span>R$ {price} Mil</span>
                </div>
                <input
                  onChange={(event) => handlePrice(event.target.value)}
                  defaultValue={maxPrice!}
                  min={minPrice!}
                  max={maxPrice!}
                  type="range"
                />
                <div>
                  <span>R$ {minPrice} Mil</span>
                  <span>R$ {maxPrice} Mil</span>
                </div>
              </section>

              <button onClick={() => getFilteredAdverts()}>Ver Anúncios</button>
            </div>

            {data?.length == 0 ? (
              <div className="empty">
                <h2>Infelizmente sua busca não encontrou resultados</h2>
                <p>Tente redefenir seus parâmetros de busca</p>
              </div>
            ) : (
              <ul>
                {newArray?.map((advert) => (
                  <AdvertCard
                    advert={advert}
                    user={advert.user}
                    key={advert.id}
                  />
                ))}
              </ul>
            )}
          </main>

          <button className="filterButton" onClick={() => setFilter(true)}>
            Filtros
          </button>
          <div className="pages">
            <p>
              <span>{page} </span>
              de {maxPage}
            </p>
            <div>
              {prevPage ? (
                <span onClick={() => handlePrevPage()}> {"<"}Anterior </span>
              ) : null}

              {nextPage ? (
                <span onClick={() => handleNextPage()}>Seguinte {">"} </span>
              ) : null}
            </div>
          </div>
        </StyledHome>
      )}

      {filter ? <Filters /> : null}
    </>
  );
};
