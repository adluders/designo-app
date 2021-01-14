import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { LogoWrapper } from "./global/GlobalStyles";

import DarkLogo from "../assets/shared/desktop/logo-dark.png";
import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Close from "../assets/shared/mobile/icon-close.svg";

const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem;
`;

const MobileNavContent = styled.ul`
  background-color: black;
  width: 100%;

  position: absolute;
  top: 83px;
  left: 0;

  display: flex;
  flex-direction: column;

  padding: 4rem 2rem;
  z-index: 2;
`;

const MobileLinkItem = styled.li`
  margin: 0.8rem 0;
`;

const MobileNavLink = styled(Link)`
  color: red;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  color: #fff;
`;

const NavButton = styled.button`
  img {
    pointer-events: none;
  }
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const MobileNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => setNavOpen(!isNavOpen);

  const resetNav = () => setNavOpen(false);

  return (
    <MobileNavWrapper>
      <LogoWrapper>
        <MobileNavLink to="/" onClick={resetNav}>
          <img src={DarkLogo} alt="Designo Logo" />
        </MobileNavLink>
      </LogoWrapper>

      <NavButton onClick={handleNavOpen}>
        <img src={isNavOpen ? Close : Hamburger} alt="Open Nav" />
      </NavButton>

      {isNavOpen && (
        <MobileNavContent>
          <MobileLinkItem>
            <MobileNavLink to="/company" onClick={resetNav}>
              our company
            </MobileNavLink>
          </MobileLinkItem>
          <MobileLinkItem>
            <MobileNavLink to="/locations" onClick={resetNav}>
              locations
            </MobileNavLink>
          </MobileLinkItem>
          <MobileLinkItem>
            <MobileNavLink to="/contact" onClick={resetNav}>
              contact
            </MobileNavLink>
          </MobileLinkItem>
        </MobileNavContent>
      )}
    </MobileNavWrapper>
  );
};

export default MobileNav;
