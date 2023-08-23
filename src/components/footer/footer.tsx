import { StyledFooter } from "./style";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <StyledFooter>
      <h3>
        Motors <span>shop</span>
      </h3>

      <span>2022 - Todods os direitos reservados.</span>

      <div onClick={() => scrollToTop()} className="arrow">
        <AiOutlineArrowUp />
      </div>
    </StyledFooter>
  );
};
