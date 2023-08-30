import { useContext, useEffect, useState } from "react";
import { StyledAdvert } from "./style";
import { AdvertContext } from "../../providers/advertContext/advertContext";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { CommentCard } from "../../components/comment/comment";
import { CommentContext } from "../../providers/commentContext/commentContext";
import { ModalViewImage } from "../../components/modals/modalViewImage/modalViewImage";
import { ModalDeleteComment } from "../../components/modals/modalDeleteComment/modalDeleteComment";

export function AdvertPage() {
  const { advertFull, getSpeceficAdvert } = useContext(AdvertContext);

  const { advertId } = useParams();

  const { setUserMenu, profile, loading } = useContext(UserContext);

  const { registerComment, deleteCommentModal } = useContext(CommentContext);

  const [comment, setComment] = useState<string | null>(null);

  const [modalViewImage, setModalViewImage] = useState<boolean>(false);

  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getSpeceficAdvert(parseInt(advertId!));
    setUserMenu(false);
  }, []);

  function commentButton() {
    if (comment != null) {
      let aux = { text: comment };
      registerComment(aux, advertFull!.id);
    }
  }

  function handleImageModal(img: string) {
    setModalViewImage(true);

    setCurrentImage(img);
  }

  return (
    <>
      {loading ? (
        <div className="modal">
          <div className="loading">
            {" "}
            <h2>Carregando...</h2>
          </div>
        </div>
      ) : (
        <>
          {advertFull ? (
            <>
              <StyledAdvert
                UserColor={advertFull?.user.color}
                MyColor={profile?.color}
              >
                <div className="banner"></div>
                <div className="card left">
                  <div className="card img">
                    <img
                      src={advertFull?.cover_image!}
                      alt="imagem de capa do anúncio"
                    />
                  </div>

                  <div className="card informations">
                    <h2>{advertFull?.model}</h2>
                    <div>
                      <span>{advertFull?.year}</span>

                      <span>{advertFull?.mileage} KM</span>
                    </div>

                    <span>
                      {Number(advertFull?.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>

                    {profile && profile.id != advertFull.user.id ? (
                      <a
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=+55+${advertFull.user.phone}&text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20na%20Motors%20shop%20e%20fiquei%20interessado`}
                      >
                        Comprar
                      </a>
                    ) : null}
                  </div>

                  <div className="card description">
                    <h2>Descrição</h2>
                    <p>{advertFull?.description}</p>
                  </div>

                  <div className="card images">
                    <h2>Fotos</h2>

                    {advertFull?.other_images!.length < 1 ? (
                      <span>Esse anúncio não possui outras imagens</span>
                    ) : (
                      <ul className="imagesUl">
                        {advertFull?.other_images?.map((img) => (
                          <li key={img} onClick={() => handleImageModal(img)}>
                            {" "}
                            <img src={img} alt="imagem do veículo" />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="card user">
                    <div
                      className="imgProfile"
                      style={{ background: `${advertFull.user.color}` }}
                    >
                      {advertFull?.user.avatar ? (
                        <img
                          src={advertFull?.user.avatar}
                          alt="Imagem de perfil do usuário logado"
                        />
                      ) : (
                        <span>{advertFull?.user.inicial}</span>
                      )}
                    </div>
                    <h2>{advertFull?.user.name}</h2>
                    <p>{advertFull?.user.description}</p>
                    <button
                      onClick={() =>
                        navigate(`/advertiser/${advertFull?.user.id}`)
                      }
                    >
                      Ver todos os anúncios
                    </button>
                  </div>

                  <section className="card comments">
                    <h2>Comentarios</h2>

                    {advertFull?.comments.length < 1 ? (
                      <span>Este anúncio ainda não possui comentarios </span>
                    ) : (
                      <ul>
                        {advertFull?.comments.map((comment) => (
                          <>
                            <CommentCard
                              comment={comment}
                              advert={advertFull}
                            />

                            {deleteCommentModal ? (
                              <ModalDeleteComment
                                commentid={comment.id}
                                advertId={advertFull.id}
                              />
                            ) : null}
                          </>
                        ))}
                      </ul>
                    )}
                  </section>

                  {profile ? (
                    <>
                      <div className="card myComment">
                        <div className="header">
                          <div style={{ background: `${profile.color}` }}>
                            {profile?.avatar ? (
                              <img
                                src={profile?.avatar}
                                alt="Imagem de perfil do usuário logado"
                              />
                            ) : (
                              <span>{profile?.inicial}</span>
                            )}
                          </div>
                          <h3>{profile?.name}</h3>
                        </div>
                        <textarea
                          name="comment"
                          id="comment"
                          rows={5}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="veículo muito confortável, foi uma ótima experiência de compra..."
                        ></textarea>

                        <button onClick={() => commentButton()}>
                          Comentar
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="card right">
                  <div className="card images">
                    <h2>Fotos</h2>

                    {advertFull?.other_images!.length < 1 ? (
                      <span>Esse anúncio não possui outras imagens</span>
                    ) : (
                      <ul className="imagesUl">
                        {advertFull?.other_images?.map((img) => (
                          <li key={img} onClick={() => handleImageModal(img)}>
                            {" "}
                            <img src={img} alt="imagem do veículo" />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="card user">
                    <div
                      style={{ background: `${advertFull.user.color}` }}
                      className="imgProfile"
                    >
                      <span>{advertFull?.user.inicial}</span>
                    </div>
                    <h2>{advertFull?.user.name}</h2>
                    <p>{advertFull?.user.description}</p>
                    <button
                      onClick={() =>
                        navigate(`/advertiser/${advertFull?.user.id}`)
                      }
                    >
                      Ver todos os anúncios
                    </button>
                  </div>
                </div>
              </StyledAdvert>

              {modalViewImage ? (
                <ModalViewImage
                  image={currentImage!}
                  closeModal={setModalViewImage}
                />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
}
