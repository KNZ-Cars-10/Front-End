import { useContext, useEffect } from "react";
import { StyledProfile } from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../providers/userContext/userContext";
import { AdvertCardProfile } from "../../components/advertCardProfile/advertCardProfile";
import { ModalUpdateProfile } from "../../components/modals/modalUpdateProfile/modalUpdateProfile";
import { ModalDeleteProfile } from "../../components/modals/modalDeleteProfile/modalDeleteProfile";
import { ModalUpdateAddress } from "../../components/modals/modalUpdateAddress/modalUpdateAddress";
import { ModalCreateAdvert } from "../../components/modals/modalCreateAdvert/modalCreateAdvert";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { ModalUpdateAdvert } from "../../components/modals/modalUpdateAdvert/modalUpdateAdvert";
import { ModalDeleteAdvert } from "../../components/modals/modalDeleteAdvert/modalDeleteAdvert";
import { EmptyCardProfile } from "../../components/emptyCardProfile/emptyCardProfile";

export function ProfilePage() {
  const {
    profile,
    setUserMenu,
    updateProfile,
    setUpdateProfile,
    setUpdateAddress,
    deleteProfile,
    updateAddress,
    getUserLoged,
    loading,
    setNav,
  } = useContext(UserContext);

  const {
    createAdvertModal,
    setCreateAdvertModal,
    updateAdvertModal,
    deleteAdvertModal,
    updatePage,
  } = useContext(AdvertContext);

  let token = localStorage.getItem("Motors-Shop-Token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      toast.error("Você deve estar logado para acessar essa página !!");
    } else {
      getUserLoged(token!);
    }
    setUserMenu(false);
    setNav(false);
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
          {profile ? (
            <StyledProfile>
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
                {profile ? (
                  <div className="informations">
                    <span>{profile?.name}</span>
                    {profile?.is_advertiser ? (
                      <span className="advertiser">Anunciante</span>
                    ) : (
                      <span className="noAdvertiser">Comprador</span>
                    )}
                  </div>
                ) : null}

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
                    onClick={() => setUpdateProfile(true)}
                  >
                    Atualizar Perfil
                  </button>

                  <button
                    className="button updateAddress"
                    onClick={() => setUpdateAddress(true)}
                  >
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
                        <AdvertCardProfile advert={advert!} key={advert!.id} />
                      ))}
                    </ul>
                  )}
                </>
              ) : null}
            </StyledProfile>
          ) : null}

          {updateProfile ? <ModalUpdateProfile /> : null}

          {deleteProfile ? <ModalDeleteProfile /> : null}

          {updateAddress ? <ModalUpdateAddress /> : null}

          {createAdvertModal ? <ModalCreateAdvert /> : null}

          {updateAdvertModal ? <ModalUpdateAdvert /> : null}

          {deleteAdvertModal ? <ModalDeleteAdvert /> : null}
        </>
      )}
    </>
  );
}
