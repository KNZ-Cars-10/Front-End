import { useEffect, useState } from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { StyledDash } from "./style";
import {
  TAdvertResponseFull,
  TAdverts,
} from "../../providers/advertContext/@Types";

export function DashPage() {
  const [mock, setMock] = useState<TAdvertResponseFull>();

  useEffect(() => {
    setMock({
      prevPage: null,
      nextPage: null,
      count: 3,
      data: [
        {
          id: 1,
          brand: "Chevrolet",
          model: "Camaro",
          year: 2018,
          fuel: "adtivada",
          mileage: 30000,
          color: "White",
          price_FIPE: 4800000,
          price: 5000000,
          description: "Essa é a descrição desse carro!!",
          cover_image: null,
          first_image: null,
          second_image: null,
          other_images: null,
          user: {
            id: 1,
            name: "Rafael",
            email: "rafael@mail.com",
            cpf: "123456789",
            phone: "123456789",
            birth_date: "2011-11-11",
            description: "Essa é a descrição desse Usuario ",
            zip_code: "05265040",
            state: "sp",
            city: "São Paulo",
            street: "rua das tipagens",
            number: 1234,
            complement: "do lado dos frameworks",
            is_advertise: false,
          },
        },
        {
          id: 2,
          brand: "Chevrolet",
          model: "Camaro",
          year: 2018,
          fuel: "Gasolina",
          mileage: 30000,
          color: "White",
          price_FIPE: 4800000,
          price: 5000000,
          description: "Essa é a descrição desse carro!!",
          cover_image: null,
          first_image: null,
          second_image: null,
          other_images: null,
          user: {
            id: 1,
            name: "Rafael",
            email: "rafael@mail.com",
            cpf: "123456789",
            phone: "123456789",
            birth_date: "2011-11-11",
            description: "Essa é a descrição desse Usuario ",
            zip_code: "05265040",
            state: "sp",
            city: "São Paulo",
            street: "rua das tipagens",
            number: 1234,
            complement: "do lado dos frameworks",
            is_advertise: false,
          },
        },
        {
          id: 3,
          brand: "Chevrolet",
          model: "Camaro",
          year: 2018,
          fuel: "Gasolina",
          mileage: 30000,
          color: "White",
          price_FIPE: 4800000,
          price: 5000000,
          description: "Essa é a descrição desse carro!!",
          cover_image: null,
          first_image: null,
          second_image: null,
          other_images: ["123", "321"],
          user: {
            id: 1,
            name: "Rafael",
            email: "rafael@mail.com",
            cpf: "123456789",
            phone: "123456789",
            birth_date: "2011-11-11",
            description: "Essa é a descrição desse Usuario ",
            zip_code: "05265040",
            state: "sp",
            city: "São Paulo",
            street: "rua das tipagens",
            number: 1234,
            complement: "do lado dos frameworks",
            is_advertise: false,
          },
        },
      ],
    });
  }, []);

  return (
    <>
      <Header />
      <StyledDash>
        <section className="banner">
          <div className="linearGradient">
            <h2>Motors Shop</h2>
            <p>A melhor plataforma de anúncios de carros do páis</p>
          </div>
        </section>
      </StyledDash>
      <Footer />
    </>
  );
}
