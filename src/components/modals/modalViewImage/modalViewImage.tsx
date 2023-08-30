import { StyledModalViewImage } from "./style";

interface IProps {
  image: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalViewImage({ image, closeModal }: IProps) {
  return (
    <div className="modal">
      <StyledModalViewImage>
        <div>
          <h2>Imagem do veículo</h2>
          <span onClick={() => closeModal(false)}>X</span>
        </div>

        <div className="Image">
          <img src={image} alt="Imagem atual do veiculo" />
        </div>
      </StyledModalViewImage>
    </div>
  );
}
