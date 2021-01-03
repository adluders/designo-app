import styled from "styled-components";
import Banner from "../components/global/Banner";
import { Button } from "../components/global/Button";
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

const HeroGraphicWrapper = styled.div``;

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
    </main>
  );
};

export default Home;
