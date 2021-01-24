import styled from "styled-components";

const PageContentWrapper = styled.section`
  border-radius: 1rem;
  display: flex;
  margin: 10rem 0;
  background-color: #fdf3f0;
  /* flex-direction: row-reverse; */
  flex-direction: ${({ changeOrder }) => changeOrder && "row-reverse"};
`;

const PageContentGraphic = styled.div`
  min-width: 476px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageGraphic = styled.img`
  border-top-left-radius: ${({ orderChanged }) =>
    orderChanged ? "0rem" : ".8rem"};
  border-bottom-left-radius: ${({ orderChanged }) =>
    orderChanged ? "0rem" : ".8rem"};
  border-top-right-radius: ${({ orderChanged }) =>
    orderChanged ? "0.8rem" : "0rem"};
  border-bottom-right-radius: ${({ orderChanged }) =>
    orderChanged ? "0.8rem" : "0rem"};
`;

const PageContentInfo = styled.div`
  padding: 9rem 6rem;
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
  const { graphic, header, info, info2 } = contents;
  return (
    <PageContentWrapper changeOrder={changeOrder}>
      <PageContentGraphic>
        <PageGraphic src={graphic} orderChanged={orderChanged} />
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
