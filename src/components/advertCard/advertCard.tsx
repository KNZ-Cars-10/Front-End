import { useNavigate } from "react-router-dom";
import { TAdvertResponse } from "../../providers/advertContext/@Types";
import { StyledAdvertCard } from "./style";
import { TUser } from "../../providers/userContext/@Types";

type Props = {
  advert: TAdvertResponse;
  user: TUser;
};

export function AdvertCard({ advert, user }: Props) {
  const navigate = useNavigate();

  return (
    <StyledAdvertCard color={user?.color}>
      <div className="img" onClick={() => navigate(`/advert/${advert.id}`)}>
        <img src={advert.cover_image!} alt="Imagem de capa do anúncio" />
      </div>
      <h2>
        {" "}
        {advert.brand} - {advert.model}
      </h2>
      <p>{advert.description}</p>

      <div className="userCard">
        {user.inicial ? (
          <div style={{ background: `${user?.color}` }}>
            {user.avatar ? (
              <img src={user.avatar} alt="Imagem de perfil do usuário logado" />
            ) : (
              <span className="inicial">{user.inicial}</span>
            )}
          </div>
        ) : null}

        <span onClick={() => navigate(`/advertiser/${user.id}`)}>
          {user.name}
        </span>
      </div>

      <div className="information">
        <div>
          <p>{advert.mileage} KM</p>
          <p>{advert.year}</p>
        </div>
        <span>
          {Number(advert.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </StyledAdvertCard>
  );
}
