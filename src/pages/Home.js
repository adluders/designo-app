import styled from "styled-components";
import Banner from "../components/global/Banner";
import { Button } from "../components/global/Button";
import { PageLink, LinkItem } from "../components/global/PageLink";

import HeroPhone from "../assets/home/desktop/image-hero-phone.png";

const HeroInfoWrapper = styled.div`
  max-width: 50%;
  color: #fff;
  margin-left: 6rem;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 1.3rem;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 400;
  @media screen and (max-width: 375px) {
    font-size: 32px;
  }
`;

const SubHeading = styled.p`
  font-size: 16px;
  margin: 1rem auto 2rem auto;
`;

const HeroGraphicWrapper = styled.div`
  /* border: solid purple; */
  /* display: flex;
  align-items: center;
  img {
    align-self: stretch;
    border: solid red;
    object-fit: none;
    object-position: -100px -100px;
    @media screen and (max-width: 768px) {
      object-position: initial;
    }
  } */
  img {
    object-fit: none;
  }
`;

const LinksContainer = styled.section`
  border: solid purple;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* margin-bottom: 5rem; */
  gap: 2rem;
  margin-top: 10rem;
`;

const Home = () => {
  return (
    <main>
      <Banner location="hero">
        <HeroInfoWrapper>
          <Heading>
            Award-winning custom designs and digital branding solutions
          </Heading>
          <SubHeading>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </SubHeading>
          <Button>learn more</Button>
        </HeroInfoWrapper>

        <HeroGraphicWrapper>
          <img src={HeroPhone} alt="Homepage Phone" />
        </HeroGraphicWrapper>
      </Banner>

      <LinksContainer>
        <PageLink gridSize="double" bgImage="web">
          <LinkItem to="/web-design">Web</LinkItem>
        </PageLink>

        <PageLink bgImage="app">
          <LinkItem to="app-design">App</LinkItem>
        </PageLink>

        <PageLink bgImage="graphic">
          <LinkItem to="graphic-design">Graph</LinkItem>
        </PageLink>
      </LinksContainer>
    </main>
  );
};

export default Home;

// <PageLink
// gridSize="double"
// userLink="/web-design"
// linkText="Web Design"
// userImage={WebDesign}
// />
// <PageLink userLink="/app-design" linkText="App Design" />
// <PageLink userLink="/graphic-design" linkText="graphic Design" />
