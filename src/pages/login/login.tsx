import { useForm } from "react-hook-form";
import { LoginData } from "../../interfaces/login.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoginSchema } from "../../schemas/login.schemas";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext, useState } from "react";
import { FormStyled, Input, StyledLink1, StyledLink2 } from "./style";
import { api } from "../../services/api";
import { TUserLoginFormValues } from "../../providers/userContext/@Types";

export const LoginPage = () => {
  const { userLogin, passwordError } = useContext(UserContext);

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(requestLoginSchema),
  });

  const [emailExists, setEmailExists] = useState(true);

  const checkEmailExists = async (email: string) => {
    try {
      const response = await api.get(`users/checkEmail/${email}`);

      return response.data.exists;
    } catch (error) {
      console.log(error)
      return false;
    }
  };

  const onSubmit = async (formData: TUserLoginFormValues) => {
    const exists = await checkEmailExists(formData.email);
    setEmailExists(exists);

    if (exists) {
      userLogin(formData);
    }
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <div>
          <label htmlFor="email">Email</label>
          <section>
            <Input
              type="text"
              id="email"
              placeholder="Digitar email"
              {...register("email")}
              hasError={!emailExists}
            />
            {!emailExists && (
              <span>
                O email que você inseriu não está conectado a uma conta.
              </span>
            )}
          </section>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <section>
            <Input
              type="text"
              id="password"
              placeholder="Digitar senha"
              {...register("password")}
              hasError={passwordError}
            />
            {passwordError && <span>A senha inserida está incorreta.</span>}
            <StyledLink1 to="/password-reset">Esqueci minha senha</StyledLink1>
          </section>
        </div>

        <button type="submit">Entrar</button>

        <p>Ainda não possui conta?</p>

        <StyledLink2 to="/register">Cadastrar</StyledLink2>
      </FormStyled>

    </>
  );
};
