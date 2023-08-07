import { TAdvertResponse } from "../../providers/advertContext/@Types";
import { StyledAdvertCard } from "./style";

type Props = {
  advert: TAdvertResponse;
};

export function AdvertCard({ advert }: Props) {
  return (
    <StyledAdvertCard>
      <div className="img">
        <img src={advert.cover_image!} alt="" />
      </div>
      <h2>{advert.brand}</h2>
      <p>{advert.description}</p>

      <div className="user">
        <div>R</div>
        <span>{advert.user.name}</span>
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
