import { z } from "zod";
import { advertSchema } from "./adverts.schemas";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: "CPF inválido. Use o formato indicado",
  }),
  phone: z.string().regex(/^\(\d{3}\) 9\d{4}-\d{4}$/, {
    message: "Telefone inválido. Use o formato indicado",
  }),
  birth_date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: "Data inválida. Use o formato indicado",
  }),
  description: z.string().min(10, "Descrição obrigatória"),
  zip_code: z.string().regex(/^\d{5}-\d{3}$/, {
    message: "CEP inválido. Use o formato indicado.",
  }),
  state: z.string().min(1, "Estado obrigatório"),
  city: z.string().min(1, "Cidade obrigatório"),
  street: z.string().min(1, "Rua obrigatório"),
  number: z.string({invalid_type_error: "Número Obrigatório", required_error: "Número Obrigatório"}),
  complement: z.string().nullable(),
  is_advertiser: z.boolean({invalid_type_error: "Selecione uma opção"})
});

export const userSchemaRegister = userSchema
  .omit({
    id: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirm_password: z.string().min(1, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Senhas não são iguais",
    path: ["confirm_password"],
  });

export const userSendSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  email: z.string().email("Email inválido"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: "CPF inválido. Use o formato indicado",
  }),
  phone: z.string().regex(/^\(\d{3}\) 9\d{4}-\d{4}$/, {
    message: "Telefone inválido. Use o formato indicado",
  }),
  birth_date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: "Data inválida. Use o formato indicado",
  }),
  description: z.string().min(10, "Descrição obrigatória"),
  zip_code: z.string().regex(/^\d{5}-\d{3}$/, {
    message: "CEP inválido. Use o formato indicado.",
  }),
  state: z.string().min(1, "Estado obrigatório"),
  city: z.string().min(1, "Cidade obrigatório"),
  street: z.string().min(1, "Rua obrigatório"),
  number: z.string({invalid_type_error: "Número Obrigatório", required_error: "Número Obrigatório"}),
  complement: z.string().nullable(),
  is_advertiser: z.boolean({invalid_type_error: "Selecione uma opção"})
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

export const userSchemaResponse = userSchema.extend({
  adverts: z.optional(advertSchema).array(),
});

export const updateUserSchema = userSchema
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .partial();

export const usersSchema = userSchemaResponse.array();
