import { z } from "zod";

export const schemaEditProfile = z.object({
    name: z.string(),
    email: z.string().email("Deve ser um e-mail"),
    cpf: z.string(),
    // .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    //     message: "CPF inválido. Use o formato 000.000.000-00",
    // }),
    birth_date: z.string(),
    description: z.string(),
});


export const TEditProfilePartial = schemaEditProfile.partial();

export type TEditProfile = z.infer<typeof TEditProfilePartial>;