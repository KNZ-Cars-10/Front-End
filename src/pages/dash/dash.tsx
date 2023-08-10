import { useContext, useEffect, useState } from "react";
import { StyledDash } from "./style";
import { TAdvertResponseFull } from "../../providers/advertContext/@Types";
import { AdvertCard } from "../../components/advertCard/advertCrad";
import { Filters } from "../../components/filters/filters";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ModalEditProfile } from "../../components/modalEditProfile";

export function DashPage() {
  const navigate = useNavigate();

  const {
    loading,
    mock,
    setMock,
    getAdverts,
    data,
    setData,
    filter,
    setFilter,
  } = useContext(AdvertContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }

    getAdverts();
  }, []);

  async function nextPage() {
    const response = await api.get<TAdvertResponseFull>(mock?.nextPage!);

    setMock(response.data);
  }

  async function prevPage() {
    const response = await api.get<TAdvertResponseFull>(mock?.prevPage!);

    setMock(response.data);
  }

  return (
    <>
    {/* <ModalEditProfile/> */}
      {loading ? (
        <div className="modal">
          <div className="loading">
            {" "}
            <h2>Carregando</h2>
          </div>
        </div>
      ) : (
        <StyledDash>
          <section className="banner">
            <div className="linearGradient">
              <h2>Motors Shop</h2>
              <p>A melhor plataforma de anúncios de carros do páis</p>
            </div>
          </section>

          {mock?.data.length == 0 ? (
            <div className="empty">ta vazio</div>
          ) : (
            <main>
              <div className="filters">
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
              </div>

              <ul>
                {mock?.data.map((advert) => (
                  <AdvertCard advert={advert} key={advert.id} />
                ))}
              </ul>
            </main>
          )}

          <button className="filterButton" onClick={() => setFilter(true)}>
            Filtros
          </button>
          <div className="pages">
            <p>
              <span>{mock?.page} </span>
              de {mock?.pages}
            </p>
            <div>
              {mock?.prevPage ? (
                <span onClick={() => prevPage()}> {"<"}Anterior </span>
              ) : null}

              {mock?.nextPage ? (
                <span onClick={() => nextPage()}>Seguinte {">"} </span>
              ) : null}
            </div>
          </div>
        </StyledDash>
      )}

      {filter ? <Filters /> : null}
    </>
  );
}
