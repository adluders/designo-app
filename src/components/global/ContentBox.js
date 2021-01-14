import styled from "styled-components";
import BgPattern from "../../assets/home/desktop/bg-pattern-hero-home.svg";

const ContentBoxWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: ${({ topContentBox }) => topContentBox && "10rem"};
  margin-bottom: ${({ bottomContentBox }) => bottomContentBox && "10rem"};

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentItem = styled.div`
  color: #333136;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ innerPage }) => (innerPage ? "#fdf3f0" : "")};
  padding-bottom: ${({ innerPage }) => innerPage && "2rem"};
  cursor: ${({ innerPage }) => innerPage && "pointer"};
  margin-bottom: ${({ topContentBox }) => topContentBox && "2rem"};
  border-radius: ${({ innerPage }) => innerPage && "1rem"};

  &:hover {
    background-color: ${({ innerPage }) => innerPage && "#e7816b"};
    color: ${({ innerPage }) => innerPage && "#fff"};
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-column: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }
  @media screen and (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentGraphic = styled.img`
  background-image: url(${BgPattern});
  background-position: center;
  background-size: cover;
  width: ${({ homeGraphic }) => (homeGraphic ? "202px" : "100%")};
  border-top-left-radius: ${({ innerPage }) => innerPage && "1rem"};
  border-top-right-radius: ${({ innerPage }) => innerPage && "1rem"};
  @media screen and (max-width: 768px) {
    grid-row: 1/3;
  }
`;

const ContentHeader = styled.h3`
  margin: 2.5rem 0 2rem 0;
  letter-spacing: 3px;
  font-weight: 400;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    grid-column: 2/2;
    margin: 0;
  }
`;

const Content = styled.p`
  padding: ${({ innerPage }) => innerPage && "0 2rem"};

  @media screen and (max-width: 768px) {
    grid-column: 2/2;
  }
`;

const ContentBox = ({
  contents,
  topContentBox,
  bottomContentBox,
  homeGraphic,
  innerPage,
}) => {
  return (
    <ContentBoxWrapper
      topContentBox={topContentBox}
      bottomContentBox={bottomContentBox}
    >
      {contents.map((content) => {
        const { id, header, details, graphic } = content;
        return (
          <ContentItem
            key={id}
            innerPage={innerPage}
            topContentBox={topContentBox}
          >
            <ContentGraphic
              homeGraphic={homeGraphic}
              src={graphic}
              alt={`${header} graphic`}
              innerPage={innerPage}
            />
            <ContentHeader> {header} </ContentHeader>
            <Content innerPage={innerPage}> {details} </Content>
          </ContentItem>
        );
      })}
    </ContentBoxWrapper>
  );
};

export default ContentBox;
