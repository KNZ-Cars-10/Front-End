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
  StyleTitle,
  StyleUl,
  Container,
} from "./styles";
import { AdvertCard } from "../../components/advertCard/advertCard";
import { UserContext } from "../../providers/userContext/userContext";
import { useParams } from "react-router-dom";

const ProfileViewUser = () => {
  const { advertsByUser, userData } = useContext(UserContext);
  const { userId } = useParams();

  useEffect(() => {
    advertsByUser(parseInt(userId!));
  }, []);

  let accountType = null;
  if (userData?.is_advertiser) {
    accountType = "Anunciante";
  } else {
    accountType = "Comprador";
  }

  return (
    <Container>
      {/* <TempHeader /> */}
      <StyledSubHeader />
      <StyledProfileInfo>
        <StyledElipseProfileInfo style={{ background: userData?.color }}>
          <StyledInitialsProfileInfo>
            {userData?.inicial}
          </StyledInitialsProfileInfo>
        </StyledElipseProfileInfo>
        <StyledNameSpanDiv>
          <StyledName>{userData?.name}</StyledName>
          <StyledSpan>{accountType}</StyledSpan>
        </StyledNameSpanDiv>
        <StyledText>{userData?.description}</StyledText>
      </StyledProfileInfo>

      <StyledMain>
        <StyleTitle>Anúncios</StyleTitle>
        <StyleUl>
          {userData?.adverts.map((advert) => (
            <AdvertCard key={advert!.id} advert={advert!} user={userData} />
          ))}
        </StyleUl>
      </StyledMain>
    </Container>
  );
};

export { ProfileViewUser };
