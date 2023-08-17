import { useForm } from "react-hook-form";
import { LoginData } from "../../interfaces/login.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoginSchema } from "../../schemas/login.schemas";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext } from "react";
import { ModalCreateAnnounce } from "../../components/modalCreateAnnounc/modalCreateAnnounc";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(requestLoginSchema),
  });

  const { userLogin } = useContext(UserContext);

  return (
    <main>
      {/* <h1>Login</h1> */}

      <ModalCreateAnnounce/>

      {/* <form onSubmit={handleSubmit(userLogin)}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="password">Senha</label>
        <input type="text" id="password" {...register("password")} />

        <button type="submit">Entrar</button>

        <Link to="/register">Criar nova conta</Link>
      </form> */}
    </main>
  );
};
