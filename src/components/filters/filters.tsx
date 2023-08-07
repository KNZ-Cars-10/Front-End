import { useContext } from "react";
import { StyledFilter } from "./style";
import { AdvertContext } from "../../providers/advertContext/advertContext";

export function Filters() {
  const { setFilter } = useContext(AdvertContext);

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

          <span>Fiat</span>
          <span>Ford</span>
          <span>Honda</span>
          <span>Toyota</span>
          <span>Volkswagen</span>
        </section>

        <section>
          <h2>Modelo</h2>

          <span>Civic</span>
          <span>Corolla</span>
          <span>Cruze</span>
          <span>Fit</span>
          <span>Gol</span>
          <span>Ka</span>
          <span>Onix</span>
        </section>

        <section>
          <h2>Cor</h2>

          <span>Azul</span>
          <span>Branca</span>
          <span>Cinza</span>
          <span>Prata</span>
          <span>Verde</span>
        </section>

        <section>
          <h2>Ano</h2>

          <span>2018</span>
          <span>2019</span>
          <span>2020</span>
          <span>2021</span>
          <span>2022</span>
        </section>

        <section>
          <h2>Combustível</h2>

          <span>Elétrico</span>
          <span>Flex</span>
          <span>Híbrido</span>
        </section>

        <section>
          <h2>KM</h2>
          <div>
            <span>0 km</span>
            <span>650000 km</span>
          </div>
          <input type="range" />
        </section>

        <section>
          <h2>Preço</h2>
          <div>
            <span>R$ 10 mil</span>
            <span>R$ 550 mil</span>
          </div>
          <input type="range" />
        </section>

        <button>Ver Anúncios</button>
      </StyledFilter>
    </div>
  );
}
