import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { TUserRegister } from "../../providers/userContext/@Types";
import { userSchemaRegister } from "../../schemas/users.schemas";
import { StyledRegister } from "./style";

export const RegisterPage = () => {

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
            <h1>Cadastro</h1>
            <p>Informações pessoais</p>

            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register("name")}  placeholder="Ex: Antônio da Silva"/>
            <p className="errors">{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} placeholder="Ex: antônio@kenzie.com.br"/>
            <p className="errors">{errors.email?.message}</p>

            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" {...register("cpf")} placeholder="000.000.000-00"/>
            <p className="errors">{errors.cpf?.message}</p>

            <label htmlFor="phone">Celular</label>
            <input type="text" id="celular" {...register("phone")} placeholder="(DDD) 90000-0000"/>
            <p className="errors">{errors.phone?.message}</p>

            <label htmlFor="birth_date">Data de nascimento</label>
            <input type="text" id="birth_date" {...register("birth_date")} placeholder="00/00/00"/>
            <p className="errors">{errors.birth_date?.message}</p>

            <label htmlFor="description">Descrição</label>
            <input type="text" id="description" {...register("description")} placeholder="Digitar descrição"/>
            <p className="errors">{errors.description?.message}</p>

            <p>Informações de endereço</p>

            <label htmlFor="zip_code">CEP</label>
            <input type="text" id="zip_code" {...register("zip_code")} placeholder="00000-000"/>
            <p className="errors">{errors.zip_code?.message}</p>

            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="state">Estado</label>
                    <input type="text" id="state" {...register("state")} placeholder="Digitar Estado"/>
                    <p className="errors">{errors.state?.message}</p>
                </div>
                <div className="flex-column">
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" {...register("city")} placeholder=""/>
                    <p className="errors">{errors.city?.message}</p>
                </div>
            </div>

            <label htmlFor="street">Rua</label>
            <input type="text" id="street" {...register("street")} placeholder=""/>
            <p className="errors">{errors.street?.message}</p>

            <div className="flex-row">
                <div className="flex-column">
                    <label htmlFor="number">Número</label>
                    <input type="text" id="number" {...register("number")} placeholder=""/>
                    <p className="errors">{errors.number?.message}</p>
                </div>
                <div className="flex-column">
                    <label htmlFor="complement">Complemento</label>
                    <input type="text" id="complement" {...register("complement")} placeholder=""/>
                </div>
            </div>

            <p>Tipo de conta</p>

            <div>
                <div className="flex-row">
                    <input
                    type="hidden"
                    {...register("is_advertise")}
                    />
                    <button onClick={() => setValue("is_advertise", true)}>
                        Anunciante
                    </button>
                    <button onClick={() => setValue("is_advertise", false)}>
                        Comprador
                    </button>
                </div>
                <p className="errors">{errors.is_advertise?.message}</p>
            </div>

            <label htmlFor="password">Senha</label>
            <input type="text" id="password" {...register("password")} placeholder=""/>
            <p className="errors">{errors.password?.message}</p>

            <label htmlFor="confirm_password">Confirmar Senha</label>
            <input type="text" id="confirm_password" {...register("confirm_password")} placeholder=""/>
            <p className="errors">{errors.confirm_password?.message}</p>

            <button type="submit">Finalizar cadastro</button>
        </form>
      </StyledRegister>
    );
};



