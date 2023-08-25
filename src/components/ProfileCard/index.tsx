import { TAdvert } from "../../providers/advertContext/@Types";
import { TUser } from "../../providers/userContext/@Types";
import { StyledProfileCard } from "./style";

type Props = {
  advert: TAdvert;
  user: TUser;
};



export function ProfileCard({ advert, /* user */ }: Props) {

    let isActive = null
    if(advert?.status) {
        isActive = <span className="isActiveTrue">Ativo</span>
    } else {
        isActive = <span className="isActiveFalse">Inativo</span>
    }

  return (
    <StyledProfileCard>
      <div className="img">
        <img src={advert.cover_image!} alt="" />
        {isActive}
      </div>
      <h2>{advert.brand} - {advert.model}</h2>
      <p>{advert.description}</p>

      <div className="information">
        <div>
          <p>{advert.mileage} KM</p>
          <p>{advert.year}</p>
        </div>
        <span>R$ {advert.price}</span>
      </div>
        <div className="buttons">
        <button className="editButton">Editar</button>
        <button className="detailsButton">Ver detalhes</button>
        </div>
    </StyledProfileCard>
  );
}