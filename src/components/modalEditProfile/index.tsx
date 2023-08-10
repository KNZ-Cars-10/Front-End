import { useForm } from "react-hook-form";
import { DivModal, FormContent } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditProfile, schemaEditProfile } from "./validator";

export const ModalEditProfile = () => {
    const { register, handleSubmit } = useForm<TEditProfile>({
        resolver: zodResolver(schemaEditProfile),
    });

    const handleSaveChanges = () => {
        // Lógica para salvar as alterações
    };

    const handleDeleteProfile = () => {
        // Lógica para excluir o perfil
    };

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
                    />
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
                        type="date"
                        placeholder="Data de Nascimento"
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
                    />

                    <div className="modal-buttons">
                        <button type="submit">Cancelar</button>
                        <button type="submit" onClick={handleDeleteProfile}>
                            Excluir Perfil
                        </button>
                        <button type="submit" onClick={handleSaveChanges}>
                            Salvar Alterações
                        </button>
                    </div>
                </FormContent>
            </div>
        </DivModal>
    );
};
