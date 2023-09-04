import { useNavigate } from "react-router-dom";
import { TAdvert } from "../../providers/advertContext/@Types";
import { StyledAdvertCardProfile } from "./style";
import { useContext } from "react";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { ModalEditAnnounc } from "../modalEditAnnounc";

type Props = {
    advert: TAdvert;
};

export function ProfileCard({ advert }: Props) {
    const {
        updateAdvertModal,
        setUpdateAdvertModal,
        setAdvertProfile,
        updateAdvert,
    } = useContext(AdvertContext);

    const navigate = useNavigate();

    function handleUpdateAdvert() {
        setAdvertProfile(advert);
        setUpdateAdvertModal(true);
    }

    return (
        <>
            <StyledAdvertCardProfile status={advert.status}>
                <div className="img">
                    {advert.status ? <span>Ativo</span> : <span>Inativo</span>}

                    <img
                        src={advert.cover_image!}
                        alt="Imagem de capa do anúncio"
                    />
                </div>
                <h2>
                    {advert.brand} - {advert.model}
                </h2>

                <p>{advert.description}</p>

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

                <div className="buttons">
                    <button onClick={() => handleUpdateAdvert()}>Editar</button>
                    <button onClick={() => navigate(`/advert/${advert.id}`)}>
                        Ver detalhes
                    </button>
                </div>
            </StyledAdvertCardProfile>
        </>
    );
}
