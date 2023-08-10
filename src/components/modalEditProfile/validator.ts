import { z } from "zod";

export const schemaEditProfile = z.object({
    name: z.string(),
    email: z.string().email("Deve ser um e-mail"),
    cpf: z.string().max(11, "CPF deve ter no máximo 11 caracteres"),
    celular: z.string().regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/i, "Celular inválido"), // Exemplo de validação de celular
    dataNascimento: z.string(), // Você pode adicionar validações específicas aqui, se necessário
    descricao: z.string(),
});

export type TEditProfile = z.infer<typeof schemaEditProfile>;