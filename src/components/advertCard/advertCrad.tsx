import { TAdvert } from "../../providers/advertContext/@Types";
import { TUser } from "../../providers/userContext/@Types";
import { StyledAdvertCard } from "./style";

type Props = {
  advert: TAdvert;
  user: TUser;
};

export function AdvertCard({ advert, user }: Props) {
  return (
    <StyledAdvertCard>
      <div className="img">
        <img src={advert.cover_image!} alt="" />
      </div>
      <h2>{advert.brand} - {advert.model}</h2>
      <p>{advert.description}</p>

      <div className="user">
        <div>R</div>
        <span>{user.name}</span>
      </div>

      <div className="information">
        <div>
          <p>{advert.mileage} KM</p>
          <p>{advert.year}</p>
        </div>
        <span>R$ {advert.price}</span>
      </div>
    </StyledAdvertCard>
  );
}
