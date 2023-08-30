import { useContext, useEffect } from "react";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../providers/userContext/userContext";
import { DetailedSection, UserComment } from "./style";
import { formatDistanceToNow, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchemaRquest } from "../../schemas/comments.schemas";
import { TCommentRequest } from "../../providers/advertContext/@Types";

export const AdvertViewPage = () => {
  const { getSpeceficAdvert, advertFull } = useContext(AdvertContext);
  const { comments, listComments, createComment, profile } =
    useContext(UserContext);

  const { advertId } = useParams();

  const { handleSubmit, register } = useForm<TCommentRequest>({
    resolver: zodResolver(commentSchemaRquest),
  });

  useEffect(() => {
    getSpeceficAdvert(+advertId!);
    listComments(+advertId!);
  }, []);

  const navigate = useNavigate();

  const OnSubmit = (data: TCommentRequest) => {
    createComment(+advertId!, data);
  };

  const getTimeAgoMessage = (date: Date) => {
    const distance = formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    });

    const newFrase = distance
      .replace(new RegExp(`\\bcerca\\b|\\bmenos\\b|\\bde\\b`, "gi"), "")
      .trim();
    const noSpace = newFrase.replace(/\s+/g, " ");

    return `Feito ${noSpace}`;
  };

  return (
    <>
      {advertFull ? (
        <DetailedSection bgColor={profile ? profile.color : "4"}>
          <div className="blue" />

          <main>
            <figure className="main-image">
              <img src={advertFull.cover_image!} alt="imagem de carro" />
            </figure>

            <section className="advert-description">
              <header>
                <h1 className="text-style-heading-heading-6-600">{`${advertFull.brand.toLocaleUpperCase()} ${advertFull.model.toLocaleUpperCase()}`}</h1>
                <div className="stamps">
                  <div>
                    <span className="text-style-text-body-2-500">
                      {advertFull.year}
                    </span>
                    <span className="text-style-text-body-2-500">
                      {advertFull.mileage} KM
                    </span>
                  </div>
                  <p className="text-style-heading-heading-7-500">
                    R$ {advertFull.price},00
                  </p>
                </div>
                <button>Comprar</button>
              </header>
              <footer>
                <header>
                  <h1 className="text-style-heading-heading-6-600">
                    Descrição
                  </h1>
                  <p className="text-style-text-body-1-400">
                    {advertFull.description}
                  </p>
                </header>

                <ul className="comments">
                  <h1 className="text-style-heading-heading-6-600">
                    Comentários
                  </h1>
                  {comments ? (
                    comments.map((comment) => {
                      const parsedDate = parseISO(comment.createdAt);
                      const timeAgoMessage = getTimeAgoMessage(parsedDate);

                      return (
                        <UserComment
                          key={comment.id}
                          bgColor={comment.user.color}
                        >
                          <div>
                            <span className="text-style-inputs-buttons-input-label">
                              {comment.user.inicial}
                            </span>{" "}
                            <h2 className="text-style-text-body-2-500">
                              {comment.user.name}
                            </h2>{" "}
                            <span className="point"></span>
                            <p className="text-style-text-body-1-400">
                              {timeAgoMessage}
                            </p>
                          </div>

                          <p className="text-style-text-body-2-400">
                            {comment.text}
                          </p>
                        </UserComment>
                      );
                    })
                  ) : (
                    <h1>oi</h1>
                  )}
                </ul>
                <fieldset>
                  {profile ? (
                    <form
                      className="comment-area"
                      onSubmit={handleSubmit(OnSubmit)}
                    >
                      <div>
                        <span className="text-style-inputs-buttons-input-label">
                          {profile.inicial}
                        </span>{" "}
                        <h2 className="text-style-text-body-2-500">
                          {profile.name}
                        </h2>
                      </div>
                      <textarea
                        cols={5}
                        placeholder="Comente aqui"
                        {...register("text")}
                      />
                      <button type="submit">Commentar</button>
                    </form>
                  ) : (
                    <form className="comment-area">
                      <div>
                        <span className="text-style-inputs-buttons-input-label">
                          Cl
                        </span>{" "}
                        <h2 className="text-style-text-body-2-500">Cliente</h2>
                      </div>
                      <textarea
                        className="text-style-inputs-buttons-input-placeholder"
                        cols={20}
                        rows={5}
                        disabled={true}
                        placeholder="Faça login para poder comentar"
                      />
                      <button disabled={true}>Comentar</button>
                    </form>
                  )}
                </fieldset>
              </footer>
            </section>
          </main>

          <aside className="details">
            <figure>
              <h1 className="text-style-heading-heading-6-600">Fotos</h1>
              <div>
                <img src={advertFull.cover_image!} alt="imagem de carro" />
                {advertFull.other_images
                  ? advertFull.other_images.map((img) => {
                      return <img src={img} alt="imagem de carro" />;
                    })
                  : false}
              </div>
            </figure>
            <div className="advertiser-box">
              <h1 className="text-style-inputs-buttons-input-label">
                {advertFull.user.inicial}
              </h1>
              <h2 className="text-style-heading-heading-6-600">
                {advertFull.user.name}
              </h2>
              <p className="text-style-text-body-1-400">
                {advertFull.user.description}
              </p>
              <button
                className="text-style-inputs-buttons-button-big-text"
                onClick={() => navigate(`/advertiser/${advertFull.user.id}`)}
              >
                Ver todos anúncios
              </button>
            </div>
          </aside>
        </DetailedSection>
      ) : (
        false
      )}
    </>
  );
};
