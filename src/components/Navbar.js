import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./global/GlobalStyles";
import Logo from "../assets/shared/desktop/logo-dark.png";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
`;

const NavLinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLinks = styled.li`
  list-style: none;
`;

const NavLinkItem = styled(Link)`
  color: #333136;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <header>
      <NavWrapper>
        <LogoWrapper>
          <NavLinkItem to="/">
            <img src={Logo} alt="Designo Logo" />
          </NavLinkItem>
        </LogoWrapper>
        <NavLinksWrapper>
          <NavLinks>
            <NavLinkItem to="/company">our company</NavLinkItem>
          </NavLinks>
          <NavLinks>
            <NavLinkItem to="/locations">locations </NavLinkItem>
          </NavLinks>
          <NavLinks>
            <NavLinkItem to="/contact">contact</NavLinkItem>
          </NavLinks>
        </NavLinksWrapper>
      </NavWrapper>
    </header>
  );
};

export default Navbar;
