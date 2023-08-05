import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { StyledDash } from "./style";

export function DashPage() {
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
