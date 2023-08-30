import { useForm } from "react-hook-form";
import { StyledResetPassword } from "./style";
import { TResetPasswordRequest } from "../../providers/userContext/@Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../../schemas/resetPassword.schemas";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext/userContext";

export function ResetPasswordPage() {
  const { token } = useParams();

  const { resetPassword } = useContext(UserContext);

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
  } = useForm<TResetPasswordRequest>({
    mode: "onBlur",
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmitFunction = (data: TResetPasswordRequest) => {
    resetPassword(token!, data);
  };

  return (
    <StyledResetPassword onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Recuperação de senha </h1>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digitar Senha"
          {...register("newPassword")}
          defaultValue={undefined}
        />
        <p className="error">{errors.newPassword?.message}</p>
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

      <button>Atualizar Senha</button>
    </StyledResetPassword>
  );
}
