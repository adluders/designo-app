import styled from "styled-components";
import { Link } from "react-router-dom";

import WebDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import GraphicDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import AppDesign from "../../assets/home/desktop/image-app-design.jpg";

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

export const PageLink = styled.div`
  border: solid black;
  grid-row: ${({ gridSize }) => gridPosition(gridSize)};

  background-image: ${({ bgImage }) => getBgChoice(bgImage)};
  background-repeat: no-repeat;
  background-size: cover;

  image-rendering: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 308px;
  border-radius: 1rem;
`;

export const LinkItem = styled(Link)`
  color: red;
`;

export const PageLinkGraphic = styled.img`
  border: solid purple;
`;

// export const PageLink = ({ userLink, linkText }) => {
//   return (
//     <LinkWrapper>
//       <LinkItem to={`${userLink}`}> {linkText} </LinkItem>
//     </LinkWrapper>
//   );
// };
