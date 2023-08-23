import { StyledHeader } from "./style";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../providers/userContext/userContext";

export const Header = () => {
  const { profile, userLogout, userMenu, setUserMenu } =
    useContext(UserContext);

  const [nav, setNav] = useState(false);

  useEffect(() => {
    setUserMenu(false);
  }, []);

  let currentRoute = useLocation();

  return (
    <StyledHeader nav={nav} color={profile?.color}>
      <div className="navUp">
        <div>
          <Link className="home" to="/">
            Motors <span>shop</span>
          </Link>
        </div>

        {profile != null ? (
          <div className="navUpUser">
            <div onClick={() => setUserMenu(!userMenu)} className="avatarUp">
              <div>
                <span>{profile.inicial}</span>
              </div>
              <span>{profile.name}</span>
            </div>
            {userMenu ? (
              <div className="userMenuUp">
                <Link to="/profile">Minha Conta</Link>
                <Link to="/">Home</Link>
                <span onClick={() => userLogout()}>Sair</span>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="navUpButtons">
            {currentRoute.pathname == "/login" ? (
              <Link to="/">Home</Link>
            ) : (
              <Link to="/login">Fazer Login</Link>
            )}

            {currentRoute.pathname == "/register" ? (
              <Link to="/" className="register">
                Home
              </Link>
            ) : (
              <Link to="/register" className="register">
                Cadastrar
              </Link>
            )}
          </div>
        )}

        <GiHamburgerMenu className="menuIcon" onClick={() => setNav(!nav)} />
      </div>

      {profile != null ? (
        <div className="navDownUser">
          <div>
            <div>
              <span>{profile.inicial}</span>
            </div>
            <span>{profile.name}</span>
          </div>

          <Link to="/profile">Minha Conta</Link>
          <Link to="/">Home</Link>
          <span onClick={() => userLogout()}>Sair</span>
        </div>
      ) : (
        <div className="navDown">
          {currentRoute.pathname == "/login" ? (
            <Link to="/">Home</Link>
          ) : (
            <Link to="/login">Fazer Login</Link>
          )}

          {currentRoute.pathname == "/register" ? (
            <Link to="/" className="register">
              Home
            </Link>
          ) : (
            <Link to="/register" className="register">
              Cadastrar
            </Link>
          )}
        </div>
      )}
    </StyledHeader>
  );
};
