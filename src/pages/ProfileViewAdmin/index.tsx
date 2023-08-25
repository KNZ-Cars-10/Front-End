import { useContext, useEffect } from "react"
import { 
    StyledElipseProfileInfo, 
    StyledInitialsProfileInfo, 
    StyledMain, 
    StyledProfileInfo, 
    StyledSubHeader, 
    StyledSubProfileInfo,
    StyledNameSpanDiv,
    StyledName,
    StyledSpan, 
    StyledText,
    StyledButton,
    StyleUl,
    TempHeader
} from "./styles"
import { UserContext } from "../../providers/userContext/userContext"
import { ProfileCard } from "../../components/ProfileCard"


const ProfileViewAdmin = () => {
 
    const { userProfile, data } = useContext(UserContext)
    
    useEffect(() => {
        userProfile()
    }, [])

    let accountType = null
    if(data?.is_advertiser) {
        accountType = "Anunciante"
    } else {
        accountType = "Comprador"
    }

    return (
        <>
        <TempHeader />
        <StyledSubHeader />
        <StyledProfileInfo>
            <StyledSubProfileInfo>
                <StyledElipseProfileInfo style={{background: data?.color}}>
                    <StyledInitialsProfileInfo>{data?.inicial}</StyledInitialsProfileInfo>
                </StyledElipseProfileInfo>
                <StyledNameSpanDiv>
                    <StyledName>{data?.name}</StyledName>
                    <StyledSpan>{accountType}</StyledSpan>
                </StyledNameSpanDiv>
                <StyledText>{data?.description}</StyledText>
                <StyledButton>Criar anúncio</StyledButton>
            </StyledSubProfileInfo>
        </StyledProfileInfo>
        <StyledMain>
            <StyleUl>
                {data?.adverts.map((advert) => (
                    <ProfileCard key={advert!.id} advert={advert!} user={data} />))}
            </StyleUl>
        </StyledMain>
        </>
    )
}


export { ProfileViewAdmin }