import { useForm } from "react-hook-form";
import { StyledLogin } from "./style";
import { TLoginRequest } from "../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { Link, useNavigate } from "react-router-dom";
import { requestLoginSchema } from "../../schemas/login.schemas";

export function LoginPage() {
  const { login, setUserMenu, setNav } = useContext(UserContext);

  const navigate = useNavigate();

  let token = localStorage.getItem("Motors-Shop-Token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
    setUserMenu(false);
    setNav(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginRequest>({
    mode: "onBlur",
    resolver: zodResolver(requestLoginSchema),
  });

  const onSubmitFunction = (data: TLoginRequest) => {
    login(data);
  };

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>

          <Link to="/emailNewPassword">Esqueci minha senha</Link>

          <div className="buttons">
            <button>Entrar</button>

            <span>Ainda não possui conta ?</span>

            <Link to="/register">Cadastrar</Link>
          </div>
        </div>
      </form>
    </StyledLogin>
  );
}
