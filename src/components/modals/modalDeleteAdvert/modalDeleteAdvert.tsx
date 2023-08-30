import { useContext } from "react";
import { AdvertContext } from "../../../providers/advertContext/advertContext";
import { StyledModalDeleteAdvert } from "./style";
import { UserContext } from "../../../providers/userContext/userContext";

export function ModalDeleteAdvert() {
  const { setDeleteAdvertModal, advertProfile, deleteAdvert } =
    useContext(AdvertContext);

  const { getUserLoged } = useContext(UserContext);

  let token = localStorage.getItem("Motors-Shop-Token");
  function handleDeleteClick() {
    deleteAdvert(advertProfile!.id);
    getUserLoged(token!);
  }

  return (
    <div className="modal">
      <StyledModalDeleteAdvert>
        <span>Excluir anúncio</span>

        <span>Tem certeza que deseja remover este anúncio ?</span>

        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio e removerá seus dados de nossos servidores.
        </p>

        <div className="buttons">
          <button
            className="cancel"
            type="button"
            onClick={() => setDeleteAdvertModal(false)}
          >
            Cancelar
          </button>
          <button
            onClick={() => handleDeleteClick()}
            className="delete"
            type="button"
          >
            Sim, excluir anúncio
          </button>
        </div>
      </StyledModalDeleteAdvert>
    </div>
  );
}
