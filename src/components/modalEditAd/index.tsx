import { useForm } from "react-hook-form";
import { DivModal, FormContent } from "./style";

export const ModalEditAd = () => {
    const { register, handleSubmit } = useForm();

    const handleSaveChanges = () => {
        // Lógica para salvar as alterações do anúncio
    };

    const handleCancel = () => {
        // Lógica para cancelar
    };

    const handleDeleteAnuncio = () => {
        // Lógica para excluir o anúncio
    };

    return (
        <DivModal>
            <div className="overflow">
                <FormContent>
                    <div className="tittle">
                        <h2 className="text-style-heading-heading-7-500">
                            Editar Anúncio
                        </h2>
                        <span>X</span>
                    </div>
                    <p className="text-style-text-body-2-500">
                        Informações do veículo
                    </p>

                    <div className="group_select">
                        <label htmlFor="marca">Marca</label>
                        <select id="marca" {...register("marca")}></select>
                    </div>
                    <div className="group_select">
                        <label htmlFor="modelo">Modelo</label>
                        <select id="modelo" {...register("modelo")}></select>
                    </div>

                    <div className="group_infos">
                        <div className="group_select">
                            <label htmlFor="ano">Ano</label>
                            <select name="ano" id="ano"></select>
                        </div>
                        <div className="group_select">
                            <label htmlFor="Combustivel">Combustível</label>
                            <select
                                name="Combustivel"
                                id="Combustivel"
                            ></select>
                        </div>
                        <div className="group_select">
                            <label htmlFor="Quilometragem">Quilometragem</label>
                            <select
                                name="Quilometragem"
                                id="Quilometragem"
                            ></select>
                        </div>
                        <div className="group_select">
                            <label htmlFor="cor">Cor</label>
                            <select name="cor" id="cor"></select>
                        </div>
                        <div className="group_select">
                            <label htmlFor="FIPE">Preço tabela FIPE</label>
                            <select name="FIPE" id="FIPE"></select>
                        </div>
                        <div className="group_select">
                            <label htmlFor="Preco">Preço</label>
                            <select name="Preco" id="Preco"></select>
                        </div>
                    </div>
                    <div className="group_select">
                        <label htmlFor="">Descrição</label>
                        <textarea id="description" {...register("descricao")} />
                    </div>

                    <div className="modal-buttons">
                        <button type="button" onClick={handleCancel}>
                            Sim
                        </button>
                        <button type="button" onClick={handleDeleteAnuncio}>
                            Não
                        </button>
                    </div>
                    <div>
                        <div className="img__container">
                            <label
                                className="text-style-inputs-buttons-input-label"
                                htmlFor="capa"
                            >
                                Imagem da capa
                            </label>
                            <input
                                className="text-style-inputs-buttons-input-placeholder"
                                id="capa"
                                type="text"
                                placeholder="https://image.com"
                            />

                            <label
                                className="text-style-inputs-buttons-input-label"
                                htmlFor="galeria1"
                            >
                                1° Imagem da galeria
                            </label>
                            <input
                                className="text-style-inputs-buttons-input-placeholder"
                                id="galeria1"
                                type="text"
                                placeholder="https://image.com"
                            />

                            <label
                                className="text-style-inputs-buttons-input-label"
                                htmlFor="galeria2"
                            >
                                2° Imagem da galeria
                            </label>
                            <input
                                className="text-style-inputs-buttons-input-placeholder"
                                id="galeria2"
                                type="text"
                                placeholder="https://image.com"
                            />
                        </div>
                        <button className="add_img">Adicionar campo para imagem da galeria</button>
                        <div className="modal-buttons">
                            <button className="delete">Excluir anúncio</button>
                            <button className="save">Salvas alteraçoes</button>
                        </div>
                    </div>
                </FormContent>
            </div>
        </DivModal>
    );
};
