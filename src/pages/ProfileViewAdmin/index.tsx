import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { ProfileCard } from "../../components/ProfileCard";
import { EmptyCardProfile } from "../../components/EmptyCard";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { ModalCreateAdvert } from "../../components/modalCreateAnnounc/modalCreateAnnounc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledProfile } from "./styles";
import { ModalEditProfile } from "../../components/modalEditProfile";

export function ProfileViewAdmin() {
  const {
    getUserLoged,
    setModalEditProfile,
    profile,
    setUserMenu,
    loading,
    modalEditProfile,
  } = useContext(UserContext);

  const { setCreateAdvertModal, createAdvertModal, updatePage } =
    useContext(AdvertContext);

  let token = localStorage.getItem("Motors-Shop-Token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      toast.error("Você deve estar logado para acessar essa página !!");
      setUserMenu(false);
    } else {
      setUserMenu(false);
      getUserLoged(token!);
    }
  }, []);

  useEffect(() => {
    getUserLoged(token!);
  }, [updatePage]);

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
          <StyledProfile color={profile?.color}>
            <div className="banner"></div>

            <div className="user">
              <div
                style={{ background: `${profile?.color}` }}
                className="imgProfile"
              >
                {profile!.avatar ? (
                  <img
                    src={profile!.avatar}
                    alt="Imagem de perfil do usuário logado"
                  />
                ) : (
                  <span>{profile?.inicial}</span>
                )}
              </div>
              <div className="informations">
                <span>{profile?.name}</span>
                {profile?.is_advertiser ? (
                  <span className="advertiser">Anunciante</span>
                ) : (
                  <span className="noAdvertiser">Comprador</span>
                )}
              </div>
              <p>{profile?.description}</p>
              <div className="profileButtons">
                <button
                  onClick={() => setCreateAdvertModal(true)}
                  className="button createAdvert"
                >
                  Criar anúncio
                </button>
                <button
                  className="button updateProfile"
                  onClick={() => setModalEditProfile(true)}
                >
                  Atualizar Perfil
                </button>

                <button className="button updateAddress">
                  Atualizar Endereço
                </button>
              </div>
            </div>
            <h2>Anúncios</h2>
            {profile?.adverts ? (
              <>
                {profile?.adverts.length == 0 ? (
                  <div className="anúncios">
                    <EmptyCardProfile />
                  </div>
                ) : (
                  <ul>
                    {profile?.adverts.map((advert) => (
                      <ProfileCard advert={advert!} key={advert!.id} />
                    ))}
                  </ul>
                )}
              </>
            ) : null}
          </StyledProfile>

          {modalEditProfile ? <ModalEditProfile /> : null}

          {/* {deleteProfile ? <ModalDeleteProfile /> : null} */}

          {/* {updateAddress ? <ModalUpdateAddress /> : null} */}

          {createAdvertModal ? <ModalCreateAdvert /> : null}

          {/* {updateAdvertModal ? <ModalUpdateAdvert /> : null} */}

          {/* {deleteAdvertModal ? <ModalDeleteAdvert /> : null} */}
        </>
      )}
    </>
  );
}
