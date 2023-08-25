import { TAdvert } from "../../providers/advertContext/@Types";
import { TUser } from "../../providers/userContext/@Types";
import { useNavigate } from "react-router-dom";
import { StyledAdvertCard } from "./style";

type Props = {
  advert: TAdvert;
  user: TUser;
};

export const AdvertCard = ({ advert, user }: Props) => {
  const navigate = useNavigate();

  console.log(user);

  return (
    <StyledAdvertCard color={user?.color}>
      <div className="img" onClick={() => navigate(`/advert/${advert.id}`)}>
        <img src={advert.cover_image!} alt="" />
      </div>

      <h2>
        {advert.brand} - {advert.model}
      </h2>
      <p>{advert.description}</p>

      <div className="userCard">
        <div style={{ background: `${user?.color}` }}>{user?.inicial}</div>
        <span onClick={() => navigate(`/advertiser/${user.id}`)}>
          {user?.name}
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
