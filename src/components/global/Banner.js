import styled, { css } from "styled-components";
import BgPattern from "../../assets/home/desktop/bg-pattern-hero-home.svg";

const updateDisplay = (location) => {
  switch (location) {
    case "header":
      return "justify-content: center";
    case "hero":
      return `background-image:url(${BgPattern})`;
    default:
      return "justify-content: space-between";
  }
};

const changeFlexDir = (location) => {
  switch (location) {
    default:
      return "row";
    case "hero":
      return "column ";
  }
};

const Banner = styled.section`
  background-color: #e7816b;
  background-repeat: no-repeat;
  background-position: 100%;

  display: flex;
  align-items: center;
  flex-direction: ${({ header }) => header && "column !important"};

  border-radius: 1rem;
  padding: ${({ header }) => header && " 3.5rem 0"};
  ${({ location }) => updateDisplay(location)};
  ${({ nearFooter }) =>
    nearFooter &&
    css`
      position: absolute;
      bottom: 320px;
      padding: 6.25rem;
      z-index: 1;
      color: #fff;
      width: 1154px;
      max-width: 77%;
      div {
        max-width: 80%;
      }
      h1 {
        text-transform: capitalize;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column !important;
        text-align: center;
        padding: 3.7rem;
        max-width: 90%;

        div {
          max-width: 100%;
        }
      }
      @media screen and (max-width: 539px) {
        bottom: 626px;
      }
      @media screen and (max-width: 414px) {
        padding: 4rem 2rem;
        margin: 2rem;
        border-radius: 1rem;
      }
    `}

  @media screen and (max-width: 768px) {
    flex-direction: ${({ location }) => changeFlexDir(location)};
    background-position: center;
  }

  @media screen and (max-width: 414px) {
    border-radius: 0rem;
    left: -10px;
  }
`;

export const BannerHeading = styled.h1`
  font-size: 48px;
  color: #fff;
  font-weight: 400;
  text-transform: capitalize;
`;

export const BannerSubHeading = styled.p`
  color: #fff;
  width: 50%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Banner;
