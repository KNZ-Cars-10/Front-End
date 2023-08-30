import { useContext } from "react";
import { StyledModalDeleteProfile } from "./styles";
import { UserContext } from "../../../providers/userContext/userContext";

export function ModalDeleteProfile() {
  const { setDeleteProfile, deleteUser, profile } = useContext(UserContext);

  return (
    <div className="modal">
      <StyledModalDeleteProfile>
        <span>Excluir Perfil</span>

        <span>Tem certeza que deseja remover este Perfil ?</span>

        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>

        <div className="buttons">
          <button
            className="cancel"
            type="button"
            onClick={() => setDeleteProfile(false)}
          >
            Cancelar
          </button>
          <button
            onClick={() => deleteUser(profile?.id)}
            className="delete"
            type="button"
          >
            Sim, excluir Perfil
          </button>
        </div>
      </StyledModalDeleteProfile>
    </div>
  );
}
