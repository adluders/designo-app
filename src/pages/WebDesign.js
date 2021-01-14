import Banner, {
  BannerHeading,
  BannerSubHeading,
} from "../components/global/Banner";
import ContentBox from "../components/global/ContentBox";
import {
  LinksContainer,
  PageLinkWrapper,
  PageLinkItem,
  PageLink,
  PageLinkSubtext,
} from "../components/global/PageLink";

import Express from "../assets/web-design/desktop/image-express.jpg";
import Transfer from "../assets/web-design/desktop/image-transfer.jpg";
import Photon from "../assets/web-design/desktop/image-photon.jpg";

import Builder from "../assets/web-design/desktop/image-builder.jpg";
import Blogr from "../assets/web-design/desktop/image-blogr.jpg";
import Camp from "../assets/web-design/desktop/image-camp.jpg";

import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

const WebDesign = () => {
  const firstContents = [
    {
      id: 0,
      graphic: Express,
      header: "express",
      details: "A multi-carrier shipping website for ecommerce business",
    },
    {
      id: 1,
      graphic: Transfer,
      header: "transfer",
      details:
        "Site for low-const money transfer and sending money within seconds",
    },
    {
      id: 2,
      graphic: Photon,
      header: "photon",
      details:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
  ];

  const secondContents = [
    {
      id: 0,
      graphic: Builder,
      header: "builder",
      details: "Connects users with local contractors based on their location",
    },
    {
      id: 1,
      graphic: Blogr,
      header: "blogr",
      details: "Blogr is a platform for creating an online blog or publication",
    },
    {
      id: 2,
      graphic: Camp,
      header: "camp",
      details:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ];
  return (
    <main>
      <Banner location="header" header>
        <BannerHeading>web design</BannerHeading>
        <BannerSubHeading>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </BannerSubHeading>
      </Banner>

      <ContentBox innerPage topContentBox contents={firstContents} />
      <ContentBox innerPage bottomContentBox contents={secondContents} />

      <LinksContainer>
        <PageLinkWrapper>
          <PageLinkItem bgImage="app" tabletImage="app" mobileImage="app">
            <PageLink to="/app-design">
              app design
              <PageLinkSubtext>
                view projects{" "}
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
                view projects{" "}
                <img src={RightArrow} alt="Call To Action Arrow" />
              </PageLinkSubtext>
            </PageLink>
          </PageLinkItem>
        </PageLinkWrapper>
      </LinksContainer>
    </main>
  );
};

export default WebDesign;
