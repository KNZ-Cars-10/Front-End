import { useContext, useEffect, useState } from "react";
import { StyledModalUpdateAddress } from "./style";
import { TAdvertUpdate } from "../../../providers/advertContext/@Types";
import { useForm } from "react-hook-form";
import { updateAdvertSchema } from "../../../schemas/adverts.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdvertContext } from "../../../providers/advertContext/advertContext";
import { UserContext } from "../../../providers/userContext/userContext";
import { toast } from "react-toastify";

export function ModalUpdateAdvert() {
  const {
    advertProfile,
    updateAdvert,
    setDeleteAdvertModal,
    setUpdateAdvertModal,
  } = useContext(AdvertContext);

  const { profile } = useContext(UserContext);

  const [currentImage, setCurrentImage] = useState<File | undefined>(undefined);

  const [status, setStatus] = useState<boolean | null | undefined>(null);

  const [currentImageURL, setCurrentImageURL] = useState<string | null>(null);

  const [currentSavedImage, setCurrentSavedImage] = useState<string | null>(
    null
  );

  const [currentCover_image, setCurrentCover_image] = useState<
    string | null | undefined
  >(null);

  const [newCurrentImageURL, setNewCurrentImageURL] = useState<
    string | null | undefined
  >(null);

  const [newCurrentImage, setNewCurrentImage] = useState<
    File | null | undefined
  >(null);

  const [currentImages, setCurrentImages] = useState<
    string[] | null | undefined
  >(null);

  const [changeCoverImageClick, setChangeCoverImageClick] = useState(false);

  useEffect(() => {
    setStatus(advertProfile?.status);
    setCurrentImages(advertProfile?.other_images);
  }, [advertProfile]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdvertUpdate>({
    mode: "onBlur",
    defaultValues: {
      color: advertProfile?.color,
      description: advertProfile?.description,
      cover_image: advertProfile?.cover_image,
      price: advertProfile?.price,
      year: advertProfile?.year,
      mileage: advertProfile?.mileage,
      status: advertProfile?.status,
      other_images: advertProfile?.other_images,
    },
    resolver: zodResolver(updateAdvertSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];

    setCurrentImage(image);

    const url = URL.createObjectURL(image);

    setCurrentImageURL(url);
  };

  const onSubmitFunction = (data: TAdvertUpdate) => {
    const newData = {
      ...data,
      status: status,
      other_images: currentImages,
    };

    if (status == true && profile?.is_advertiser == false) {
      toast.error(`Você deve ser um anunciante para publicar este anúncio`);
    } else {
      if (newCurrentImage && changeCoverImageClick) {
        updateAdvert(
          newData,
          advertProfile?.id!,
          currentImage,
          newCurrentImage
        );
      } else {
        updateAdvert(newData, advertProfile?.id!, currentImage);
      }
    }
  };

  function handleDeleteAdvert() {
    setUpdateAdvertModal(false);
    setDeleteAdvertModal(true);
  }

  function handleSavedImage(img: string) {
    if (img === currentSavedImage) {
      setCurrentSavedImage(null);
    } else {
      setCurrentSavedImage(img);
    }
  }

  function handleCoverImage(img: string) {
    if (img === currentCover_image) {
      setCurrentCover_image(null);
    } else {
      setCurrentCover_image(img);
    }
  }

  function handleDeleteImage(url: string) {
    const newImages = currentImages?.filter((img) => img != url);

    setCurrentSavedImage(null);

    setCurrentImages(newImages);
  }

  function newCoverImageClick(e: React.ChangeEvent<HTMLInputElement>) {
    const image = e.target.files![0];

    const url = URL.createObjectURL(image);

    setNewCurrentImageURL(url);

    setNewCurrentImage(image);
  }

  return (
    <div className="modal">
      <StyledModalUpdateAddress
        status={status}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <h2>Editar anúncio</h2>

        <span>Informações do veiculo</span>

        <div className="local">
          <div>
            <label htmlFor="year">Ano</label>
            <input
              type="text"
              id="year"
              placeholder="2018"
              {...register("year")}
            />
            <p className="error">{errors.year?.message}</p>
          </div>
          <div>
            <label htmlFor="mileage">Quilometragem</label>

            <input
              type="text"
              readOnly
              {...register("mileage")}
              placeholder="30.000"
            />

            <p className="error">{errors.mileage?.message}</p>
          </div>
        </div>

        <div className="local">
          <div>
            <label htmlFor="color">Ano</label>
            <input
              type="text"
              id="color"
              placeholder="Branco"
              {...register("color")}
            />
            <p className="error">{errors.color?.message}</p>
          </div>
          <div>
            <label htmlFor="price">Preço</label>

            <input
              type="text"
              readOnly
              {...register("price")}
              placeholder="R$ 50.000,00"
            />

            <p className="error">{errors.price?.message}</p>
          </div>
        </div>

        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            {...register("description")}
          />
          <p className="error">{errors.description?.message}</p>
        </div>

        <div>
          <label>Publicado</label>

          <div className="statusButtons">
            <button
              className="true"
              type="button"
              onClick={() => setStatus(true)}
            >
              Sim
            </button>

            <button
              className="false"
              type="button"
              onClick={() => setStatus(false)}
            >
              Não
            </button>
          </div>
        </div>

        <div className="cover_image">
          <label htmlFor="cover_image">Imagem de capa</label>
          <div>
            <input
              className="coverImage"
              type="url"
              id="cover_image"
              placeholder="Adicionar campo para imagem da galeria"
              readOnly
              onClick={() => handleCoverImage(advertProfile!.cover_image!)}
              {...register("cover_image")}
            />
            <button
              type="button"
              onClick={() => setChangeCoverImageClick(!changeCoverImageClick)}
            >
              Alterar Imagem
            </button>
          </div>

          <p className="error">{errors.cover_image?.message}</p>
        </div>

        {currentCover_image ? (
          <div className="img">
            <img
              src={currentCover_image!}
              alt="imagem salva que está sendo vizualizada"
            />
          </div>
        ) : null}

        {changeCoverImageClick ? (
          <>
            <div>
              <label htmlFor="cover_image">Nova Imagem de capa</label>
              <input
                onChange={(e) => newCoverImageClick(e)}
                type="file"
                id="newCoverImage"
                placeholder="Adicionar campo para imagem da galeria"
              />
            </div>
            {newCurrentImageURL ? (
              <div className="img">
                <img
                  src={newCurrentImageURL!}
                  alt="imagem salva que está sendo vizualizada"
                />
              </div>
            ) : null}
          </>
        ) : null}

        {advertProfile!.other_images!.length > 0 ? (
          <>
            <label>Imagens do veículo</label>
            <ul>
              {currentImages?.map((img) => (
                <li className="url" key={img}>
                  <input
                    onClick={() => handleSavedImage(img)}
                    type="url"
                    id="image"
                    readOnly
                    value={img}
                  />
                  <button type="button" onClick={() => handleDeleteImage(img)}>
                    Excluir imagem
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {currentSavedImage ? (
          <div className="img">
            <img
              src={currentSavedImage!}
              alt="imagem salva que está sendo vizualizada"
            />
          </div>
        ) : null}

        <div>
          <label htmlFor="cover_image">Adicionar Imagem</label>
          <input
            onChange={(e) => handleFileChange(e)}
            type="file"
            id="cover_image"
            placeholder="Adicionar campo para imagem da galeria"
          />
        </div>

        {currentImageURL ? (
          <div className="img">
            <img src={currentImageURL!} alt="imagem atual que será enviada" />
          </div>
        ) : null}

        <div className="buttons">
          <button
            className="delete"
            type="button"
            onClick={() => handleDeleteAdvert()}
          >
            Excluir anúncio
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => setUpdateAdvertModal(false)}
          >
            Cancelar
          </button>
          <button className="save" type="submit">
            Salvar Alterações
          </button>
        </div>
      </StyledModalUpdateAddress>
    </div>
  );
}
