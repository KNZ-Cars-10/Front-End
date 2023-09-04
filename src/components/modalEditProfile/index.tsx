import { SubmitErrorHandler, useForm } from "react-hook-form";
import { DivModal, FormContent } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditProfile, TEditProfilePartial } from "./validator";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";

export const ModalEditProfile = () => {
    const { userUpdate, userDelete } = useContext(UserContext);
    const { profile, setModalEditProfile } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TEditProfile>({
        resolver: zodResolver(TEditProfilePartial),
    });

    const handleSaveChanges: SubmitErrorHandler<TEditProfile> = (data) => {
        if (data.email !== profile?.email) {
            userUpdate(data);
        } else {
            data = {
                name: data.name,
                cpf: data.cpf,
                phone: data.phone,
                birth_date: data.birth_date,
                description: data.description,
            };
            userUpdate(data);
        }
    };

    const handleDeleteProfile = () => {
        userDelete(profile?.id);
    };

    return (
        <DivModal>
            <div className="div__container">
                <FormContent className="media">
                    <div>
                        <h2 className="text-style-heading-heading-7-500">
                            Editar Perfil
                        </h2>
                        <button
                            className="close"
                            onClick={() => setModalEditProfile(false)}
                        >
                            X
                        </button>
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
                        defaultValue={profile?.name}
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
                        defaultValue={profile.email}
                        placeholder="exemple@exemple.com.br"
                        // {...register("email")}
                        {...register("email", {
                            required: "O e-mail é obrigatório", // Mensagem de erro para validação
                        })}
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
                        defaultValue={profile?.cpf}
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
                        defaultValue={profile?.phone}
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
                        defaultValue={profile?.birth_date}
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
                        defaultValue={profile?.description}
                        {...register("description")}
                    />

                    <div className="modal-buttons">
                        <button
                            className="cancel"
                            type="reset"
                            onClick={() => setModalEditProfile(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="delete"
                            type="submit"
                            onClick={handleSubmit(handleDeleteProfile)}
                        >
                            Excluir Perfil
                        </button>
                        <button
                            className="save"
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
