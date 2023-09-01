import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRecoverPassword } from "../../providers/userContext/@Types";
import { recoverPasswordUserSchema } from "../../schemas/users.schemas";
import { api } from "../../services/api";
import { useState } from "react";

export const PasswordResetPage = () => {
  const [emailExists, setEmailExists] = useState(true);

  const { register, handleSubmit } = useForm<TRecoverPassword>({
    resolver: zodResolver(recoverPasswordUserSchema),
  });

  const checkEmailExists = async (email: string) => {
    try {
      const response = await api.get(`users/checkEmail/${email}`);

      return response.data.exists;
    } catch (error) {
      return false;
    }
  };

  const sendEmail = async (email: string) => {
    try {
      await api.post(`recoverPassword/sendEmail`, email);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (formData: TRecoverPassword) => {
    const exists = await checkEmailExists(formData.email);
    setEmailExists(exists);

    if (emailExists) {
      await sendEmail(formData.email);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Digite seu email para recuperação de senha</span>
        <input
          type="text"
          id="email"
          placeholder="Digitar email"
          {...register("email")}
        />
        {!emailExists && (
          <span>O email que você inseriu não está conectado a uma conta.</span>
        )}
      </form>
    </>
  );
};
