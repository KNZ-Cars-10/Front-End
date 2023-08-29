import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { AdvertCard } from "../../components/advertCard/advertCard";
import { StyledAdvertiser } from "./styles";
import { EmptyCardUser } from "../../components/EmptyCard";

export function ProfileViewUser() {
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
            <h2>Carregando</h2>
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
                <span>{user?.inicial}</span>
              </div>
              <div className="informations">
                <span>{user?.name}</span>
                {user?.is_advertiser ? (
                  <span className="advertiser">Anunciante</span>
                ) : (
                  <span className="noAdvertiser">Comprador</span>
                )}
              </div>

              <p>{user?.description}</p>
            </div>

            <h2>Anúncios</h2>

            <div className="advertsList">
              {currentAdverts.length > 0 ? (
                <ul>
                  {currentAdverts.map((advert: any) => (
                    <AdvertCard advert={advert} user={user!} key={advert.id} />
                  ))}
                </ul>
              ) : (
                <EmptyCardUser />
              )}
            </div>
          </StyledAdvertiser>
        </>
      )}
    </>
  );
}
