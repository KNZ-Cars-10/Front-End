import { z } from "zod";

export const advertSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.string().min(1, {
    message: "O qno é obrigatório.",
  }),
  fuel: z.string(),
  mileage: z.string().min(1, {
    message: "a quilometragem é obrigatória.",
  }),
  color: z.string().min(1, {
    message: "A cor é obrigatória.",
  }),
  price_FIPE: z.string(),
  price: z.string().min(1, {
    message: "O preço é obrigatório.",
  }),
  description: z.string().min(1, {
    message: "a descrição é obrigatória.",
  }),
  cover_image: z.string().nullish(),
  other_images: z.string().array().nullish(),
  status: z.boolean().nullish(),
  comments: z
    .object({
      id: z.number(),
      text: z.string(),
      createdAt: z.string(),
      user: z.object({
        id: z.number(),
        name: z.string(),
        inicial: z.string(),
        color: z.string(),
      }),
    })
    .array(),
});

export const externalCar = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  year: z.string(),
  fuel: z.number(),
  value: z.number(),
});

export const externalCars = externalCar.array();

export const advertSchemaRequest = advertSchema.omit({
  id: true,
  createdAt: true,
  comments: true,
});

export const advertSchemaResponse = advertSchema.extend({
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    phone: z.string(),
    birth_date: z.string(),
    description: z.string(),
    zip_code: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().nullable(),
    is_advertiser: z.boolean(),
    color: z.string(),
    inicial: z.string(),
  }),
});

export const advertsSchemaResponse = advertSchema
  .extend({
    user: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string().email(),
      cpf: z.string(),
      phone: z.string(),
      birth_date: z.string(),
      description: z.string(),
      zip_code: z.string(),
      state: z.string(),
      city: z.string(),
      street: z.string(),
      number: z.string(),
      complement: z.string().nullable(),
      is_advertiser: z.boolean(),
      color: z.string(),
      inicial: z.string(),
    }),
  })
  .array();

export const updateAdvertSchema = advertSchemaRequest.partial();

export const advertsSchema = advertSchemaResponse.array();
