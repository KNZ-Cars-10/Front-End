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
import { EmptyCardUser } from "../../components/EmptyCard"


const ProfileViewUser = () => {
 
    const { advertsByUser, userData } = useContext(UserContext)
    const { userId } = useParams()
    
    useEffect(() => {
        advertsByUser(parseInt(userId!))
    }, [])

    let accountType = null
    if(userData?.is_advertiser) {
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
                <StyledElipseProfileInfo style={{background: userData?.color}}>
                    <StyledInitialsProfileInfo>{userData?.inicial}</StyledInitialsProfileInfo>
                </StyledElipseProfileInfo>
                <StyledNameSpanDiv>
                    <StyledName>{userData?.name}</StyledName>
                    <StyledSpan>{accountType}</StyledSpan>
                </StyledNameSpanDiv>
                <StyledText>{userData?.description}</StyledText>
            </StyledSubProfileInfo>
        </StyledProfileInfo>
        <StyledMain>
            <StyleTitle>Anúncios</StyleTitle>
            <StyleUl>
                {userData?.adverts.map((advert) => (
                    <AdvertCard key={advert!.id} advert={advert!} user={userData} />))}
                    {
                        userData?.adverts.length < 1?(<EmptyCardUser />): ""
                    }
            </StyleUl>
        </StyledMain>
        </>
    )
}


export { ProfileViewUser }