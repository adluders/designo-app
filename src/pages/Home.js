import styled from "styled-components";
import Banner from "../components/global/Banner";
import { Button } from "../components/global/Button";
import {
  PageLinkWrapper,
  PageLink,
  PageLinkItem,
  PageLinkSubtext,
  LinksContainer,
} from "../components/global/PageLink";

import ContentBox from "../components/global/ContentBox";

import HeroPhone from "../assets/home/desktop/image-hero-phone.png";
import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

import Passionate from "../assets/home/desktop/illustration-passionate.svg";
import Resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../assets/home/desktop/illustration-friendly.svg";

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

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 400;
  @media screen and (max-width: 414px) {
    font-size: 32px;
  }
`;

export const SubHeading = styled.p`
  font-size: 16px;
  margin: 1rem auto 2rem auto;
`;

const HeroGraphicWrapper = styled.div`
  img {
    object-fit: none;
  }
  @media screen and (max-width: 768px) {
    img {
      object-fit: contain;
    }
  }
`;

const homepageContents = [
  {
    id: 0,
    graphic: Passionate,
    header: "passionate",
    details:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: 1,
    graphic: Resourceful,
    header: "resourceful",
    details:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: 2,
    graphic: Friendly,
    header: "friendly",
    details:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

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
          <Button to="/company">learn more</Button>
        </HeroInfoWrapper>

        <HeroGraphicWrapper>
          <img src={HeroPhone} alt="Homepage Phone" />
        </HeroGraphicWrapper>
      </Banner>

      <LinksContainer>
        <PageLinkWrapper>
          <PageLinkItem
            bgImage="web"
            tabletImage="web"
            mobileImage="web"
            gridSize="double"
          >
            <PageLink to="/web-design">
              web design
              <PageLinkSubtext>
                view projects
                <img src={RightArrow} alt="Call To Action Arrow" />
              </PageLinkSubtext>
            </PageLink>
          </PageLinkItem>

          <PageLinkItem bgImage="app" tabletImage="app" mobileImage="app">
            <PageLink to="/app-design">
              app design
              <PageLinkSubtext>
                view projects
                <img src={RightArrow} alt="Call To Action Arrow" />
              </PageLinkSubtext>
            </PageLink>
          </PageLinkItem>

          <PageLinkItem
            bgImage="graphic"
            tabletImage="graphic"
            mobileImage="graphic"
          >
            <PageLink to="/graphic-design">
              graphic design
              <PageLinkSubtext>
                view projects
                <img src={RightArrow} alt="Call To Action Arrow" />
              </PageLinkSubtext>{" "}
            </PageLink>
          </PageLinkItem>
        </PageLinkWrapper>
      </LinksContainer>

      <ContentBox contents={homepageContents} homeGraphic />
    </main>
  );
};

export default Home;
