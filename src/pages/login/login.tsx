import { useForm } from "react-hook-form";
import { LoginData } from "../../interfaces/login.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoginSchema } from "../../schemas/login.schemas";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";
import { FormStyled } from "./style";
import { Link } from "./style";
import { ModalCreateAnnounce } from "../../components/modalCreateAnnounc/modalCreateAnnounc";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(requestLoginSchema),
  });

  const { userLogin } = useContext(UserContext);

  return (
    <>
      <FormStyled onSubmit={handleSubmit(userLogin)}>
        <h1>Login</h1>
    <main>


      <ModalCreateAnnounce/>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Digitar email"
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <section>
            <input
              type="text"
              id="password"
              placeholder="Digitar senha"
              {...register("password")}
            />
            <span>Esqueci minha senha</span>
          </section>
        </div>

        <button type="submit">Entrar</button>

        <p>Ainda não possui conta?</p>

        <Link to="/register">Cadastrar</Link>
      </FormStyled>
      
    </>
  );
};
