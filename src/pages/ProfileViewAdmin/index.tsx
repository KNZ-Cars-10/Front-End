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

const ProfileViewAdmin = () => {
  const { userProfile, data } = useContext(UserContext);

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
      <StyledSubHeader />
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
          <StyledCreateButton>Criar anúncio</StyledCreateButton>
          <StyledEditButton>Editar perfil</StyledEditButton>
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
