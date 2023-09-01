import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { newPasswordUserSchema } from "../../schemas/users.schemas";
import { TNewPassword } from "../../providers/userContext/@Types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

function ResetPassword() {
  const [tokenValid, setTokenValid] = useState(true);

  const navigate = useNavigate();

  const { token } = useParams();
  const { id } = useParams();

  const { register, handleSubmit } = useForm<TNewPassword>({
    resolver: zodResolver(newPasswordUserSchema),
  });

  const verifyToken = async () => {
    const user = await api.get(`users/${id}`);

    if (user.data.resetToken == token) {
      setTokenValid(true);

      return true;
    }

    setTokenValid(false);

    return false;
  };

  const changePassword = async (newPassword: string) => {
    try {
      await api.post(`recoverPassword/${token}`, { newPassword });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (formData: TNewPassword) => {
    const tokenIsValid = await verifyToken();

    if (tokenIsValid) {
      try {
        await changePassword(formData.password);

        toast.success("Senha alterada com sucesso");

        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Digite sua nova senha</span>

        <input
          type="password"
          id="password"
          placeholder="Digite a senha"
          {...register("password")}
        />

        {!tokenValid && <span>Algo deu errado</span>}

        <button type="submit">Mudar senha</button>
      </form>
    </>
  );
}

export default ResetPassword;
