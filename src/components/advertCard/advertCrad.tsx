import { useNavigate } from "react-router-dom";
import { TAdvertResponse } from "../../providers/advertContext/@Types";
import { StyledAdvertCard } from "./style";
import { TUser } from "../../providers/userContext/@Types";

type Props = {
  advert: TAdvertResponse;
  user: TUser;
};

export const AdvertCard = ({ advert, user }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledAdvertCard color={user?.color}>
      <div className="img" onClick={() => navigate(`/advert/${advert.id}`)}>
        <img src={advert.cover_image!} alt="" />
      </div>
      <h2>{advert.model}</h2>
      <p>{advert.description}</p>

      <div className="userCard">
        {user.inicial ? <div> {user.inicial}</div> : null}

        <span onClick={() => navigate(`/advertiser/${user.id}`)}>
          {user.name}
        </span>
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
};
