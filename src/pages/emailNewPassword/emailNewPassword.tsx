import { StyledEmailNewPassword } from "./style";
import { useForm } from "react-hook-form";
import { TEmailRequest } from "../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "../../schemas/resetPassword.schemas";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext/userContext";
import { useNavigate } from "react-router-dom";

export function EmailNewPasswordPage() {
  const { sendEmailPassword } = useContext(UserContext);

  const oldToken = localStorage.getItem("Motors-Shop-Token");

  const navigate = useNavigate();

  useEffect(() => {
    if (oldToken) {
      navigate("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEmailRequest>({
    mode: "onBlur",
    resolver: zodResolver(emailSchema),
  });

  const onSubmitFunction = (data: TEmailRequest) => {
    sendEmailPassword(data);
  };

  return (
    <StyledEmailNewPassword onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Reset de Senha</h1>

      <p>
        Você receberá um email com o link para redefenir sua senha
        <br />
        Tenha certeza que seu email está corrento
      </p>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digitar seu email aqui"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>
      </div>
      <button type="submit">Enviar email</button>
    </StyledEmailNewPassword>
  );
}
