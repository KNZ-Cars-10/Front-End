import { useContext, useEffect } from "react";
import {
  StyledElipseProfileInfo,
  StyledInitialsProfileInfo,
  StyledMain,
  StyledProfileInfo,
  StyledSubHeader,
  StyledNameSpanDiv,
  StyledName,
  StyledSpan,
  StyledText,
  StyledDivButtons,
  StyledCreateButton,
  StyledEditButton,
  StyleUl,
} from "./styles";
import { UserContext } from "../../providers/userContext/userContext";
import { ProfileCard } from "../../components/ProfileCard";
import { EmptyCardProfile } from "../../components/EmptyCard";
import { ModalEditProfile } from "../../components/modalEditProfile";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { ModalCreateAdvert } from "../../components/modalCreateAnnounc/modalCreateAnnounc";

const ProfileViewAdmin = () => {
  const { userProfile, data,modalEditProfile, setModalEditProfile } = useContext(UserContext);
  const { setCreateAdvertModal, createAdvertModal } = useContext(AdvertContext)

  useEffect(() => {
    userProfile();
  }, []);

  let accountType = null;
  if (data?.is_advertiser) {
    accountType = "Anunciante";
  } else {
    accountType = "Comprador";
  }

  return (
    <>
      {createAdvertModal ? <ModalCreateAdvert/> : null}
      <StyledSubHeader />
      {modalEditProfile ? <ModalEditProfile /> :null}
      <StyledProfileInfo>
        <StyledElipseProfileInfo style={{ background: data?.color }}>
          <StyledInitialsProfileInfo>{data?.inicial}</StyledInitialsProfileInfo>
        </StyledElipseProfileInfo>
        <StyledNameSpanDiv>
          <StyledName>{data?.name}</StyledName>
          <StyledSpan>{accountType}</StyledSpan>
        </StyledNameSpanDiv>
        <StyledText>{data?.description}</StyledText>
        <StyledDivButtons>
          <StyledCreateButton onClick={() => setCreateAdvertModal(true)}>Criar anúncio</StyledCreateButton>
          <StyledEditButton onClick={() => setModalEditProfile(true)}>Editar perfil</StyledEditButton>
        </StyledDivButtons>
      </StyledProfileInfo>
      <StyledMain>
        <StyleUl>
          {data?.adverts.map((advert) => (
            <ProfileCard key={advert!.id} advert={advert!} user={data} />
          ))}
          {data?.adverts.length! < 1 ? <EmptyCardProfile /> : ""}
        </StyleUl>
      </StyledMain>
    </>
  );
};

export { ProfileViewAdmin };
