import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestLoginSchema } from "../../schemas/login.schemas";
import { UserContext } from "../../providers/userContext/userContext";
import { useContext, useEffect } from "react";
import { FormStyled, Input, StyledLink1, StyledLink2 } from "./style";
// import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { TLoginRequest } from "../../providers/userContext/@Types";

export const LoginPage = () => {
  const { userLogin, setUserMenu } = useContext(UserContext);

  const navigate = useNavigate();

  let token = localStorage.getItem("Motors-Shop-Token");

  useEffect(() => {
    if (token) {
      navigate("/");
      setUserMenu(false);
    } else {
      setUserMenu(false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginRequest>({
    resolver: zodResolver(requestLoginSchema),
  });

  // const [emailExists, setEmailExists] = useState(true);

  // const checkEmailExists = async (email: string) => {
  //   try {
  //     const response = await api.get(`users/checkEmail/${email}`);

  //     return response.data.exists;
  //   } catch (error) {
  //     return false;
  //   }
  // };

  const onSubmit = async (formData: TLoginRequest) => {
    // const exists = await checkEmailExists(formData.email);
    // setEmailExists(exists);

    userLogin(formData);
    // if (exists) {
    // }
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
              // hasError={!emailExists}
            />
            <p className="error">{errors.email?.message}</p>
            {/* {!emailExists && (
              <span>
                O email que você inseriu não está conectado a uma conta.
              </span>
            )} */}
          </section>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <section>
            <Input
              type="password"
              id="password"
              placeholder="Digitar senha"
              {...register("password")}
              // hasError={passwordError}
            />
            <p className="error">{errors.password?.message}</p>
            {/* {passwordError && <span>A senha inserida está incorreta.</span>} */}
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
