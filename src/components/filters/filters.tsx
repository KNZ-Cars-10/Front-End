import { useContext } from "react";
import { StyledFilter } from "./style";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { AiOutlineCheck } from "react-icons/ai";

export function Filters() {
  const {
    getFilteredAdverts,
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

  function handleFilters() {
    getFilteredAdverts();
    setFilter(false);
  }

  return (
    <div className="modal">
      <StyledFilter>
        <div>
          <span>Filtro</span>
          <span onClick={() => setFilter(false)} className="close">
            X
          </span>
        </div>

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
              <span onClick={() => handleYearFilter(newYear)}>{newYear}</span>
              {year == newYear ? <AiOutlineCheck /> : null}
            </div>
          ))}
        </section>

        <section>
          <h2>Combustível</h2>

          {fuels?.map((newFuel) => (
            <div key={newFuel}>
              <span onClick={() => handleFuelFilter(newFuel)}>{newFuel}</span>
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
            <span>
              {Number(price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
            </span>
          </div>
          <input
            onChange={(event) => handlePrice(event.target.value)}
            defaultValue={minPrice!}
            min={minPrice!}
            max={maxPrice!}
            type="range"
          />
          <div>
            <span>
              {" "}
              {Number(minPrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <span>
              {" "}
              {Number(maxPrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </section>

        <button onClick={() => handleFilters()}>Ver Anúncios</button>
      </StyledFilter>
    </div>
  );
}
