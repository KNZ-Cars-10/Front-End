import { StyledComment } from "./style";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TComment,
  TCommentRequest,
  TCommentupdate,
} from "../../providers/commentContext/@Types";
import { commentSchemaRquest } from "../../schemas/comments.schemas";
import { CommentContext } from "../../providers/commentContext/commentContext";
import { TAdvert } from "../../providers/advertContext/@Types";
import { differenceInDays, parseISO } from "date-fns";

type Props = {
  comment: TComment;
  advert: TAdvert;
};

export function CommentCard({ comment, advert }: Props) {
  const [isOwner, setIsOwner] = useState(false);

  const { profile } = useContext(UserContext);

  const createdAt = parseISO(comment.createdAt);
  const daysSinceCreation = differenceInDays(new Date(), createdAt);

  const { updateComment, setDeleteCommentModal } = useContext(CommentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCommentRequest>({
    mode: "onBlur",

    resolver: zodResolver(commentSchemaRquest),
  });

  const onSubmitFunction = (data: TCommentupdate) => {
    updateComment(data, comment.id, advert.id);
  };

  function handleClick() {
    if (profile) {
      if (profile.id === comment.user.id) {
        setIsOwner(true);
      } else {
        toast.error(`Você deve ser o dono do comentario para edita-lo`);
      }
    } else {
      toast.error(`Você deve estar logado para editar comentarios`);
    }
  }

  return (
    <>
      <StyledComment color={comment.user.color}>
        <div onClick={() => handleClick()} className="commentHeader">
          <div
            style={{ background: `${comment.user.color}` }}
            className="commentUserImg"
          >
            {comment.user?.avatar ? (
              <img
                src={comment.user?.avatar}
                alt="Imagem de perfil do usuário logado"
              />
            ) : (
              <span>{comment.user?.inicial}</span>
            )}
          </div>
          <div className="commentUserInfo">
            <h3>{comment.user.name}</h3>

            {daysSinceCreation == 0 ? (
              <span>Postado recentemente </span>
            ) : (
              <span>há {daysSinceCreation} dias </span>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          {isOwner ? (
            <>
              <input
                type="text"
                {...register("text")}
                defaultValue={comment.text}
              />
            </>
          ) : (
            <input type="text" disabled value={comment.text} />
          )}
          {isOwner ? (
            <div className="buttons">
              <button type="submit" className="save">
                Salvar alterações
              </button>

              <button
                onClick={() => setIsOwner(false)}
                type="button"
                className="cancel"
              >
                Cancelar
              </button>

              <button
                onClick={() => setDeleteCommentModal(true)}
                type="button"
                className="delete"
              >
                Excluir comentario
              </button>
            </div>
          ) : null}
        </form>
      </StyledComment>
    </>
  );
}
