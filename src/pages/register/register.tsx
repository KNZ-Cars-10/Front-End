import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { TUserRegister } from "../../providers/userContext/@Types";
import { userSchemaRegister } from "../../schemas/users.schemas";
import { StyledRegister } from "./style";

export const RegisterPage = () => {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonSelection = (buttonIndex: number) => {
      setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex);
    };

    const { register, handleSubmit, setValue, formState: {errors} } = useForm<TUserRegister>(
        {
       resolver: zodResolver(userSchemaRegister),
        }
    );

    const { userRegister} = useContext(UserContext);

    const mySubmition = async (data: TUserRegister) => {
        /* Verificar com a Turma, sobre o confirm_password */
        console.log( "Valores inseridos:", data);

        /* try {
            console.log( "Valores inseridos:", data);
            const validValues = userSchemaRegister.parse(data);
            userRegister(validValues);
            console.log( "Valores validados:",validValues);
        } catch (error) {
            
        } */
    }

    return (
      <StyledRegister>
        <form onSubmit={handleSubmit(mySubmition)} className="Column">
            <h1 className="text-style-heading-heading-5-600">Cadastro</h1>
            <p className="text-style-inputs-buttons-input-label">Informações pessoais</p>

            <div className="stick-label">
                <label htmlFor="name" className="text-style-inputs-buttons-input-label">Nome</label>
                <input type="text" id="name" className="text-style-inputs-buttons-input-placeholder" {...register("name")}  placeholder="Ex: Antônio da Silva"/>
                <p className="error">{errors.name?.message}</p>
            </div>

            <div className="stick-label">
                <label htmlFor="email" className="text-style-inputs-buttons-input-label">Email</label>
                <input type="text" id="email" className="text-style-inputs-buttons-input-placeholder" {...register("email")} placeholder="Ex: antônio@kenzie.com.br"/>
                <p className="error">{errors.email?.message}</p>
            </div>

            <div className="stick-label">
                <label htmlFor="cpf" className="text-style-inputs-buttons-input-label">CPF</label>
                <input type="text" id="cpf" className="text-style-inputs-buttons-input-placeholder" {...register("cpf")} placeholder="Formato: 000.000.000-00"/>
                <p className="error">{errors.cpf?.message}</p>
            </div>
            

            <div className="stick-label">
                <label htmlFor="phone" className="text-style-inputs-buttons-input-label">Celular</label>
                <input type="text" id="celular" className="text-style-inputs-buttons-input-placeholder" {...register("phone")} placeholder="Formato: (DDD) 90000-0000"/>
                <p className="error">{errors.phone?.message}</p>
            </div>

            <div className="stick-label">
                <label htmlFor="birth_date" className="text-style-inputs-buttons-input-label">Data de nascimento</label>
                <input type="text" id="birth_date" className="text-style-inputs-buttons-input-placeholder" {...register("birth_date")} placeholder="Formato: 00/00/0000"/>
                <p className="error">{errors.birth_date?.message}</p>
            </div>

            <div className="stick-label">
                <label htmlFor="description" className="text-style-inputs-buttons-input-label">Descrição</label>
                <input type="text" id="description" className="text-style-inputs-buttons-input-placeholder" {...register("description")} placeholder="Ex: Especialista em venda de automóveis."/>
                <p className="error">{errors.description?.message}</p>
            </div>

            <p className="text-style-inputs-buttons-input-label">Informações de endereço</p>

            <div className="stick-label">
                <label htmlFor="zip_code" className="text-style-inputs-buttons-input-label">CEP</label>
                <input type="text" id="zip_code" className="text-style-inputs-buttons-input-placeholder" {...register("zip_code")} placeholder="Formato: 00000-000"/>
                <p className="error">{errors.zip_code?.message}</p>
            </div>
            
            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="state" className="text-style-inputs-buttons-input-label">Estado</label>
                    <input type="text" id="state" className="text-style-inputs-buttons-input-placeholder" {...register("state")} placeholder="Ex: Paraná"/>
                    <p className="error">{errors.state?.message}</p>
                </div>
                <div className="flex-column">
                    <label htmlFor="city" className="text-style-inputs-buttons-input-label">Cidade</label>
                    <input type="text" id="city" className="text-style-inputs-buttons-input-placeholder" {...register("city")} placeholder="Ex: Curitiba"/>
                    <p className="error">{errors.city?.message}</p>
                </div>
            </div>

            <div className="stick-label">
                <label htmlFor="street" className="text-style-inputs-buttons-input-label">Rua</label>
                <input type="text" id="street" className="text-style-inputs-buttons-input-placeholder" {...register("street")} placeholder="Ex: Avenida das Flores"/>
                <p className="error">{errors.street?.message}</p>
            </div>
            

            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="number" className="text-style-inputs-buttons-input-label">Número</label>
                    <input type="text" id="number" className="text-style-inputs-buttons-input-placeholder" {...register("number")} placeholder="Ex: 23"/>
                    <p className="error">{errors.number?.message}</p>
                </div>
                <div className="flex-column">
                    <label htmlFor="complement" className="text-style-inputs-buttons-input-label">Complemento</label>
                    <input type="text" id="complement" className="text-style-inputs-buttons-input-placeholder" {...register("complement")} placeholder="Ex: Quadra 29"/>
                </div>
            </div>

            <p className="text-style-inputs-buttons-input-label">Tipo de conta</p>

            <div className="stick-label">
                <div className="flex-buttons">
                    <input
                    type="hidden"
                    {...register("is_advertise")}
                    />
                    <button type="button" className={selectedButton === 1 ? "selected" : ""} 
                    onClick={() => {
                        setValue("is_advertise", true);
                        handleButtonSelection(1);
                    }}>
                        Anunciante
                    </button>
                    <button type="button" className={selectedButton === 2 ? "selected" : ""} 
                    onClick={() => {
                        setValue("is_advertise", false);
                        handleButtonSelection(2);
                    }}>
                        Comprador
                    </button>
                </div>
                <p className="error centralize-p">{errors.is_advertise?.message}</p>
            </div>

            <div className="stick-label">
                <label htmlFor="password" className="text-style-inputs-buttons-input-label">Senha</label>
                <input type="text" id="password" className="text-style-inputs-buttons-input-placeholder" {...register("password")} placeholder="Sua senha aqui"/>
                <p className="error">{errors.password?.message}</p>
            </div>
            

            <div className="stick-label">
                <label htmlFor="confirm_password" className="text-style-inputs-buttons-input-label">Confirmar Senha</label>
                <input type="text" id="confirm_password" className="text-style-inputs-buttons-input-placeholder" {...register("confirm_password")} placeholder="Confirme sua senha aqui"/>
                <p className="error">{errors.confirm_password?.message}</p>
            </div>
            

            <button type="submit">Finalizar cadastro</button>
        </form>
      </StyledRegister>
    );
};



