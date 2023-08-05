import { StyledHeader } from "./style";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  const [nav, setNav] = useState(false);

  return (
    <StyledHeader nav={nav}>
      <div className="navUp">
        <div>
          <h1>
            Motors <span>shop</span>
          </h1>
        </div>

        <div className="navUpButtons">
          <span> Fazer Login</span>
          <button>Cadastrar</button>
        </div>

        <GiHamburgerMenu className="menuIcon" onClick={() => setNav(!nav)} />
      </div>

      <div className="navDown">
        <span>Fazer Login</span>

        <button>Cadastrar</button>
      </div>
    </StyledHeader>
  );
}
