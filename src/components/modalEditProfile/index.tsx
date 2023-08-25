import { SubmitErrorHandler, useForm } from "react-hook-form";
import { DivModal, FormContent } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditProfile, schemaEditProfile } from "./validator";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";

export const ModalEditProfile = () => {
    const { userUpdate, userDelete } = useContext(UserContext);
    const { profile } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TEditProfile>({
        resolver: zodResolver(schemaEditProfile),
    });

    console.log(profile);

    const handleSaveChanges: SubmitErrorHandler<TEditProfile> = (data) => {
        userUpdate(data);
    };

    const handleDeleteProfile = () => {
        userDelete(profile?.id);
    };

    const handleCancel = () => {};

    return (
        <DivModal>
            <div>
                <FormContent>
                    <div>
                        <h2 className="text-style-heading-heading-7-500">
                            Editar Perfil
                        </h2>{" "}
                        <span>X</span>
                    </div>
                    <p className="text-style-text-body-2-500">
                        Informaçoes pessoais
                    </p>

                    <label
                        className="text-style-inputs-buttons-input-label"
                        htmlFor="name"
                    >
                        Nome
                    </label>
                    <input
                        className="text-style-inputs-buttons-input-placeholder"
                        id="name"
                        type="text"
                        placeholder="Nome"
                        {...register("name")}
                    />

                    <label
                        className="text-style-inputs-buttons-input-label"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="text-style-inputs-buttons-input-placeholder"
                        id="email"
                        type="email"
                        placeholder="exemple@exemple.com.br"
                        {...register("email")}
                    />

                    <label
                        className="text-style-inputs-buttons-input-label"
                        htmlFor="cpf"
                    >
                        CPF
                    </label>
                    <input
                        className="text-style-inputs-buttons-input-placeholder"
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        {...register("cpf")}
                    />
                    <p className="error">{errors.cpf?.message}</p>
                    <label
                        className="text-style-inputs-buttons-input-label"
                        htmlFor="celular"
                    >
                        Celular
                    </label>
                    <input
                        className="text-style-inputs-buttons-input-placeholder"
                        id="celular"
                        type="tel"
                        placeholder="(024) 99999-9999"
                        {...register("phone")}
                    />
                    <label
                        className="text-style-inputs-buttons-input-label"
                        htmlFor="nascimento"
                    >
                        Data de Nascimento
                    </label>
                    <input
                        className="text-style-inputs-buttons-input-placeholder"
                        id="nascimento"
                        type="text"
                        placeholder="Data de Nascimento"
                        {...register("birth_date")}
                    />
                    <label
                        className="text-style-inputs-buttons-input-label"
                        htmlFor="description"
                    >
                        Descrição
                    </label>
                    <textarea
                        className="text-style-inputs-buttons-input-label"
                        id="description"
                        placeholder="Descrição"
                        {...register("description")}
                    />

                    <div className="modal-buttons">
                        <button
                            type="submit"
                            onClick={handleSubmit(handleCancel)}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit(handleDeleteProfile)}
                        >
                            Excluir Perfil
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit(handleSaveChanges)}
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </FormContent>
            </div>
        </DivModal>
    );
};
