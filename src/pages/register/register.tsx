import { useContext, useEffect, useState } from "react";
import { StyledRegister } from "./style";
import { TUserRegister } from "../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaRegister } from "../../schemas/users.schemas";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);

  const navigate = useNavigate();

  const { setUserMenu } = useContext(UserContext);

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
      setUserMenu(false);
    } else {
      setUserMenu(false);
    }
  }, []);

  const [advertiser, setAdvertiser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRegister>({
    mode: "onBlur",
    resolver: zodResolver(userSchemaRegister),
  });

  const onSubmitFunction = (data: TUserRegister) => {
    const color = Math.floor(Math.random() * 12) + 1;

    const newData = {
      ...data,
      is_advertiser: advertiser,
      color: color.toString(),
    };

    userRegister(newData);
  };

  return (
    <StyledRegister advertiser={advertiser}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Cadastro</h2>

        <span>Informações pessoais </span>

        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Ex: Samuel Leão"
            {...register("name")}
            defaultValue={undefined}
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
            defaultValue={undefined}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
            {...register("cpf")}
            defaultValue={undefined}
          />
          <p className="error">{errors.cpf?.message}</p>
        </div>

        <div>
          <label htmlFor="phone">Celular</label>
          <input
            type="text"
            id="phone"
            placeholder="(DDD) 90000-0000"
            {...register("phone")}
            defaultValue={undefined}
          />
          <p className="error">{errors.phone?.message}</p>
        </div>

        <div>
          <label htmlFor="birthDate">Data de Nascimento</label>
          <input
            type="text"
            id="birthDate"
            placeholder="00/00/00"
            {...register("birth_date")}
            defaultValue={undefined}
          />
          <p className="error">{errors.birth_date?.message}</p>
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            placeholder="Digitar descrição"
            {...register("description")}
            defaultValue={undefined}
          />
          <p className="error">{errors.description?.message}</p>
        </div>

        <span>Informações de endereço</span>

        <div>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            placeholder="00000.000"
            {...register("zip_code")}
            defaultValue={undefined}
          />
          <p className="error">{errors.zip_code?.message}</p>
        </div>

        <div className="local">
          <div>
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              id="state"
              placeholder="Digitar Estado"
              {...register("state")}
              defaultValue={undefined}
            />
            <p className="error">{errors.state?.message}</p>
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              placeholder="Digitar cidade"
              {...register("city")}
              defaultValue={undefined}
            />
            <p className="error">{errors.city?.message}</p>
          </div>
        </div>

        <div>
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            placeholder="Digitar Rua"
            {...register("street")}
            defaultValue={undefined}
          />
          <p className="error">{errors.street?.message}</p>
        </div>

        <div className="local">
          <div>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              placeholder="Digitar número"
              {...register("number")}
              defaultValue={undefined}
            />
            <p className="error">{errors.number?.message}</p>
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              id="complement"
              placeholder="Ex: apart 307"
              {...register("complement")}
              defaultValue={undefined}
            />
            <p className="error">{errors.complement?.message}</p>
          </div>
        </div>

        <div>
          <label>Tipo de conta</label>

          <div className="buttons">
            <button
              className="noAdvertise"
              type="button"
              onClick={() => setAdvertiser(false)}
            >
              Comprador
            </button>
            <button
              className="advertise"
              type="button"
              onClick={() => setAdvertiser(true)}
            >
              Anunciante
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digitar Senha"
            {...register("password")}
            defaultValue={undefined}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digitar Senha"
            {...register("confirm_password")}
            defaultValue={undefined}
          />
          <p className="error">{errors.confirm_password?.message}</p>
        </div>

        <button type="submit" className="RegisterButton">
          Finalizar Cadastro
        </button>
      </form>
    </StyledRegister>
  );
};
