import styled from "styled-components";
import { Link } from "react-router-dom";

import WebDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GraphicDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import AppDesign from "../../assets/home/desktop/image-app-design.jpg";

import TabletWeb from "../../assets/home/tablet/image-web-design.jpg";
import TabletApp from "../../assets/home/tablet/image-app-design.jpg";
import TabletGraphic from "../../assets/home/tablet/image-graphic-design.jpg";

import MobileWeb from "../../assets/home/mobile/image-web-design.jpg";
import MobileApp from "../../assets/home/mobile/image-app-design.jpg";
import MobileGraphic from "../../assets/home/mobile/image-graphic-design.jpg";

const gridPosition = (gridSize) => {
  switch (gridSize) {
    default:
      return " auto";
    case "double":
      return " 1 / 3";
  }
};

const getBgChoice = (bgImage) => {
  switch (bgImage) {
    case "web":
      return `url(${WebDesign})`;
    case "app":
      return `url(${AppDesign})`;
    case "graphic":
      return `url(${GraphicDesign})`;
    default:
      return ``;
  }
};

const getTabletBg = (bgImage) => {
  switch (bgImage) {
    case "web":
      return `url(${TabletWeb})`;
    case "app":
      return `url(${TabletApp})`;
    case "graphic":
      return `url(${TabletGraphic})`;
    default:
      return ``;
  }
};

const getMobileBg = (bgImage) => {
  switch (bgImage) {
    case "web":
      return `url(${MobileWeb})`;
    case "app":
      return `url(${MobileApp})`;
    case "graphic":
      return `url(${MobileGraphic})`;

    default:
      return ``;
  }
};

export const LinksContainer = styled.section`
  margin: 10rem 0;
  @media screen and (max-width: 768px) {
    margin: 7.5rem 0;
  }
  @media screen and (max-width: 414px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const PageLinkWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PageLinkItem = styled.li`
  /* border: solid red; */
  grid-row: ${({ gridSize }) => gridPosition(gridSize)};

  min-height: 308px;

  background-image: ${({ bgImage }) => getBgChoice(bgImage)};
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    min-height: 100%;
    background-image: ${({ tabletImage }) => getTabletBg(tabletImage)};
  }

  @media screen and (max-width: 414px) {
    background-image: ${({ mobileImage }) => getMobileBg(mobileImage)};
    margin: 2rem 0;
  }
`;

export const PageLink = styled(Link)`
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 3rem;
  letter-spacing: 0.1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 1rem;

  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;

  &:hover {
    background-color: rgba(231, 129, 107, 0.85);
  }

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }

  @media screen and (max-width: 414px) {
    min-height: 250px;
  }
`;

export const PageLinkSubtext = styled.p`
  font-size: 1rem;
  min-width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8%;
  }

  @media screen and (max-width: 414px) {
    min-width: 45%;
  }
`;
