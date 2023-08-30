import { string, z } from "zod";
import { advertSchema } from "./adverts.schemas";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(1, {
    message: "O nome é obrigatório.",
  }),
  email: z
    .string()
    .min(1, {
      message: "O Email é obrigatório.",
    })
    .email("Email Invalido"),
  cpf: z
    .string()
    .min(1, {
      message: "O CPF é obrigatório.",
    })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: "CPF inválido. Use o formato 000.000.000-00",
    }),
  phone: z
    .string()
    .min(1, {
      message: "O telefone é obrigatório.",
    })
    .regex(/^\(\d{2}\) 9\d{4}-\d{4}$/, {
      message: "Telefone inválido. Use o formato (DDD) 90000-0000",
    }),
  birth_date: z
    .string()
    .min(1, {
      message: "A Data de Nascimento é obrigatória.",
    })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Data inválida. Use o formato 00/00/0000",
    }),
  description: z.string().min(1, {
    message: "A Descrição é obrigatória.",
  }),
  zip_code: z
    .string()
    .min(1, {
      message: "O CEP é obrigatório.",
    })
    .regex(/^\d{5}-\d{3}$/, {
      message: "CEP inválido. Use o formato 00000-000.",
    }),
  state: z.string().min(1, {
    message: "O estado é obrigatório.",
  }),
  city: z.string().min(1, {
    message: "A cidade é obrigatória.",
  }),
  street: z.string().min(1, {
    message: "A rua é obrigatória.",
  }),
  number: z.string().min(1, {
    message: "O número é obrigatório.",
  }),
  complement: z.string().nullable(),
  is_advertiser: z.boolean().nullish(),
  color: z.string().nullish(),
  inicial: z.string().nullish(),
  avatar: z.string().nullish(),
  resetToken: z.string().nullish(),
});

export const userSchemaRegister = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirm_password: z.string().min(1, {
      message: "Confirmação de senha é obrigatória.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas devem ser iguais",
    path: ["confirm_password"],
  });

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

export const usersSchemaResponse = userSchema.extend({
  adverts: z.optional(advertSchema).array(),
});

export const userSchemaResponse = userSchema.extend({
  adverts: z.optional(advertSchema).array(),
});

export const userSchemaUpdate = userSchema
  .omit({
    id: true,
    color: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .partial();

export const usersSchema = userSchemaResponse.array();
