import { useForm } from "react-hook-form";
import { LoginData } from "../../interfaces/login.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoginSchema } from "../../schemas/login.schemas";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(requestLoginSchema),
  });

  const { signIn } = useAuth();

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Entrar</button>

        <Link to="/register">Criar nova conta</Link>
      </form>
    </main>
  );
};
