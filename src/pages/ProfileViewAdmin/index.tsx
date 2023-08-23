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
    StyleTitle,
    StyleUl,
    TempHeader
} from "./styles" 
import { AdvertCard } from "../../components/advertCard/advertCrad"
import { UserContext } from "../../providers/userContext/userContext"
import { useParams } from "react-router-dom"


const ProfileViewAdmin = () => {
 
    const { advertsByUser, userData } = useContext(UserContext)
    const { userId } = useParams()
    
    useEffect(() => {
        advertsByUser(parseInt(userId!))
    }, [])

    return (
        <>
        <TempHeader />
        <StyledSubHeader />
        <StyledProfileInfo>
            <StyledSubProfileInfo>
                <StyledElipseProfileInfo>
                    <StyledInitialsProfileInfo>SL</StyledInitialsProfileInfo>
                </StyledElipseProfileInfo>
                <StyledNameSpanDiv>
                    <StyledName>{userData?.name}</StyledName>
                    <StyledSpan>Anunciante</StyledSpan>
                </StyledNameSpanDiv>
                <StyledText>{userData?.description}</StyledText>
            </StyledSubProfileInfo>
        </StyledProfileInfo>
        <StyledMain>
            <StyleTitle>Anúncios</StyleTitle>
            <StyleUl>
                {userData?.adverts.map((advert) => (
                    <AdvertCard key={advert!.id} advert={advert!} user={userData} />))}
            </StyleUl>
        </StyledMain>
        </>
    )
}


export { ProfileViewAdmin }