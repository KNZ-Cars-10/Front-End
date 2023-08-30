import { useContext, useEffect, useState } from "react";
import { StyledModalCreateAdvert } from "./style";
import { AdvertContext } from "../../../providers/advertContext/advertContext";
import { TAdvertRequest } from "../../../providers/advertContext/@Types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { advertSchemaRequest } from "../../../schemas/adverts.schemas";
import { UserContext } from "../../../providers/userContext/userContext";

export function ModalCreateAdvert() {
  const {
    createAdvert,
    setCreateAdvertModal,
    setExternalBrand,
    setExternalModel,
    externalBrands,
    externalModels,
    externalModel,
    externalBrand,
    currentCar,
  } = useContext(AdvertContext);

  const { profile } = useContext(UserContext);

  const [currentFuel, setCurrentFuel] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (currentCar) {
      if (currentCar.fuel == 1) {
        setCurrentFuel("Flex");
      } else if (currentCar.fuel == 2) {
        setCurrentFuel("Hibrido");
      } else if (currentCar.fuel == 3) {
        setCurrentFuel("Elétrico");
      }
    }
  }, [currentCar]);

  const [currentImage, setCurrentImage] = useState<File | null>(null);

  const [currentImageURL, setCurrentImageURL] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files![0];

    setCurrentImage(images);

    const url = URL.createObjectURL(e.target.files![0]);

    setCurrentImageURL(url);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdvertRequest>({
    mode: "onBlur",
    resolver: zodResolver(advertSchemaRequest),
  });

  const onSubmitFunction = (data: TAdvertRequest) => {
    let newData = {
      ...data,
      status: true,
      other_images: [],
    };

    if (!profile?.is_advertiser) {
      newData.status = false;
    }

    createAdvert(newData, currentImage!);
  };

  return (
    <div className="modal">
      <StyledModalCreateAdvert onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Criar anúncio</h2>

        <span>Informações do veículo</span>

        <div>
          <label htmlFor="brand">Marca</label>
          <select
            id="brand"
            {...register("brand")}
            onChange={(e) => setExternalBrand(e.target.value)}
            value={externalBrand!}
          >
            {externalBrands?.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
          <p className="error">{errors.brand?.message}</p>
        </div>

        <div>
          <label htmlFor="model">Modelo</label>
          <select
            {...register("model")}
            id="model"
            onChange={(e) => setExternalModel(e.target.value)}
            value={externalModel!}
          >
            {externalModels?.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </select>
          <p className="error">{errors.model?.message}</p>
        </div>

        <div className="local">
          <div>
            <label htmlFor="year">Ano</label>
            <input
              type="text"
              id="year"
              placeholder="Ex: 2018"
              {...register("year")}
            />
            <p className="error">{errors.year?.message}</p>
          </div>
          <div>
            <label htmlFor="fuel">Combustivel</label>

            <input
              type="text"
              readOnly
              {...register("fuel")}
              value={currentFuel}
              placeholder="Escolha a marca e modelo"
            />

            <p className="error">{errors.fuel?.message}</p>
          </div>
        </div>

        <div className="local">
          <div>
            <label htmlFor="price_FIPE">Preço tabela FIPE</label>
            <input
              type="text"
              id="price_FIPE"
              readOnly
              {...register("price_FIPE")}
              value={Number(currentCar.value).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              placeholder="Escolha a marca e modelo"
            />
            <p className="error">{errors.price_FIPE?.message}</p>
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <input
              type="text"
              {...register("price")}
              id="price"
              placeholder="Ex: R$ 50.000,00"
            />
            <p className="error">{errors.price?.message}</p>
          </div>
        </div>

        <div className="local">
          <div>
            <label htmlFor="mileage">Quilometragem</label>
            <input
              type="text"
              id="mileage"
              placeholder="Ex: 30.000"
              {...register("mileage")}
            />
            <p className="error">{errors.mileage?.message}</p>
          </div>
          <div>
            <label htmlFor="color">Cor</label>
            <input
              type="text"
              {...register("color")}
              id="color"
              placeholder="Ex: Branco"
            />
            <p className="error">{errors.color?.message}</p>
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
          <label htmlFor="cover_image">Imagem de capa</label>
          <input
            onChange={(e) => handleFileChange(e)}
            type="file"
            id="cover_image"
            placeholder="Adicionar campo para imagem da galeria"
          />

          <p className="error">{errors.cover_image?.message}</p>
        </div>

        {currentImageURL ? (
          <div className="img">
            <img src={currentImageURL!} alt="imagem atual que será enviada" />
          </div>
        ) : null}

        <div className="buttons">
          <button
            type="button"
            className="cancel"
            onClick={() => setCreateAdvertModal(false)}
          >
            Cancelar
          </button>
          <button className="save" type="submit">
            Criar anúncio
          </button>
        </div>
      </StyledModalCreateAdvert>
    </div>
  );
}
