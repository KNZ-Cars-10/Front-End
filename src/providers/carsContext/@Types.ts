import { TCars } from "../../schemas/cars.schema"

export type TCarsContext = {
    getCars: (brand: string) => void,
    cars: TCars[]
    brands: string[]
}