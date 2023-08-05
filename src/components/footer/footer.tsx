import { StyledFooter } from "./style";
import { AiOutlineArrowUp } from "react-icons/ai";

export function Footer() {
  return (
    <StyledFooter>
      <h3>
        Motors <span>shop</span>
      </h3>

      <span>2022 - Todods os direitos reservados.</span>

      <div className="arrow">
        <AiOutlineArrowUp />
      </div>
    </StyledFooter>
  );
}
