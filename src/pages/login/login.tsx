import { useForm } from "react-hook-form";
import { LoginData } from "../../interfaces/login.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoginSchema } from "../../schemas/login.schemas";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";
import { FormStyled, Input, StyledLink1, StyledLink2 } from "./style";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(requestLoginSchema),
  });

  const { userLogin } = useContext(UserContext);

  return (
    <>
      <FormStyled onSubmit={handleSubmit(userLogin)}>
        <h1>Login</h1>

        <div>
          <label htmlFor="email">Email</label>
          <section>
            <Input
              type="text"
              id="email"
              placeholder="Digitar email"
              {...register("email")}
              hasError={!!errors.email}
            />
            {errors.email && <span>{errors.email.message}</span>}
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
              hasError={!!errors.password}
            />
            {errors.password && <span>{errors.password.message}</span>}
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
