import { useEffect, useState } from "react";
import styled from "styled-components";

const PageContentWrapper = styled.section`
  border-radius: 1rem;
  display: flex;
  margin: 10rem 0;
  background-color: #fdf3f0;
  /* flex-direction: row-reverse; */
  flex-direction: ${({ changeOrder }) => changeOrder && "row-reverse"};
  @media screen and (max-width: 768px) {
    /* border: solid red; */
    flex-direction: column;
  }
  @media screen and (max-width: 414px) {
    margin: 0;
    border-radius: 0;
  }
`;

const PageContentGraphic = styled.div`
  min-width: 476px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

const PageGraphic = styled.img.attrs((props) => ({
  src: props.img,
}))`
  border-top-left-radius: ${({ orderChanged }) =>
    orderChanged ? "0rem" : ".8rem"};
  border-bottom-left-radius: ${({ orderChanged }) =>
    orderChanged ? "0rem" : ".8rem"};
  border-top-right-radius: ${({ orderChanged }) =>
    orderChanged ? "0.8rem" : "0rem"};
  border-bottom-right-radius: ${({ orderChanged }) =>
    orderChanged ? "0.8rem" : "0rem"};

  @media screen and (max-width: 768px) {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media screen and (max-width: 414px) {
    border-radius: 0;
  }
`;

const PageContentInfo = styled.div`
  padding: 9rem 6rem;
  @media screen and (max-width: 414px) {
    padding: 5.3rem 1.5rem;
    text-align: center;
  }
`;

const PageContentHeader = styled.h1`
  color: #e7816b;
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
`;

const PageContentDetails = styled.p`
  color: #333136;
  margin: 1rem 0;
  &:nth-of-type(2) {
    margin-top: 1.5rem;
  }
`;

const PageContent = ({ contents, changeOrder, orderChanged }) => {
  const {
    graphic,
    mobileGraphic,
    tabletGraphic,
    header,
    info,
    info2,
  } = contents;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <PageContentWrapper changeOrder={changeOrder}>
      <PageContentGraphic>
        {(() => {
          if (windowWidth <= 414) {
            return (
              <PageGraphic img={mobileGraphic} orderChanged={orderChanged} />
            );
          } else if (windowWidth >= 415 && windowWidth <= 768) {
            return (
              <PageGraphic img={tabletGraphic} orderChanged={orderChanged} />
            );
          } else {
            return <PageGraphic img={graphic} orderChanged={orderChanged} />;
          }
        })()}
      </PageContentGraphic>

      <PageContentInfo>
        <PageContentHeader>{header}</PageContentHeader>
        <PageContentDetails>{info}</PageContentDetails>
        <PageContentDetails>{info2}</PageContentDetails>
      </PageContentInfo>
    </PageContentWrapper>
  );
};

export default PageContent;
