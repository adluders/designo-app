import styled from "styled-components";
import Banner, {
  BannerHeading,
  BannerSubHeading,
} from "../components/global/Banner";
import PageContent from "../components/global/PageContent";
import ContentBox from "../components/global/ContentBox";

import Hero from "../assets/about/desktop/image-about-hero.jpg";
// import TabletHero from "../assets/about/tablet/image-about-hero.jpg";
import Talent from "../assets/about/desktop/image-world-class-talent.jpg";
import RealDeal from "../assets/about/desktop/image-real-deal.jpg";
import Australia from "../assets/shared/desktop/illustration-australia.svg";
import Canada from "../assets/shared/desktop/illustration-canada.svg";
import UnitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";

const InnerBanner = styled(Banner)`
  /* border: solid red; */
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const InnerBannerWrapper = styled.div`
  margin-left: 6rem;
`;

const InnerSubHeading = styled(BannerSubHeading)`
  width: 80%;
  text-align: left;
`;

const StyledImg = styled.img`
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: contain;
`;

const companyContents = [
  {
    id: 0,
    graphic: Australia,
    header: "Australia",
    details: "see location",
  },
  {
    id: 1,
    graphic: Canada,
    header: "Cananda",
    details: "see location",
  },
  {
    id: 2,
    graphic: UnitedKingdom,
    header: "united kingdom",
    details: "see location",
  },
];

const pageContent = {
  graphic: Talent,
  header: "World-class talent",
  info:
    "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
  info2:
    "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission. ",
};

const secondPageContent = {
  graphic: RealDeal,
  header: "The real deal",
  info:
    "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
  info2:
    "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
};

const Company = () => {
  return (
    <main>
      <InnerBanner location="hero">
        <InnerBannerWrapper>
          <BannerHeading>About Us</BannerHeading>
          <InnerSubHeading>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.{" "}
          </InnerSubHeading>
        </InnerBannerWrapper>
        <StyledImg src={Hero} alt="" />
      </InnerBanner>

      <PageContent contents={pageContent} />

      <ContentBox containButton contents={companyContents} />

      <PageContent orderChanged changeOrder contents={secondPageContent} />
    </main>
  );
};

export default Company;
