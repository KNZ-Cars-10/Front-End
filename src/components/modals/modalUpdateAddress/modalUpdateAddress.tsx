import { useContext } from "react";
import { UserContext } from "../../../providers/userContext/userContext";
import { useForm } from "react-hook-form";
import { TUserUpdateRequest } from "../../../providers/userContext/@Types";
import { userSchemaUpdate } from "../../../schemas/users.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledModalUpdateAddress } from "./style";

export function ModalUpdateAddress() {
  const { setUpdateAddress, profile, updateUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdateRequest>({
    mode: "onBlur",
    defaultValues: {
      zip_code: profile?.zip_code,
      state: profile?.state,
      city: profile?.city,
      street: profile?.street,
      number: profile?.number,
      complement: profile?.complement,
    },
    resolver: zodResolver(userSchemaUpdate),
  });

  const onSubmitFunction = (data: TUserUpdateRequest) => {
    updateUser(data, false);
  };

  return (
    <div className="modal">
      <StyledModalUpdateAddress onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Editar Endereço</h2>

        <span>Informações de endereço</span>

        <div>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            placeholder="00000.000"
            {...register("zip_code")}
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
            />
            <p className="error">{errors.complement?.message}</p>
          </div>
        </div>

        <div className="buttons">
          <button
            className="cancel"
            type="button"
            onClick={() => setUpdateAddress(false)}
          >
            Cancelar
          </button>

          <button className="save" type="submit">
            Salvar alterações
          </button>
        </div>
      </StyledModalUpdateAddress>
    </div>
  );
}
