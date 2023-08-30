import { useContext } from "react";
import { StyledModalDeleteComment } from "./style";
import { CommentContext } from "../../../providers/commentContext/commentContext";

interface IProps {
  commentid: number;
  advertId: number;
}

export function ModalDeleteComment({ commentid, advertId }: IProps) {
  const { setDeleteCommentModal, deleteComment } = useContext(CommentContext);

  return (
    <div className="modal">
      <StyledModalDeleteComment>
        <span>Excluir Comentario</span>

        <span>Tem certeza que deseja remover este comentario ?</span>

        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          comentario e o removerá de nossos servidores.
        </p>

        <div className="buttons">
          <button
            className="cancel"
            type="button"
            onClick={() => setDeleteCommentModal(false)}
          >
            Cancelar
          </button>
          <button
            onClick={() => deleteComment(commentid, advertId)}
            className="delete"
            type="button"
          >
            Sim, excluir Comentario
          </button>
        </div>
      </StyledModalDeleteComment>
    </div>
  );
}
