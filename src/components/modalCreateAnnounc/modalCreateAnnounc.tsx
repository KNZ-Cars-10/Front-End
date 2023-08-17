import { useForm } from "react-hook-form";
import { CreateAnnounceForm, LabelInput } from "./style";
import { AdvertData, AdvertDataAxios, advertSchemaRequest } from "../../schemas/adverts.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AdvertContext } from "../../providers/advertContext/advertContext";

export const ModalCreateAnnounce = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<AdvertData>({
    resolver: zodResolver(advertSchemaRequest),
  });
  const {setNewAdvert, newAdvert, createAdvert} = useContext(AdvertContext)

  useEffect(()=>{
    try {
      createAdvert(newAdvert!)
    } catch (error) {
      console.log(error);
      
    }
  },[newAdvert])
  const onSubmit: SubmitHandler<AdvertData> = (data: AdvertData) => {

    const newData: AdvertDataAxios = {
      ...data,
      year: +data.year,
      price_FIPE: +data.price_FIPE,
      price: +data.price,
      mileage: +data.mileage,
    }

    setNewAdvert(newData)
  };

  return (
    <div className="modal">
      <CreateAnnounceForm onSubmit={handleSubmit(onSubmit)}>
        <header>
          <p className="text-style-heading-heading-7-500">Criar anúncio</p>
          <img src="/src/assets/x.svg" alt="" />
        </header>
        <p className="text-style-text-body-2-500">Informações do veículo</p>

        <LabelInput>
          <label
            htmlFor="mark"
            className="text-style-inputs-buttons-input-label"
          >
            Marca
          </label>
          <select
            {...register("brand")}
            id="mark"
            className="text-style-inputs-buttons-input-placeholder input"
            placeholder="Oi"
          >
            <option value="comida">Oi</option>
          </select>
        </LabelInput>
        <LabelInput>
          <label
            htmlFor="model"
            className="text-style-inputs-buttons-input-label"
          >
            Modelo
          </label>
          <select
            {...register("model")}
            id="model"
            className="text-style-inputs-buttons-input-placeholder input"
            placeholder="Oi"
          >
            <option value="comida">Oi</option>
          </select>
        </LabelInput>
        <div className="doub-input">
          <LabelInput>
            <label
              htmlFor="year"
              className="text-style-inputs-buttons-input-label"
            >
              Ano
            </label>

            <input
              type="number"
              id="year"
              className="text-style-inputs-buttons-input-placeholder input"
              placeholder="2023"
              {...register("year")}
            />
            <p>{errors.year?.message}</p>
          </LabelInput>
          <LabelInput>
            <label
              htmlFor="gas"
              className="text-style-inputs-buttons-input-label"
            >
              Combustível
            </label>
            <input
              {...register("fuel")}
              className="text-style-inputs-buttons-input-placeholder input"
              id="gas"
              placeholder="Gasolina/Etanol"
            />
          </LabelInput>
        </div>
        <div className="doub-input">
          <LabelInput>
            <label
              htmlFor="km"
              className="text-style-inputs-buttons-input-label"
            >
              Quilometragem
            </label>
            <input
              type="number"
              {...register("mileage")}
              id="km"
              className="text-style-inputs-buttons-input-placeholder input"
              placeholder="30.000"
            />
          </LabelInput>
          <LabelInput>
            <label
              htmlFor="color"
              className="text-style-inputs-buttons-input-label"
            >
              Cor
            </label>
            <input
              {...register("color")}
              className="text-style-inputs-buttons-input-placeholder input"
              id="color"
              placeholder="Prata"
            />
          </LabelInput>
        </div>
        <div className="doub-input">
          <LabelInput>
            <label
              htmlFor="fipe"
              className="text-style-inputs-buttons-input-label"
            >
              Preço tabela FIPE
            </label>
            <input
              type="number"
              {...register("price_FIPE")}
              id="fipe"
              className="text-style-inputs-buttons-input-placeholder input"
              placeholder="R$ 48.000,00"
            />
          </LabelInput>
          <LabelInput>
            <label
              htmlFor="price"
              className="text-style-inputs-buttons-input-label"
            >
              Preço
            </label>
            <input
              type="number"
              {...register("price")}
              className="text-style-inputs-buttons-input-placeholder input"
              id="price"
              placeholder="RS$ 50.000,00"
            />
          </LabelInput>
        </div>
        <LabelInput>
          <label
            htmlFor="description"
            className="text-style-inputs-buttons-input-label"
          >
            Descrição
          </label>
          <textarea
            {...register("description")}
            name=""
            id=""
            className="text-style-inputs-buttons-input-placeholder input"
            rows={5}
            placeholder="Digite a descrição do anúncio..."
          ></textarea>
        </LabelInput>
        <LabelInput>
          <label
            htmlFor="capeImage"
            className="text-style-inputs-buttons-input-label"
          >
            Imagem da capa
          </label>
          <input
            {...register("cover_image")}
            className="text-style-inputs-buttons-input-placeholder input"
            type="url"
            id="capeImage"
            placeholder="https://image.com"
          />
        </LabelInput>
        <LabelInput>
          <label
            htmlFor="firstImage"
            className="text-style-inputs-buttons-input-label"
          >
            1° Imagem da galeria
          </label>
          <input
            {...register("first_image")}
            className="text-style-inputs-buttons-input-placeholder input"
            type="url"
            id="firstImage"
            placeholder="https://image.com"
          />
        </LabelInput>
        <LabelInput>
          <label
            htmlFor="secondImage"
            className="text-style-inputs-buttons-input-label"
          >
            2° Imagem da galeria
          </label>
          <input
            {...register("second_image")}
            className="text-style-inputs-buttons-input-placeholder input"
            type="url"
            id="secondImage"
            placeholder="https://image.com"
          />
        </LabelInput>
        <div className="buttonsSubmit">
          <button
            type="reset"
            className="text-style-inputs-buttons-button-big-text cancel"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="text-style-inputs-buttons-button-big-text submit"
          >
            Criar anúncio
          </button>
        </div>
      </CreateAnnounceForm>
    </div>
  );
};
