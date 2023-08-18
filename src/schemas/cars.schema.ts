
import z from "zod"

export const carsSchema = z.object({
    id: z.string(),
    name: z.string(),
    year: z.string(),
    fuel: z.number(),
    value: z.number(),
})

export const brandSchema = z.object({
    chevrolet: z.array(z.object({name:z.string()})),
    citroën: z.array(z.object({name:z.string()})),
    fiat: z.array(z.object({name:z.string()})),
    ford: z.array(z.object({name:z.string()})),
    honda: z.array(z.object({name:z.string()})),
    hyundai: z.array(z.object({name:z.string()})),
    nissan: z.array(z.object({name:z.string()})),
    peugeot: z.array(z.object({name:z.string()})),
    renault: z.array(z.object({name:z.string()})),
    toyota: z.array(z.object({name:z.string()})),
    volkswagen: z.array(z.object({name:z.string()})),

})

export type TCars = z.infer<typeof carsSchema>
export type TBrand = z.infer<typeof brandSchema>