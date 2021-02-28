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

import AirFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import EyeCam from "../assets/app-design/desktop/image-eyecam.jpg";
import FaceIt from "../assets/app-design/desktop/image-faceit.jpg";
import LoopStudio from "../assets/app-design/desktop/image-loopstudios.jpg";
import Todo from "../assets/app-design/desktop/image-todo.jpg";
import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

const AppDesign = () => {
  const topContents = [
    {
      id: 0,
      graphic: AirFilter,
      header: "airfilter",
      details:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      id: 1,
      graphic: EyeCam,
      header: "eyecam",
      details:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 2,
      graphic: FaceIt,
      header: "faceit",
      details:
        "Get to meet your favorite internet superstar with the faceit app",
    },
  ];

  const bottomContents = [
    {
      id: 0,
      graphic: Todo,
      header: "todo",
      details: "A todo app that features cloud sync with light and dark mode",
    },
    {
      id: 1,
      graphic: LoopStudio,
      header: "loopstudio",
      details: "A VR experience app made for Loopstudios",
    },
  ];
  return (
    <main>
      <Banner location="header" header>
        <BannerHeading> app design </BannerHeading>
        <BannerSubHeading>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </BannerSubHeading>
      </Banner>

      <ContentBox innerPage topContentBox contents={topContents} />
      <ContentBox innerPage bottomContents contents={bottomContents} />

      <LinksContainer>
        <PageLinkWrapper>
          <PageLinkItem bgImage="web" tabletImage="web" mobileImage="web">
            <PageLink to="/web-design">
              web design
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
              </PageLinkSubtext>
            </PageLink>
          </PageLinkItem>
        </PageLinkWrapper>
      </LinksContainer>
    </main>
  );
};

export default AppDesign;
