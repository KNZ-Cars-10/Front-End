import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, {
      message: "O Email é obrigatório.",
    })
    .email("Email Invalido"),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirm_password: z.string().min(1, {
      message: "Confirmação de senha é obrigatória.",
    }),
  })
  .refine((data) => data.newPassword === data.confirm_password, {
    message: "As senhas devem ser iguais",
    path: ["confirm_password"],
  });
