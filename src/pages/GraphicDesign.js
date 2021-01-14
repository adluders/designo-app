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

import TimBrown from "../assets/graphic-design/desktop/image-change.jpg";
import BoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import Science from "../assets/graphic-design/desktop/image-science.jpg";
import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

const GraphicDesign = () => {
  const pageContents = [
    {
      id: 0,
      graphic: TimBrown,
      header: "tim brown",
      details: "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      id: 1,
      graphic: BoxedWater,
      header: "boxed water",
      details: "A simple packaging concept made for Boxed Water",
    },
    {
      id: 2,
      graphic: Science,
      header: "science!",
      details: "A poster made in collaboration with the Federal Art Project",
    },
  ];
  return (
    <main>
      <Banner location="header" header>
        <BannerHeading>graphic design</BannerHeading>
        <BannerSubHeading>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </BannerSubHeading>
      </Banner>

      <ContentBox innerPage topContentBox contents={pageContents} />

      <LinksContainer>
        <PageLinkWrapper>
          <PageLinkItem bgImage="app" tabletImage="app" mobileImage="app">
            <PageLink to="/app-design">
              app design
              <PageLinkSubtext>
                view projects
                <img src={RightArrow} alt="Call To Action Arrow" />
              </PageLinkSubtext>
            </PageLink>
          </PageLinkItem>

          <PageLinkItem bgImage="web" tabletImage="web" mobileImage="web">
            <PageLink to="/web-design">
              graphic design
              <PageLinkSubtext>
                view projects
                <img src={RightArrow} alt="Call To Action Arrow" />
              </PageLinkSubtext>
            </PageLink>
          </PageLinkItem>
        </PageLinkWrapper>
      </LinksContainer>
    </main>
  );
};

export default GraphicDesign;
