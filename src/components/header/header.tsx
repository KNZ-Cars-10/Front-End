import { StyledHeader } from "./style";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
          <Link to="/login">Fazer Login</Link>
          <Link to="/register" className="register">
            Cadastrar
          </Link>
        </div>

        <GiHamburgerMenu className="menuIcon" onClick={() => setNav(!nav)} />
      </div>

      <div className="navDown">
        <Link to="/login">Fazer Login</Link>

        <Link to="/register" className="register">
          Cadastrar
        </Link>
      </div>
    </StyledHeader>
  );
}
