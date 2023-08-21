import { StyledFooter } from "./style";
import { AiOutlineArrowUp } from "react-icons/ai";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <h3>
        Motors <span>shop</span>
      </h3>
      <span>2023 - Todods os direitos reservados.</span>
      <button className="arrow" onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </button>
    </StyledFooter>
  );
}
