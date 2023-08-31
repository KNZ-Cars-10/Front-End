import { useContext, useEffect, useState } from "react";
import { StyledAdvertiser } from "./style";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { AdvertCard } from "../../components/advertCard/advertCard";
import { EmptyCard } from "../../components/emptyCard/emptyCard";

export function AdvertiserPage() {
  const { user, getUser, setUserMenu, profile } = useContext(UserContext);

  const { loading } = useContext(UserContext);

  const { advertiserId } = useParams();

  let aux: any = [];

  const navigate = useNavigate();

  const [currentAdverts, setCurrentAdverts] = useState([]);

  useEffect(() => {
    setUserMenu(false);
    if (profile) {
      if (profile.id == parseInt(advertiserId!)) {
        navigate("/profile");
      } else {
        getUser(parseInt(advertiserId!));
      }
    } else {
      getUser(parseInt(advertiserId!));
    }
  }, []);

  useEffect(() => {
    if (profile) {
      if (user?.id === profile?.id) {
      }
    }

    user?.adverts.map((advert) => {
      if (advert?.status) {
        aux.push(advert);
      }
    });

    setCurrentAdverts(aux);
  }, [user]);

  return (
    <>
      {loading ? (
        <div className="modal">
          <div className="loading">
            {" "}
            <h2>Carregando...</h2>
          </div>
        </div>
      ) : (
        <>
          <StyledAdvertiser color={user?.color}>
            <div className="banner"></div>

            <div className="user">
              <div
                style={{ background: `${user?.color}` }}
                className="imgProfile"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="Imagem de perfil do usuário logado"
                  />
                ) : (
                  <span>{user?.inicial}</span>
                )}
              </div>
              {user ? (
                <div className="informations">
                  <span>{user?.name}</span>
                  {user?.is_advertiser ? (
                    <span className="advertiser">Anunciante</span>
                  ) : (
                    <span className="noAdvertiser">Comprador</span>
                  )}
                </div>
              ) : null}

              <p>{user?.description}</p>
            </div>

            <h2>Anúncios</h2>
            {currentAdverts.length < 1 ? (
              <EmptyCard />
            ) : (
              <div className="advertsList">
                <ul>
                  {currentAdverts.map((advert: any) => (
                    <AdvertCard advert={advert} user={user!} key={advert.id} />
                  ))}
                </ul>
              </div>
            )}
          </StyledAdvertiser>
        </>
      )}
    </>
  );
}
