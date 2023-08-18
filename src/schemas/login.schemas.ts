import { z } from "zod";

export const requestLoginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export const responseLoginSchema = z.object({
  token: z.string(),
});
