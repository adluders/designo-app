import styled from "styled-components";
import { Container, LogoWrapper } from "../components/global/GlobalStyles";
import {
  NavWrapper,
  NavLinksWrapper,
  NavLinks,
  NavLinkItem,
} from "../components/Navbar";
import { Heading, SubHeading } from "../pages/Home";
import Banner from "./global/Banner";
import { Button } from "./global/Button";

import LightLogo from "../assets/shared/desktop/logo-light.png";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Youtube from "../assets/shared/desktop/icon-youtube.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";

const FooterWrapper = styled.footer`
  background-color: #1d1c1e;
  padding-bottom: 4.5rem;
  margin-top: 24rem;

  position: relative;
`;

const FooterContainer = styled(Container)``;

const FooterNav = styled(NavWrapper)`
  max-width: 100%;
  padding: 0;
  margin: 0;
  padding-top: 9rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 540px) {
    border-bottom: none;
    flex-direction: column;
    padding-top: 15rem;
  }
`;

const FooterLogo = styled(LogoWrapper)`
  @media screen and (max-width: 540px) {
    width: 100%;
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    img {
      width: 70%;
    }
  }
`;

const FooterLinks = styled(NavLinksWrapper)`
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

const FooterLinkItem = styled(NavLinks)``;

const FooterLink = styled(NavLinkItem)`
  color: #fff;
`;

const FooterInfoWrapper = styled.section`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.8rem;
  }
`;

const FooterInfoBlock = styled.div``;

const FooterInfo = styled.p`
  color: rgba(255, 255, 255, 0.5);
  text-transform: capitalize;
  span {
    text-transform: none;
  }
`;

const SocialLinksWrapper = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
`;

const SocialLinkItem = styled.li``;

const SocialLink = styled.a``;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Banner nearFooter>
          <div>
            <Heading>let's talk about your project</Heading>
            <SubHeading>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </SubHeading>
          </div>

          <Button to="/contact">get in touch</Button>
        </Banner>

        <FooterNav>
          <FooterLogo>
            <FooterLink to="/">
              <img src={LightLogo} alt="Designo Logo" />
            </FooterLink>
          </FooterLogo>

          <FooterLinks>
            <FooterLinkItem>
              <FooterLink to="/company">our company</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/locations">locations</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/contact">contact</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterNav>

        <FooterInfoWrapper>
          <FooterInfoBlock>
            <FooterInfo>designo central office</FooterInfo>
            <FooterInfo>3886 wellington stree</FooterInfo>
            <FooterInfo>toronto, ontario M9C 3J5</FooterInfo>
          </FooterInfoBlock>

          <FooterInfoBlock>
            <FooterInfo>contact us (central office)</FooterInfo>
            <FooterInfo>p: +1 253-863-8967</FooterInfo>
            <FooterInfo>
              m: <span>contact@designo.co </span>
            </FooterInfo>
          </FooterInfoBlock>

          <SocialLinksWrapper>
            <SocialLinkItem>
              <SocialLink
                href="https://www.facebook.com"
                target="_blank"
                rel="no-referrer"
              >
                <img src={Facebook} alt="" />
              </SocialLink>
            </SocialLinkItem>
            <SocialLinkItem>
              <SocialLink
                href="https://www.youtube.com"
                target="_blank"
                rel="no-referrer"
              >
                <img src={Youtube} alt="" />
              </SocialLink>
            </SocialLinkItem>
            <SocialLinkItem>
              <SocialLink
                href="https://www.twitter.com"
                target="_blank"
                rel="no-referrer"
              >
                <img src={Twitter} alt="" />
              </SocialLink>
            </SocialLinkItem>
            <SocialLinkItem>
              <SocialLink
                href="https://www.pinterest.com"
                target="_blank"
                rel="no-referrer"
              >
                <img src={Pinterest} alt="" />
              </SocialLink>
            </SocialLinkItem>
            <SocialLinkItem>
              <SocialLink
                href="https://www.instagram.com"
                target="_blank"
                rel="no-referrer"
              >
                <img src={Instagram} alt="" />
              </SocialLink>
            </SocialLinkItem>
          </SocialLinksWrapper>
        </FooterInfoWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
